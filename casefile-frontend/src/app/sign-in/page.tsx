"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignInPage() {
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
  const isSignIn = mode === "sign-in";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Backend auth comes later. For now, just log the form values.
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(mode, data);
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-panel md:grid-cols-2">
        {/* Left: brand panel */}
        <div
          className="relative hidden min-h-[480px] items-center justify-center bg-cover bg-center md:flex"
          style={{ backgroundImage: "url('/signin-bg.png')" }}
        >
          <div className="absolute inset-0 bg-ink/40" />
          <div className="relative text-center  bg-ink/30 px-5 py-5 rounded-xl">
            <Link href="/" className="flex items-center justify-center gap-2 text-gold">
              <Search className="size-7" />
              <span className="font-display text-4xl">Casefile</span>
            </Link>
            <p className="mt-3 text-lg text-white/70">Real stories. Sharp minds.</p>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-8 sm:p-10">
          <h1 className="font-display text-3xl">
            {isSignIn ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="mt-1 text-sm text-white/60">
            {isSignIn
              ? "Sign in to continue your investigation."
              : "Sign up to start your first investigation."}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Detective Name" required />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            {isSignIn && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" name="remember" defaultChecked />
                  <Label htmlFor="remember" className="font-normal">
                    Remember me
                  </Label>
                </div>
                <Link href="#" className="text-gold hover:underline">
                  Forgot password?
                </Link>
              </div>
            )}

            <Button type="submit" className="w-full bg-gold text-ink hover:bg-gold-dim">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-white/60">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(isSignIn ? "sign-up" : "sign-in")}
              className="text-gold underline-offset-4 hover:underline"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}