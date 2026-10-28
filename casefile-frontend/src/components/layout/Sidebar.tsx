"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";import { FolderOpen, LayoutDashboard, Search, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/cases", label: "Cases", icon: FolderOpen },
  { href: "/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-navy-edge bg-ink md:flex">
      <Link
        href="/"
        className="flex h-20 items-center gap-2 border-b border-navy-edge px-5 text-gold"
      >
        <Search className="size-6" />
        <span className="font-display text-2xl">Casefile</span>
      </Link>

      <nav className="flex flex-col gap-1 p-3">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-base transition",
                active
                  ? "bg-gold/15 text-gold"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className="size-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}