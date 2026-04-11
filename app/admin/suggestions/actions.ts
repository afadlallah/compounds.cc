"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/guard";
import { logAdminAction } from "@/lib/admin/audit";

export async function acceptSuggestion(id: string) {
  const { supabase, profile } = await requireAdmin();
  const { error } = await supabase
    .from("suggestions")
    .update({ status: "accepted" })
    .eq("id", id);
  if (error) return { ok: false as const, error: error.message };

  await logAdminAction(supabase, profile.id, {
    action: "suggestion.accept",
    targetTable: "suggestions",
    targetId: id,
  });
  revalidatePath("/admin/suggestions");
  return { ok: true as const };
}

export async function rejectSuggestion(id: string) {
  const { supabase, profile } = await requireAdmin();
  const { error } = await supabase
    .from("suggestions")
    .update({ status: "rejected" })
    .eq("id", id);
  if (error) return { ok: false as const, error: error.message };

  await logAdminAction(supabase, profile.id, {
    action: "suggestion.reject",
    targetTable: "suggestions",
    targetId: id,
  });
  revalidatePath("/admin/suggestions");
  return { ok: true as const };
}
