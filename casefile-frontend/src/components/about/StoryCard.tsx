import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StoryCard({
  number,
  label,
  title,
  text,
  image,
  icon: Icon,
  reverse = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  image: string;
  icon: LucideIcon;
  reverse?: boolean;
}) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-gold/20 bg-navy md:grid-cols-2">
      <div className={cn("flex gap-5 p-6 sm:p-8", reverse && "md:order-2")}>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="flex items-center gap-3 text-xs tracking-widest text-gold">
            <span>{number}</span>
            <span className="h-px w-8 bg-gold/40" />
            <span className="uppercase">{label}</span>
          </p>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl">{title}</h3>
          <p className="mt-3 leading-relaxed text-white/70">{text}</p>
        </div>
      </div>

      <div
        className={cn(
          "min-h-56 bg-navy-soft bg-cover bg-center",
          reverse && "md:order-1"
        )}
        style={{ backgroundImage: `url('${image}')` }}
      />
    </article>
  );
}