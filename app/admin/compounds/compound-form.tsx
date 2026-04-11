"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import type { ActionResult } from "./actions";

type Compound = {
  id?: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  quick_verdict: string | null;
  evidence_score: number;
  research_notes: string | null;
  cautions: string | null;
  caveats: string | null;
  dosage_notes: string | null;
  benefits: string[] | null;
  side_effects: string[] | null;
  published: boolean;
};

const CATEGORIES = [
  { value: "peptide", label: "Peptide" },
  { value: "supplement", label: "Supplement" },
  { value: "nootropic", label: "Nootropic" },
  { value: "sarm", label: "SARM" },
  { value: "adaptogen", label: "Adaptogen" },
  { value: "glp", label: "GLP-1" },
  { value: "racetam", label: "Racetam" },
  { value: "amino_acid", label: "Amino acid" },
  { value: "medicine", label: "Medicine" },
  { value: "herb", label: "Herb" },
  { value: "growth_hormone", label: "Growth hormone" },
] as const;

type Props = {
  initial?: Compound;
  action: (formData: FormData) => Promise<ActionResult>;
  deleteAction?: () => Promise<ActionResult>;
  submitLabel: string;
};

export function CompoundForm({ initial, action, deleteAction, submitLabel }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await action(formData);
      if (!result.ok) {
        setFieldErrors(result.fieldErrors ?? {});
        toast.error(result.error ?? "Please fix the highlighted fields");
        return;
      }
      setFieldErrors({});
      toast.success("Saved");
      router.refresh();
    });
  }

  function handleDelete() {
    if (!deleteAction) return;
    if (!confirm("Delete this compound? This action is logged and cannot be undone from the UI.")) {
      return;
    }
    startTransition(async () => {
      const result = await deleteAction();
      if (!result.ok) {
        toast.error(result.error ?? "Delete failed");
        return;
      }
      toast.success("Deleted");
    });
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" defaultValue={initial?.name} errors={fieldErrors.name} required />
        <Field label="Slug" name="slug" defaultValue={initial?.slug} errors={fieldErrors.slug} required />
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_120px]">
        <SelectField
          label="Category"
          name="category"
          defaultValue={initial?.category}
          options={CATEGORIES}
          errors={fieldErrors.category}
        />
        <Field
          label="Evidence score"
          name="evidence_score"
          type="number"
          defaultValue={initial?.evidence_score ?? 0}
          errors={fieldErrors.evidence_score}
          required
        />
      </div>

      <TextareaField
        label="Summary"
        name="summary"
        defaultValue={initial?.summary}
        errors={fieldErrors.summary}
        rows={3}
        required
      />
      <TextareaField
        label="Quick verdict"
        name="quick_verdict"
        defaultValue={initial?.quick_verdict ?? ""}
        errors={fieldErrors.quick_verdict}
        rows={3}
      />
      <TextareaField
        label="Research notes"
        name="research_notes"
        defaultValue={initial?.research_notes ?? ""}
        errors={fieldErrors.research_notes}
        rows={6}
      />
      <TextareaField
        label="Benefits (one per line)"
        name="benefits"
        defaultValue={initial?.benefits?.join("\n") ?? ""}
        errors={fieldErrors.benefits}
        rows={4}
      />
      <TextareaField
        label="Dosage notes"
        name="dosage_notes"
        defaultValue={initial?.dosage_notes ?? ""}
        errors={fieldErrors.dosage_notes}
        rows={3}
      />
      <TextareaField
        label="Side effects (one per line)"
        name="side_effects"
        defaultValue={initial?.side_effects?.join("\n") ?? ""}
        errors={fieldErrors.side_effects}
        rows={3}
      />
      <TextareaField
        label="Cautions"
        name="cautions"
        defaultValue={initial?.cautions ?? ""}
        errors={fieldErrors.cautions}
        rows={3}
      />
      <TextareaField
        label="Caveats"
        name="caveats"
        defaultValue={initial?.caveats ?? ""}
        errors={fieldErrors.caveats}
        rows={3}
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="published"
          defaultChecked={initial?.published ?? false}
          className="h-4 w-4 rounded border-border"
        />
        <span className="text-sm">Publish this compound (visible on the public site)</span>
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={pending}
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
          >
            {pending ? "Saving…" : submitLabel}
          </button>
          <Link
            href="/admin/compounds"
            className="rounded-md border border-border px-5 py-2 text-sm font-medium hover:bg-muted"
          >
            Cancel
          </Link>
        </div>
        {deleteAction && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={pending}
            className="rounded-md border border-destructive/40 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/5 disabled:opacity-50"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string | number;
  required?: boolean;
  errors?: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />
      {errors && <ErrorText errors={errors} />}
    </label>
  );
}

function TextareaField({
  label,
  name,
  defaultValue,
  rows = 3,
  required,
  errors,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
  errors?: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />
      {errors && <ErrorText errors={errors} />}
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  options,
  errors,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: readonly { value: string; label: string }[];
  errors?: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors && <ErrorText errors={errors} />}
    </label>
  );
}

function ErrorText({ errors }: { errors: string[] }) {
  return <p className="mt-1 text-xs text-destructive">{errors.join(", ")}</p>;
}
