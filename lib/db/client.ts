import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Server-only Drizzle client. Connects to the raw Postgres URL
 * (Supabase "Connection string" — NOT the pooled URL for DDL).
 *
 * Use this for typed queries and server actions. For auth + RLS,
 * use `lib/supabase/server.ts` instead, which goes through PostgREST
 * with the caller's JWT.
 */

const connectionString = process.env.DATABASE_URL;

// Lazy initialization so importing the module without DATABASE_URL doesn't
// crash the build. Attempts to use `db` without the env var will still fail.
let _client: ReturnType<typeof postgres> | null = null;
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function db() {
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Add it to .env.local to use the Drizzle client.",
    );
  }
  if (!_db) {
    _client = postgres(connectionString, { prepare: false });
    _db = drizzle(_client, { schema });
  }
  return _db;
}

export { schema };
