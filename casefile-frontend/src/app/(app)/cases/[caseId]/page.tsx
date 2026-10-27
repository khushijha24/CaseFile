import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import DifficultyBadge from "@/components/cases/DifficultyBadge";
import { Button } from "@/components/ui/button";
import { cases, getCase } from "@/data/cases";
import ProfileButton from "@/components/layout/ProfileButton";

export function generateStaticParams() {
  return cases.map((c) => ({ caseId: c.id }));
}

export default async function CaseBriefingPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const item = getCase(caseId);
  if (!item) notFound();

  const details = [
    { icon: MapPin, label: "Location", value: item.location },
    { icon: Calendar, label: "Date", value: item.date },
    { icon: Clock, label: "Time", value: item.time },
  ];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between"> 
      <Link
        href="/cases"
        className="inline-flex items-center gap-1 text-sm text-white/50 transition hover:text-gold"
      >
        <ArrowLeft className="size-4" /> All cases
      </Link>
      <ProfileButton />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <h1 className="font-display text-4xl">{item.title}</h1>
        <DifficultyBadge difficulty={item.difficulty} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Left: image + briefing */}
        <div>
          <div
            className="aspect-video rounded-xl border border-navy-edge bg-navy-soft bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />

          <h2 className="mt-6 font-display text-xl">Case Briefing</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
            {item.briefing}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-ink hover:bg-gold-dim"
          >
            <Link href={`/cases/${item.id}/investigate`}>
              Start Investigation <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>

        {/* Right: details + objective */}
        <aside className="space-y-4">
          <div className="space-y-5 rounded-xl border border-navy-edge bg-navy p-5">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <Icon className="mt-0.5 size-4 text-gold" />
                <div>
                  <p className="text-xs text-white/40">{label}</p>
                  <p className="text-sm text-white/90">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-navy-edge bg-navy p-5">
            <p className="text-xs text-white/40">Your Objective</p>
            <p className="mt-2 text-sm text-white/90">{item.objective}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}