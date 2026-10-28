import Link from "next/link";
import { ArrowRight, Compass, Lightbulb, Scale, Users } from "lucide-react";
import StoryCard from "@/components/about/StoryCard";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const story = [
  {
    number: "01",
    label: "Our idea",
    title: "Every detail matters. Every conclusion must be earned.",
    text: "Casefile is built for curious minds: an interactive mystery experience where you step into the role of a detective, examine evidence, and solve fictional cases using logic and reasoning.",
    image: "/about/idea.jpg",
    icon: Lightbulb,
  },
  {
    number: "02",
    label: "The experience",
    title: "More than finding the culprit.",
    text: "You'll inspect exhibits, compare witness statements, connect clues, and build a case before making your final accusation. Every decision brings you closer to the truth.",
    image: "/about/experience.jpg",
    icon: Users,
  },
  {
    number: "03",
    label: "Our principle",
    title: "Evidence over assumptions.",
    text: "We believe in careful observation, critical thinking, and conclusions supported by evidence, not guesses.",
    image: "/about/principle.jpg",
    icon: Scale,
  },
  {
    number: "04",
    label: "Begin your investigation",
    title: "Think you can solve the case?",
    text: "Explore our collection of mysteries and put your detective skills to the test.",
    image: "/about/begin.jpg",
    icon: Compass,
  },
];

const steps = [
  {
    title: "Examine the Evidence",
    text: "Look closely at every detail. From fingerprints to handwritten notes, every piece matters.",
    image: "/about/step-1.jpg",
  },
  {
    title: "Connect the Clues",
    text: "Find the patterns, spot the contradictions, and piece together the bigger picture.",
    image: "/about/step-2.jpg",
  },
  {
    title: "Investigate the Suspects",
    text: "Listen to their stories, compare their accounts, and uncover what they're hiding.",
    image: "/about/step-3.jpg",
  },
  {
    title: "Present Your Theory",
    text: "Bring your findings together and make your conclusion. Will you be right?",
    image: "/about/step-4.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-edge">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-12">
          <h1 className="max-w-xl font-display text-4xl leading-tight text-gold sm:text-6xl">
            The story behind Casefile.
          </h1>
          <p className="mt-5 max-w-lg text-white/75">
            An interactive detective mystery experience where your observation,
            logic, and curiosity lead to the truth.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-12 lg:px-12">
        {/* Story */}
        <section className="space-y-6">
          {story.map((s, i) => (
            <StoryCard key={s.number} {...s} reverse={i % 2 === 1} />
          ))}
        </section>

        {/* How an investigation unfolds */}
        <section>
          <div className="flex items-center gap-6">
            <h2 className="font-display text-3xl text-gold">
              How an investigation unfolds
            </h2>
            <span className="hidden h-px flex-1 bg-gold/20 sm:block" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl border border-gold/20 bg-navy p-4"
              >
                <p className="font-display text-xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div
                  className="mt-3 h-28 rounded-lg bg-navy-soft bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
                <h3 className="mt-4 font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence over assumptions */}
        <section className="grid overflow-hidden rounded-2xl border border-gold/20 bg-navy md:grid-cols-2">
          <div
            className="min-h-56 bg-navy-soft bg-cover bg-center"
            style={{ backgroundImage: "url('/about/evidence.jpg')" }}
          />
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h2 className="font-display text-3xl text-gold sm:text-4xl">
              Evidence over assumptions.
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              We believe in reasoned conclusions, not random guesses. Every case
              is designed to challenge your observation skills, critical
              thinking, and attention to detail.
            </p>
            <span className="mt-6 h-px w-24 bg-gold/40" />
          </div>
        </section>

        {/* Final call to action */}
        <section className="relative overflow-hidden rounded-2xl border border-gold/20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about/cta.jpg')" }}
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative flex flex-col items-center px-6 py-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl">
              Your first case is waiting.
            </h2>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-gold text-ink hover:bg-gold-dim"
            >
              <Link href="/cases">
                Explore Cases <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}