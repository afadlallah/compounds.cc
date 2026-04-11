"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/guard";
import { logAdminAction } from "@/lib/admin/audit";

export async function approveReview(id: string) {
  const { supabase, profile } = await requireAdmin();
  const { error } = await supabase
    .from("reviews")
    .update({ published: true })
    .eq("id", id);
  if (error) return { ok: false as const, error: error.message };

  await logAdminAction(supabase, profile.id, {
    action: "review.approve",
    targetTable: "reviews",
    targetId: id,
  });
  revalidatePath("/admin/reviews");
  return { ok: true as const };
}

export async function rejectReview(id: string) {
  const { supabase, profile } = await requireAdmin();
  const { error } = await supabase.from("reviews").delete().eq("id", id);
  if (error) return { ok: false as const, error: error.message };

  await logAdminAction(supabase, profile.id, {
    action: "review.reject",
    targetTable: "reviews",
    targetId: id,
  });
  revalidatePath("/admin/reviews");
  return { ok: true as const };
}
