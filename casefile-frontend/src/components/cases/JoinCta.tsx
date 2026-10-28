import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JoinCta() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gold/20 bg-navy">
      <div className="absolute inset-0 bg-linear-to-r from-gold/10 to-transparent" />
      <div className="relative flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">
            Think you can solve the case?
          </h2>
          <p className="mt-2 text-white/60">
            Join Casefile and start your investigation today.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="shrink-0 bg-gold text-ink hover:bg-gold-dim"
        >
          <Link href="/sign-in">Let&apos;s solve!!</Link>
        </Button>
      </div>
    </section>
  );
}