import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Server-side admin guard. Use at the top of every `app/admin/*` page.tsx
 * and every admin server action. Returns `{ user, profile, supabase }` on
 * success, redirects otherwise.
 *
 * The `proxy.ts` middleware already blocks unauthenticated and non-admin
 * users, but this is a defense-in-depth check so a bypassed proxy doesn't
 * expose the admin surface.
 */
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in?next=/admin");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id, handle, display_name, role")
    .eq("id", user.id)
    .single();

  if (error || !profile || profile.role !== "admin") {
    redirect("/");
  }

  return { user, profile, supabase };
}

/**
 * Try to run an admin database query and return a tagged result. Lets admin
 * pages render a "database not connected" state gracefully when credentials
 * are missing, instead of crashing.
 */
export async function tryDb<T>(
  fn: () => Promise<T>,
): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  try {
    const data = await fn();
    return { ok: true, data };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown database error";
    return { ok: false, error: message };
  }
}
