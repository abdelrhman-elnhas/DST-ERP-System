import Signin from "@/components/Auth/Signin";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logos/dstIcon.png";

export const metadata: Metadata = {
  title: "Sign In | DST - Digital Smart Tree",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-2 dark:bg-[#020d1a] p-4">
      <div className="w-full max-w-[1100px] max-h-[90vh] rounded-2xl bg-white shadow-3 dark:bg-dark-2 overflow-hidden">
        <div className="flex flex-wrap">

          {/* ── Left panel ── */}
          <div className="w-full xl:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-16">
            <div className="w-full max-w-[420px]">
              {/* Mobile logo */}
              <Link href="/" className="mb-8 inline-block xl:hidden">
                <Image
                  className="hidden dark:block"
                  src={logo}
                  alt="DST Logo"
                  width={150}
                  height={28}
                />
                <Image
                  className="dark:hidden"
                  src={logo}
                  alt="DST Logo"
                  width={150}
                  height={28}
                />
              </Link>

              <h2 className="mb-2 text-2xl font-bold text-dark dark:text-white">
                Sign in to your account
              </h2>
              <p className="mb-8 text-body-sm text-dark-5 dark:text-dark-6">
                Enter your credentials to access your dashboard
              </p>

              <Signin />
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="hidden xl:flex xl:w-1/2 flex-col justify-between bg-gradient-to-br from-[#eaf4f8] to-[#d0edf5] dark:bg-none dark:bg-dark-3 rounded-r-2xl p-12 overflow-hidden relative">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary/10 dark:bg-secondary/5" />

            <Link href="/" className="relative z-10 inline-block">
              <Image
                className="hidden dark:block"
                src={logo}
                alt="DST Logo"
                width={160}
                height={30}
              />
              <Image
                className="dark:hidden"
                src={logo}
                alt="DST Logo"
                width={160}
                height={30}
              />
            </Link>

            <div className="relative z-10 my-10">
              <p className="mb-2 text-lg font-medium text-primary dark:text-secondary">
                Welcome Back!
              </p>
              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white leading-snug">
                Manage your business<br />smarter with TST
              </h1>
              <p className="max-w-[340px] text-body-sm text-dark-4 dark:text-dark-6 leading-relaxed">
                Tech Smart Tree ERP gives you full visibility and control
                over your operations — all in one place.
              </p>
            </div>

            <div className="relative z-10">
              <Image
                src="/images/grids/grid-02.svg"
                alt="Dashboard illustration"
                width={400}
                height={320}
                className="mx-auto dark:opacity-20 drop-shadow-card"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}