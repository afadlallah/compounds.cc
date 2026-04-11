"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type ActionResult = { ok: boolean; bookmarked?: boolean; error?: string };

export async function toggleBookmark(
  compoundId: string,
  slug: string,
): Promise<ActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { ok: false, error: "Please sign in to bookmark compounds" };

  const { data: existing } = await supabase
    .from("bookmarks")
    .select("user_id")
    .eq("user_id", user.id)
    .eq("compound_id", compoundId)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("user_id", user.id)
      .eq("compound_id", compoundId);
    if (error) return { ok: false, error: error.message };
    revalidatePath(`/substances/${slug}`);
    return { ok: true, bookmarked: false };
  }

  const { error } = await supabase
    .from("bookmarks")
    .insert({ user_id: user.id, compound_id: compoundId });
  if (error) return { ok: false, error: error.message };
  revalidatePath(`/substances/${slug}`);
  return { ok: true, bookmarked: true };
}
