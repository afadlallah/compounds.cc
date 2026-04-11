"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin/guard";
import { logAdminAction, recordCompoundRevision } from "@/lib/admin/audit";

const compoundCategory = z.enum([
  "peptide",
  "supplement",
  "nootropic",
  "sarm",
  "adaptogen",
  "glp",
  "racetam",
  "amino_acid",
  "medicine",
  "herb",
  "growth_hormone",
]);

const compoundInputSchema = z.object({
  slug: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  name: z.string().min(2).max(160),
  category: compoundCategory,
  summary: z.string().min(10).max(2000),
  quick_verdict: z.string().max(2000).nullable(),
  evidence_score: z.coerce.number().int().min(0).max(100),
  research_notes: z.string().max(10000).nullable(),
  cautions: z.string().max(5000).nullable(),
  caveats: z.string().max(5000).nullable(),
  dosage_notes: z.string().max(2000).nullable(),
  benefits: z.array(z.string()).nullable(),
  side_effects: z.array(z.string()).nullable(),
  published: z.boolean(),
});

function parseFormData(formData: FormData) {
  const raw = {
    slug: String(formData.get("slug") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    category: String(formData.get("category") ?? ""),
    summary: String(formData.get("summary") ?? "").trim(),
    quick_verdict: stringOrNull(formData.get("quick_verdict")),
    evidence_score: formData.get("evidence_score"),
    research_notes: stringOrNull(formData.get("research_notes")),
    cautions: stringOrNull(formData.get("cautions")),
    caveats: stringOrNull(formData.get("caveats")),
    dosage_notes: stringOrNull(formData.get("dosage_notes")),
    benefits: splitLines(formData.get("benefits")),
    side_effects: splitLines(formData.get("side_effects")),
    published: formData.get("published") === "on",
  };
  return compoundInputSchema.safeParse(raw);
}

function stringOrNull(value: FormDataEntryValue | null): string | null {
  if (value === null) return null;
  const str = String(value).trim();
  return str.length === 0 ? null : str;
}

function splitLines(value: FormDataEntryValue | null): string[] | null {
  if (value === null) return null;
  const lines = String(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.length === 0 ? null : lines;
}

export type ActionResult = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function createCompound(formData: FormData): Promise<ActionResult> {
  const { supabase, profile } = await requireAdmin();
  const parsed = parseFormData(formData);
  if (!parsed.success) {
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { data, error } = await supabase
    .from("compounds")
    .insert(parsed.data)
    .select("id, slug")
    .single();

  if (error || !data) {
    return { ok: false, error: error?.message ?? "Insert failed" };
  }

  await logAdminAction(supabase, profile.id, {
    action: "compound.create",
    targetTable: "compounds",
    targetId: data.id,
    payload: { slug: data.slug },
  });

  revalidatePath("/admin/compounds");
  revalidatePath("/database");
  revalidatePath(`/substances/${data.slug}`);
  redirect(`/admin/compounds/${data.id}`);
}

export async function updateCompound(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const { supabase, profile } = await requireAdmin();
  const parsed = parseFormData(formData);
  if (!parsed.success) {
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { data: before } = await supabase
    .from("compounds")
    .select("*")
    .eq("id", id)
    .single();

  const { data: after, error } = await supabase
    .from("compounds")
    .update(parsed.data)
    .eq("id", id)
    .select("*")
    .single();

  if (error || !after) {
    return { ok: false, error: error?.message ?? "Update failed" };
  }

  if (before) {
    await recordCompoundRevision(supabase, id, profile.id, before, after);
  }
  await logAdminAction(supabase, profile.id, {
    action: "compound.update",
    targetTable: "compounds",
    targetId: id,
    payload: { slug: after.slug },
  });

  revalidatePath("/admin/compounds");
  revalidatePath("/database");
  revalidatePath(`/substances/${after.slug}`);
  return { ok: true };
}

export async function deleteCompound(id: string): Promise<ActionResult> {
  const { supabase, profile } = await requireAdmin();

  const { data: before } = await supabase
    .from("compounds")
    .select("slug")
    .eq("id", id)
    .single();

  const { error } = await supabase.from("compounds").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };

  await logAdminAction(supabase, profile.id, {
    action: "compound.delete",
    targetTable: "compounds",
    targetId: id,
    payload: { slug: before?.slug },
  });

  revalidatePath("/admin/compounds");
  revalidatePath("/database");
  redirect("/admin/compounds");
}
