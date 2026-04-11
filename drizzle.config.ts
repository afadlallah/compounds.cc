import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  // Don't throw at import time — `drizzle-kit` is a CLI and will complain
  // with a clearer message when DATABASE_URL is missing.
  console.warn("DATABASE_URL is not set — drizzle-kit commands will fail.");
}

export default {
  schema: "./lib/db/schema.ts",
  out: "./supabase/migrations/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  // Supabase puts auth tables in the `auth` schema — don't touch them.
  schemaFilter: ["public"],
  verbose: true,
  strict: true,
} satisfies Config;
