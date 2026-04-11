"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin/guard";
import { logAdminAction } from "@/lib/admin/audit";

const protocolInputSchema = z.object({
  slug: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  name: z.string().min(2).max(200),
  description: z.string().min(10).max(5000),
  goal: z.string().max(500).nullable(),
  published: z.boolean(),
  compounds_core: z.string().max(10000).nullable(),
  compounds_adjunct: z.string().max(10000).nullable(),
  compounds_optional: z.string().max(10000).nullable(),
});

export type ActionResult = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

function parseFormData(formData: FormData) {
  const raw = {
    slug: String(formData.get("slug") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    goal: stringOrNull(formData.get("goal")),
    published: formData.get("published") === "on",
    compounds_core: stringOrNull(formData.get("compounds_core")),
    compounds_adjunct: stringOrNull(formData.get("compounds_adjunct")),
    compounds_optional: stringOrNull(formData.get("compounds_optional")),
  };
  return protocolInputSchema.safeParse(raw);
}

function stringOrNull(value: FormDataEntryValue | null): string | null {
  if (value === null) return null;
  const str = String(value).trim();
  return str.length === 0 ? null : str;
}

type CompoundLine = { slug: string; dosageNotes: string; orderIndex: number };

function parseCompoundLines(text: string | null): CompoundLine[] {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, idx) => {
      const [slug, ...rest] = line.split("|").map((s) => s.trim());
      return { slug, dosageNotes: rest.join("|").trim(), orderIndex: idx };
    })
    .filter((c) => c.slug.length > 0);
}

async function syncProtocolCompounds(
  supabase: ReturnType<Awaited<ReturnType<typeof requireAdmin>>["supabase"]["from"]> extends never
    ? never
    : Awaited<ReturnType<typeof requireAdmin>>["supabase"],
  protocolId: string,
  parsed: z.infer<typeof protocolInputSchema>,
) {
  const allLines = [
    ...parseCompoundLines(parsed.compounds_core).map((c) => ({ ...c, role: "core" as const })),
    ...parseCompoundLines(parsed.compounds_adjunct).map((c) => ({ ...c, role: "adjunct" as const })),
    ...parseCompoundLines(parsed.compounds_optional).map((c) => ({ ...c, role: "optional" as const })),
  ];

  await supabase.from("protocol_compounds").delete().eq("protocol_id", protocolId);

  if (allLines.length === 0) return;

  const { data: compoundRows } = await supabase
    .from("compounds")
    .select("id, slug")
    .in("slug", allLines.map((c) => c.slug));

  if (!compoundRows) return;
  const idBySlug = new Map(compoundRows.map((r) => [r.slug, r.id]));

  const joinRows = allLines
    .map((line) => {
      const compoundId = idBySlug.get(line.slug);
      if (!compoundId) return null;
      return {
        protocol_id: protocolId,
        compound_id: compoundId,
        role: line.role,
        dosage_notes: line.dosageNotes || null,
        order_index: line.orderIndex,
      };
    })
    .filter(Boolean);

  if (joinRows.length > 0) {
    await supabase.from("protocol_compounds").insert(joinRows);
  }
}

export async function createProtocol(formData: FormData): Promise<ActionResult> {
  const { supabase, profile } = await requireAdmin();
  const parsed = parseFormData(formData);
  if (!parsed.success) {
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { data, error } = await supabase
    .from("protocols")
    .insert({
      slug: parsed.data.slug,
      name: parsed.data.name,
      description: parsed.data.description,
      goal: parsed.data.goal,
      published: parsed.data.published,
    })
    .select("id, slug")
    .single();

  if (error || !data) {
    return { ok: false, error: error?.message ?? "Insert failed" };
  }

  await syncProtocolCompounds(supabase, data.id, parsed.data);

  await logAdminAction(supabase, profile.id, {
    action: "protocol.create",
    targetTable: "protocols",
    targetId: data.id,
    payload: { slug: data.slug },
  });

  revalidatePath("/admin/protocols");
  revalidatePath("/protocols");
  redirect(`/admin/protocols/${data.id}`);
}

export async function updateProtocol(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const { supabase, profile } = await requireAdmin();
  const parsed = parseFormData(formData);
  if (!parsed.success) {
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { data: after, error } = await supabase
    .from("protocols")
    .update({
      slug: parsed.data.slug,
      name: parsed.data.name,
      description: parsed.data.description,
      goal: parsed.data.goal,
      published: parsed.data.published,
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error || !after) {
    return { ok: false, error: error?.message ?? "Update failed" };
  }

  await syncProtocolCompounds(supabase, id, parsed.data);

  await logAdminAction(supabase, profile.id, {
    action: "protocol.update",
    targetTable: "protocols",
    targetId: id,
    payload: { slug: after.slug },
  });

  revalidatePath("/admin/protocols");
  revalidatePath("/protocols");
  revalidatePath(`/protocols/${after.slug}`);
  return { ok: true };
}

export async function deleteProtocol(id: string): Promise<ActionResult> {
  const { supabase, profile } = await requireAdmin();

  const { data: before } = await supabase
    .from("protocols")
    .select("slug")
    .eq("id", id)
    .single();

  const { error } = await supabase.from("protocols").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };

  await logAdminAction(supabase, profile.id, {
    action: "protocol.delete",
    targetTable: "protocols",
    targetId: id,
    payload: { slug: before?.slug },
  });

  revalidatePath("/admin/protocols");
  revalidatePath("/protocols");
  redirect("/admin/protocols");
}
