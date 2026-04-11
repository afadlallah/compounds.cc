import type { SupabaseClient } from "@supabase/supabase-js";

type AuditAction =
  | "compound.create"
  | "compound.update"
  | "compound.delete"
  | "compound.publish"
  | "compound.unpublish"
  | "protocol.create"
  | "protocol.update"
  | "protocol.delete"
  | "review.approve"
  | "review.reject"
  | "suggestion.accept"
  | "suggestion.reject"
  | "score.upsert"
  | "tag.create";

type AuditEntry = {
  action: AuditAction;
  targetTable: string;
  targetId?: string | null;
  payload?: Record<string, unknown>;
};

/**
 * Append an entry to `admin_audit_log`. Fire and forget — do not await in
 * paths where a failed audit write should NOT block the user action. Errors
 * are logged, never thrown.
 */
export async function logAdminAction(
  supabase: SupabaseClient,
  actorId: string,
  entry: AuditEntry,
): Promise<void> {
  const { error } = await supabase.from("admin_audit_log").insert({
    actor_id: actorId,
    action: entry.action,
    target_table: entry.targetTable,
    target_id: entry.targetId ?? null,
    payload: entry.payload ?? null,
  });
  if (error) {
    console.error("admin audit log failed:", error.message);
  }
}

/**
 * Snapshot a compound before edit so changes are auditable. Stored as a JSON
 * diff in `compound_revisions`.
 */
export async function recordCompoundRevision(
  supabase: SupabaseClient,
  compoundId: string,
  editorId: string,
  before: Record<string, unknown>,
  after: Record<string, unknown>,
): Promise<void> {
  const diff: Record<string, { before: unknown; after: unknown }> = {};
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  for (const key of keys) {
    if (JSON.stringify(before[key]) !== JSON.stringify(after[key])) {
      diff[key] = { before: before[key], after: after[key] };
    }
  }
  if (Object.keys(diff).length === 0) return;

  const { error } = await supabase.from("compound_revisions").insert({
    compound_id: compoundId,
    editor_id: editorId,
    diff,
  });
  if (error) {
    console.error("compound revision failed:", error.message);
  }
}
