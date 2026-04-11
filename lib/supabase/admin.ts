import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "@/lib/env";

/**
 * Service-role Supabase client. Bypasses RLS.
 *
 * USE WITH CAUTION — only from server code (route handlers, server actions,
 * cron jobs, seed scripts). Never import this into a Client Component.
 */
export function createAdminClient() {
  return createClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}
