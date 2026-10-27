import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink">
      <Navbar overlay />

      {/* Artwork: right side only */}
      <div
        className="absolute inset-y-0 right-0 w-full bg-cover bg-center md:w-[70%]"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* Fades so the image melts into the background */}
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-20 pb-16 lg:pl-30 lg:pr-12">
        <h1 className="font-display text-5xl leading-[1.1] text-gold sm:text-7xl">
          Think
          <br />
          Investigate
          <br />
          Solve
        </h1>

        <p className="mt-6 max-w-md text-lg text-white/80">
          Step into the shoes of a detective. Explore clues, connect the dots,
          and uncover the truth.
        </p>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gold px-6 text-ink text-lg hover:bg-gold-dim"
          >
            <Link href="/cases">
              Explore Cases <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}