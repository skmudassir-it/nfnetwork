import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      {/* Right-side decorative circles */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -right-10 bottom-10 w-64 h-64 rounded-full bg-warm-red/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4">
            Neurofibromatosis Network
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Building Community.
            <br />
            <span className="text-teal-light">Pursuing a Cure.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-xl leading-relaxed">
            The NF Network works tirelessly to serve and build the NF community as we
            pursue treatments and a cure for neurofibromatosis.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/donate">
              <Button size="lg" className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8">
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate Now
              </Button>
            </Link>
            <Link href="/understand-nf">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8"
              >
                Learn About NF
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "2.5M+", label: "People worldwide with NF" },
              { value: "30+", label: "Years of advocacy" },
              { value: "50+", label: "Member organizations" },
              { value: "$200M+", label: "Federal research funding secured" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
