import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/auth/signin(.*)"]);


export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-pathname", pathname);

    // Allow public routes through
    if (isPublicRoute(req)) {
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            }
        });
    }

    // Check for your API token in cookies
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });
}

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};