import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Case } from "@/types/case";

export default function ActiveCaseCard({ item }: { item: Case }) {
  return (
    <section className="relative overflow-hidden rounded-xl border border-navy-edge bg-navy-soft">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${item.image}')` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20" />

      <div className="relative flex min-h-72 flex-col justify-end p-6 sm:p-8">
        <span className="absolute top-5 right-5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
          In Progress
        </span>

        <p className="text-xs tracking-widest text-gold">YOUR ACTIVE CASE</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">{item.title}</h2>
        <p className="mt-2 max-w-xl text-sm text-white/70">{item.summary}</p>

        <Button asChild className="mt-5 self-start bg-gold text-ink hover:bg-gold-dim">
          <Link href={`/cases/${item.id}/investigate`}>
            Resume Investigation <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}