import { createBrowserClient } from "@supabase/ssr";
import { requireEnv } from "@/lib/env";

/**
 * Browser-side Supabase client for use in Client Components.
 * Auth state is refreshed by the proxy on every request.
 */
export function createClient() {
  return createBrowserClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  );
}
