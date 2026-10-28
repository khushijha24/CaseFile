import Navbar from "@/components/layout/Navbar";

export default function CasesHero() {
  return (
    <section className="relative overflow-hidden">
      <Navbar overlay />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/cases/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-ink to-transparent" />

      <div className="relative px-6 pt-36 pb-20 lg:pl-24 lg:pr-12">
        <h1 className="max-w-xl font-display text-4xl leading-tight text-gold sm:text-6xl">
          Every mystery leaves a trail.
        </h1>
        <p className="mt-5 max-w-md text-white/75">
          Explore the files. Examine the evidence. Find the truth.
        </p>
      </div>
    </section>
  );
}