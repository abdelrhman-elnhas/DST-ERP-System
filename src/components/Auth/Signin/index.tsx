import Link from "next/link";
import GoogleSigninButton from "../GoogleSigninButton";
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <>
      {/* <GoogleSigninButton text="Sign in with Google" />

      <div className="my-7 flex items-center gap-3">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3" />
        <span className="whitespace-nowrap text-body-sm font-medium text-dark-5 dark:text-dark-6">
          or continue with email
        </span>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3" />
      </div> */}

      <SigninWithPassword />

      {/* <p className="mt-6 text-center text-body-sm text-dark-5 dark:text-dark-6">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/sign-up"
          className="font-medium text-primary hover:underline"
        >
          Sign Up
        </Link>
      </p> */}
    </>
  );
}