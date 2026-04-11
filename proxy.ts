import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Auth session refresh + admin route gating.
 *
 * Next.js 16 renamed the `middleware` file convention to `proxy`. Same shape,
 * new name. Runs on the Edge runtime by default; request cookies are
 * synchronous on the NextRequest object.
 */
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Don't block requests in dev if env isn't wired up yet.
    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }
        response = NextResponse.next({ request });
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Admin gating — /admin requires an authenticated user with role = 'admin'.
  if (pathname.startsWith("/admin")) {
    if (!user) {
      const redirect = request.nextUrl.clone();
      redirect.pathname = "/sign-in";
      redirect.searchParams.set("next", pathname);
      return NextResponse.redirect(redirect);
    }
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();
    if (profile?.role !== "admin") {
      const redirect = request.nextUrl.clone();
      redirect.pathname = "/";
      return NextResponse.redirect(redirect);
    }
  }

  // Auth-gated pages: /chat requires any signed-in user.
  if (pathname.startsWith("/chat") && !user) {
    const redirect = request.nextUrl.clone();
    redirect.pathname = "/sign-in";
    redirect.searchParams.set("next", pathname);
    return NextResponse.redirect(redirect);
  }

  return response;
}

export const config = {
  matcher: [
    // Run middleware on everything except static assets and images.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
