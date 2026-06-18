import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Users,
  Megaphone,
  HandCoins,
  Share2,
  CalendarHeart,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Discover how you can make a difference for the NF community. Volunteer, donate, advocate, fundraise, spread awareness, or join an event — every action helps.",
};

const waysToHelp = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Donate",
    description:
      "Your financial support funds critical research, advocacy efforts, and community programs that directly improve the lives of those affected by NF.",
    href: "/donate",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Volunteer",
    description:
      "Give your time and talents. From helping at events to supporting NF families, volunteers are the backbone of everything we do.",
    href: "/get-involved",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Advocate",
    description:
      "Raise your voice for NF research funding. Contact elected officials, share your story, and join our advocacy campaigns to drive real policy change.",
    href: "/advocacy",
  },
  {
    icon: <HandCoins className="w-6 h-6" />,
    title: "Fundraise",
    description:
      "Turn your passion into action. Host a fundraiser, start a Facebook campaign, or rally your community to support the NF cause.",
    href: "/get-involved",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Spread Awareness",
    description:
      "Share NF facts and stories on social media, talk to friends and family, and help educate the world about neurofibromatosis.",
    href: "/get-involved",
  },
  {
    icon: <CalendarHeart className="w-6 h-6" />,
    title: "Join an Event",
    description:
      "Participate in NF Strong walks, Hope Concerts, and community fundraisers that bring people together while raising critical funds.",
    href: "/events",
  },
];

const awarenessWays = [
  {
    step: "01",
    title: "Wear Blue & Green",
    description:
      "Show your support by wearing the NF colors — blue and green — throughout the month of May to spark conversations about neurofibromatosis.",
  },
  {
    step: "02",
    title: "Share on Social Media",
    description:
      "Post NF facts, personal stories, and awareness graphics using #NFAwareness and #EndNF. Every share reaches someone new.",
  },
  {
    step: "03",
    title: "Host an Event",
    description:
      "Organize a local awareness event — a bake sale, 5K walk, or community gathering. We'll provide materials and support to help you succeed.",
  },
  {
    step: "04",
    title: "Shine a Light on NF",
    description:
      "Partner with us to light up local landmarks in blue and green, and encourage your city to issue an NF Awareness Month proclamation.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with Heart icon
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-warm-red mx-auto mb-6" fill="currentColor" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get Involved
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Every action — big or small — brings us closer to better treatments
            and a cure for neurofibromatosis. Find your way to make a difference.
          </p>
        </div>
      </section>

      {/* ============================================================
          2. WAYS TO HELP — six cards
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Ways to Help"
            title="How You Can Make an Impact"
            description="There are countless ways to support the NF community. Choose the path that fits your talents, time, and passion — every contribution matters."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToHelp.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. NF AWARENESS CAMPAIGN — May is NF Awareness Month
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="NF Awareness Campaign"
            title="May is NF Awareness Month"
            description="Every May, the NF community comes together to raise awareness, educate the public, and advocate for research funding. Join us in making NF visible."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awarenessWays.map((item) => (
              <div
                key={item.step}
                className="relative p-6 bg-white rounded-xl border border-border/60 shadow-card"
              >
                <span className="text-4xl font-extrabold text-teal-light select-none">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/get-involved">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-dark text-white text-base px-8"
              >
                <Megaphone className="w-5 h-5 mr-2" />
                Get NF Awareness Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. ANNUAL APPEAL — year-end giving
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-navy-gradient rounded-2xl overflow-hidden shadow-elevated">
            <div className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative">
                <Heart className="w-12 h-12 text-warm-red mx-auto mb-5" fill="currentColor" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Annual Appeal
                </h2>
                <p className="mt-4 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                  As the year comes to a close, we ask you to consider making a
                  tax-deductible gift to the NF Network. Your generosity powers
                  research advocacy, community programs, and hope for thousands
                  of families affected by neurofibromatosis. Every dollar brings
                  us closer to a cure.
                </p>
                <p className="mt-4 text-base text-blue-200/70 max-w-xl mx-auto leading-relaxed">
                  Your year-end donation is 100% tax-deductible and directly
                  supports our mission. Give by December 31 to make your impact
                  count for this tax year.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/donate">
                    <Button
                      size="lg"
                      className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8"
                    >
                      <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                      Make Your Year-End Gift
                    </Button>
                  </Link>
                  <Link href="/get-involved">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 text-base px-8"
                    >
                      Other Ways to Give
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Every Action Counts"
        description="Whether you donate, volunteer, advocate, or share your story — you are part of the movement to end NF. Join us today and help build a brighter future for everyone affected by neurofibromatosis."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Learn More About NF"
        secondaryHref="/understand-nf"
      />
    </>
  );
}
