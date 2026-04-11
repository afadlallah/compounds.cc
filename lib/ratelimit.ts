import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Shared rate-limit configuration backed by Upstash Redis.
 *
 * Falls back to an in-memory limiter if Upstash env vars are missing,
 * so dev + tests work without provisioning Redis. The in-memory limiter
 * is per-process and resets on restart — do NOT rely on it in production.
 */

type Limiter = {
  limit: (identifier: string) => Promise<{ success: boolean; reset: number; remaining: number }>;
};

function createUpstashLimiter(requests: number, window: `${number} ${"s" | "m" | "h"}`): Limiter {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return createMemoryLimiter(requests, window);

  const redis = new Redis({ url, token });
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window),
    analytics: true,
    prefix: "compounds-cc",
  });
}

function createMemoryLimiter(
  requests: number,
  window: `${number} ${"s" | "m" | "h"}`,
): Limiter {
  const windowMs = parseWindow(window);
  const buckets = new Map<string, { count: number; resetAt: number }>();

  return {
    async limit(identifier: string) {
      const now = Date.now();
      const bucket = buckets.get(identifier);
      if (!bucket || bucket.resetAt <= now) {
        const resetAt = now + windowMs;
        buckets.set(identifier, { count: 1, resetAt });
        return { success: true, reset: resetAt, remaining: requests - 1 };
      }
      if (bucket.count >= requests) {
        return { success: false, reset: bucket.resetAt, remaining: 0 };
      }
      bucket.count += 1;
      return { success: true, reset: bucket.resetAt, remaining: requests - bucket.count };
    },
  };
}

function parseWindow(window: `${number} ${"s" | "m" | "h"}`): number {
  const [value, unit] = window.split(" ");
  const n = Number.parseInt(value, 10);
  switch (unit) {
    case "s":
      return n * 1000;
    case "m":
      return n * 60 * 1000;
    case "h":
      return n * 60 * 60 * 1000;
    default:
      return n;
  }
}

export const subscribeLimiter = createUpstashLimiter(3, "1 h");
export const suggestLimiter = createUpstashLimiter(5, "1 h");
export const chatLimiter = createUpstashLimiter(20, "1 h");
export const reviewLimiter = createUpstashLimiter(5, "1 h");
