import Link from "next/link";
import { User } from "lucide-react";

export default function ProfileButton() {
  return (
    <Link
      href="/profile"
      aria-label="Open profile"
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-navy-edge bg-navy-soft text-white/70 transition hover:border-gold/50 hover:text-gold"
    >
      <User className="size-5" />
    </Link>
  );
}