"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { reviewSchema } from "@/lib/validation/schemas";
import { reviewLimiter } from "@/lib/ratelimit";

export type ActionResult = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function createReview(
  compoundId: string,
  slug: string,
  formData: FormData,
): Promise<ActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Please sign in to write a review" };

  const { success } = await reviewLimiter.limit(`review:${user.id}`);
  if (!success)
    return { ok: false, error: "Too many reviews — try again later" };

  const parsed = reviewSchema.safeParse({
    compoundId,
    title: formData.get("title"),
    body: formData.get("body"),
    rating: Number(formData.get("rating")),
  });
  if (!parsed.success)
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors };

  const { error } = await supabase.from("reviews").insert({
    user_id: user.id,
    compound_id: parsed.data.compoundId,
    title: parsed.data.title,
    body: parsed.data.body,
    rating: parsed.data.rating,
    published: false,
  });
  if (error) return { ok: false, error: error.message };

  revalidatePath(`/substances/${slug}`);
  return { ok: true };
}
