import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/cases", label: "Cases" },
  { href: "/about", label: "About" },
];

export default function Navbar({ overlay = false }: { overlay?: boolean }) {
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
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      
        <Button asChild size="lg" className="bg-gold text-ink text-md hover:bg-gold-dim">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </nav>
    </header>
  );
}