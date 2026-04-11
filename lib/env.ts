import { z } from "zod";

/**
 * Typed environment variables.
 *
 * Every variable is optional in the schema so the app can be built and
 * statically analyzed in CI without real credentials. Modules that *require*
 * a specific variable should call `requireEnv("VAR_NAME")` at runtime, which
 * throws a clear error when the value is missing.
 */

const schema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  DATABASE_URL: z.url().optional(),
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM_EMAIL: z.email().optional(),
  UPSTASH_REDIS_REST_URL: z.url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:", z.treeifyError(parsed.error));
  throw new Error("Invalid environment variables. See console for details.");
}

export const env = parsed.data;

/**
 * Assert a required env var at call time. Use this in factories and route
 * handlers that cannot function without the variable, so the failure points
 * at a single useful error instead of a pile of downstream crashes.
 */
export function requireEnv<K extends keyof typeof env>(key: K): NonNullable<(typeof env)[K]> {
  const value = env[key];
  if (value === undefined || value === null || value === "") {
    throw new Error(
      `Environment variable ${String(key)} is required but not set. Add it to .env.local.`,
    );
  }
  return value as NonNullable<(typeof env)[K]>;
}
