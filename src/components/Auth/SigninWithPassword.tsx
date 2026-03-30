"use client";
import { EmailIcon, PasswordIcon } from "@/assets/icons";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";


export default function SigninWithPassword() {

  const [data, setData] = useState({
    email: process.env.NEXT_PUBLIC_DEMO_USER_MAIL || "",
    password: process.env.NEXT_PUBLIC_DEMO_USER_PASS || "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://lightcoral-kingfisher-539840.hostingersite.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            device_name: "Desktop",
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "Login failed");
      }

      const userData = await res.json();

      localStorage.setItem("token", userData.data.token);
      localStorage.setItem("user", JSON.stringify(userData.data));
      document.cookie = `token=${userData.data.token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days


      window.location.href = "/";
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputGroup
        type="email"
        label="Email address"
        className="[&_input]:py-3.5"
        placeholder="you@example.com"
        name="email"
        handleChange={handleChange}
        value={data.email}
        icon={<EmailIcon />}
      />

      <InputGroup
        type="password"
        label="Password"
        className="[&_input]:py-3.5"
        placeholder="••••••••"
        name="password"
        handleChange={handleChange}
        value={data.password}
        icon={<PasswordIcon />}
      />

      {/* <div className="flex items-center justify-between gap-2 py-1">
        <Checkbox
          label="Remember me"
          name="remember"
          withIcon="check"
          minimal
          radius="md"
          onChange={(e) => setData({ ...data, remember: e.target.checked })}
        />
        <Link
          href="/auth/forgot-password"
          className="text-body-sm font-medium text-dark-5 hover:text-primary dark:text-dark-6 dark:hover:text-primary transition-colors"
        >
          Forgot password?
        </Link>
      </div> */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-5 py-3.5 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-65 mt-2"
      >
        {loading ? (
          <>
            Signing in...
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}