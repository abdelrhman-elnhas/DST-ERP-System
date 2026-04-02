import "@/css/satoshi.css";
import "@/css/style.css";

import { Sidebar } from "@/components/Layouts/sidebar";

import { ClerkProvider } from '@clerk/nextjs'



import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { cookies, headers } from "next/headers";
import QueryProvider from "./providers/query-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui-elements/Modal";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    template: "%s | DST - Digital Smart Tree",
    default: "DST - Digital Smart Tree",
  },
  description:
    "Digital Smart Tree ERP System",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const cookieStore = await cookies();
  const headerList = await headers();
  const token = cookieStore.get("token")?.value;
  const pathname = headerList.get("x-pathname");
  const isLoggedIn = !!token;

  // Routes that should NOT have the ERP sidebar/header
  const isPublicView = pathname === "/" || pathname?.startsWith("/auth");

  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>

        <Providers>
          <ClerkProvider
            signInUrl="auth/signin">
            <QueryProvider>

              <NextTopLoader color="#2a809c" showSpinner={false} />
              {/* Global Modal — sits outside everything */}
              <Modal />

              {isLoggedIn && !isPublicView ? (
                <div className="flex min-h-screen">
                  <Sidebar />
                  <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
                    <Header />
                    <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
                      {children}
                    </main>
                  </div>
                </div>
              ) : (
                <>{children}</>
              )}

            </QueryProvider>
          </ClerkProvider>
        </Providers>
      </body >
    </html >
  );
}
