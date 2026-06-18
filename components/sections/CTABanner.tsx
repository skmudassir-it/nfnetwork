import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Join the Fight Against NF",
  description = "Your support helps fund critical research, build community programs, and advocate for better treatments. Every contribution makes a difference.",
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Get Involved",
  secondaryHref = "/get-involved",
}: CTABannerProps) {
  return (
    <section className="bg-[#0d3b52] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <Heart className="w-10 h-10 text-warm-red mx-auto mb-4" fill="currentColor" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={primaryHref}>
            <Button size="lg" className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8">
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              {primaryLabel}
            </Button>
          </Link>
          <Link href={secondaryHref}>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8"
            >
              {secondaryLabel}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
