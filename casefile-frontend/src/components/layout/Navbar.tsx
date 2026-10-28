"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/cases", label: "Cases" },
  { href: "/about", label: "About" },
];

export default function Navbar({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-20"
          : "border-b border-white/10"
      }
    >
      <nav className="flex items-center justify-between px-6 py-4 lg:px-16 lg:py-10">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 text-gold">
            <Search className="size-9" />
            <span className="font-display text-4xl">Casefile</span>
          </Link>
      
          <ul className="hidden items-center gap-8 text-xl text-white/80 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "border-b pb-1 transition hover:text-gold",
                    pathname === link.href ? "border-gold text-gold" : "border-transparent"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      
        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="text-lg text-white/80 transition hover:text-gold">
            Sign in
          </Link>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold/60 bg-transparent text-gold hover:bg-gold/10 hover:text-gold text-md"
          >
            <Link href="/sign-in">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}