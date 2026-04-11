import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { requireEnv } from "@/lib/env";

/**
 * Server-side Supabase client for use in React Server Components,
 * Server Actions, and Route Handlers.
 *
 * Next.js 16: `cookies()` is async — the factory is async as a result.
 */
export async function createClient() {
  const cookieStore = await cookies();
  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options as CookieOptions);
          }
        } catch {
          // `setAll` was called from a Server Component; ignore — the session
          // refresh will happen in `middleware.ts` via the response cookies.
        }
      },
    },
  });
}
