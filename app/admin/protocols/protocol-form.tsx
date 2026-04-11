"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import type { ActionResult } from "./actions";

type ProtocolCompoundRow = {
  slug: string;
  role: string;
  dosage_notes: string | null;
  order_index: number;
};

type Protocol = {
  id?: string;
  slug: string;
  name: string;
  description: string;
  goal: string | null;
  published: boolean;
  compounds?: ProtocolCompoundRow[];
};

type Props = {
  initial?: Protocol;
  action: (formData: FormData) => Promise<ActionResult>;
  deleteAction?: () => Promise<ActionResult>;
  submitLabel: string;
};

function compoundLinesToText(
  compounds: ProtocolCompoundRow[] | undefined,
  role: string,
): string {
  if (!compounds) return "";
  return compounds
    .filter((c) => c.role === role)
    .sort((a, b) => a.order_index - b.order_index)
    .map((c) => (c.dosage_notes ? `${c.slug} | ${c.dosage_notes}` : c.slug))
    .join("\n");
}

export function ProtocolForm({ initial, action, deleteAction, submitLabel }: Props) {
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
    if (!confirm("Delete this protocol? This action is logged and cannot be undone from the UI.")) {
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

      <Field label="Goal" name="goal" defaultValue={initial?.goal ?? ""} errors={fieldErrors.goal} />

      <TextareaField
        label="Description"
        name="description"
        defaultValue={initial?.description}
        errors={fieldErrors.description}
        rows={4}
        required
      />

      <TextareaField
        label="Core compounds (one per line: slug | dosage note)"
        name="compounds_core"
        defaultValue={compoundLinesToText(initial?.compounds, "core")}
        errors={fieldErrors.compounds_core}
        rows={4}
      />
      <TextareaField
        label="Adjunct compounds (one per line: slug | dosage note)"
        name="compounds_adjunct"
        defaultValue={compoundLinesToText(initial?.compounds, "adjunct")}
        errors={fieldErrors.compounds_adjunct}
        rows={4}
      />
      <TextareaField
        label="Optional compounds (one per line: slug | dosage note)"
        name="compounds_optional"
        defaultValue={compoundLinesToText(initial?.compounds, "optional")}
        errors={fieldErrors.compounds_optional}
        rows={4}
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="published"
          defaultChecked={initial?.published ?? false}
          className="h-4 w-4 rounded border-border"
        />
        <span className="text-sm">Publish this protocol (visible on the public site)</span>
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={pending}
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
          >
            {pending ? "Saving\u2026" : submitLabel}
          </button>
          <Link
            href="/admin/protocols"
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

function ErrorText({ errors }: { errors: string[] }) {
  return <p className="mt-1 text-xs text-destructive">{errors.join(", ")}</p>;
}
