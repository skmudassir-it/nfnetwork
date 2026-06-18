import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Mail,
  Building2,
  Gift,
  ScrollText,
  HandHeart,
  ArrowRight,
  Star,
  Microscope,
  Users,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the NF Network with a tax-deductible gift. Donate online, by mail, through workplace giving, matching gifts, or planned giving — every dollar funds research, advocacy, and community programs.",
};

const onlineOptions = [
  {
    icon: <Heart className="w-6 h-6" fill="currentColor" />,
    title: "One-Time Gift",
    description:
      "Make a single tax-deductible gift today. Your donation immediately supports critical NF research, advocacy efforts, and community programs that directly improve lives.",
    href: "#",
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: "Monthly Giving",
    description:
      "Join our Sustainers Circle with a recurring monthly gift. Steady, predictable support helps us plan long-term initiatives and ensures we're always ready to respond to community needs.",
    href: "#",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Tribute & Memorial Gifts",
    description:
      "Honor a loved one or celebrate a special occasion with a meaningful gift. We'll send a personalized acknowledgment to the person or family you designate.",
    href: "#",
  },
];

const otherWays = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Contribute by Mail",
    description:
      "Prefer to mail your donation? Download our printable donation form and send your check to the NF Network. Every mailed gift is personally acknowledged.",
    href: "#",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Combined Federal Campaign",
    description:
      "Federal employees and military personnel can support the NF Network through the CFC workplace giving program. Use CFC #11696 to designate your gift.",
    href: "#",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Matching Gifts",
    description:
      "Double or even triple your impact. Many employers match charitable donations — check with your HR department and multiply your support for the NF community.",
    href: "#",
  },
  {
    icon: <ScrollText className="w-6 h-6" />,
    title: "Make a Bequest",
    description:
      "Leave a lasting legacy by including the NF Network in your estate plans. A planned gift ensures your commitment to ending NF continues for generations to come.",
    href: "#",
  },
];

const impactStats = [
  {
    value: "$12M+",
    label: "Research grants funded",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    value: "50+",
    label: "Member organizations united",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "25+",
    label: "Years of advocacy",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    value: "100K+",
    label: "Families served annually",
    icon: <HandHeart className="w-5 h-5" />,
  },
];

export default function DonatePage() {
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
            Donate
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Your generosity fuels life-changing research, advocacy, and support for
            the NF community. Every gift — no matter the size — brings us closer to
            effective treatments and a cure.
          </p>
          <div className="mt-8">
            <Link href="#">
              <Button size="lg" className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8">
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. GIVE ONLINE — three donation options
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Give Online"
            title="Ways to Donate Online"
            description="Choose the giving option that works best for you. Every donation is secure, tax-deductible, and makes an immediate impact on the NF community."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineOptions.map((option) => (
              <Card
                key={option.title}
                className="group border-border/60 hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-navy mb-5 group-hover:bg-navy group-hover:text-white transition-colors">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {option.description}
                  </p>
                  <Link href={option.href}>
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {option.title === "One-Time Gift"
                        ? "Give Now"
                        : option.title === "Monthly Giving"
                          ? "Give Monthly"
                          : "Make a Tribute"}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. OTHER WAYS TO GIVE — four cards
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="More Options"
            title="Other Ways to Give"
            description="Not ready to give online? There are many meaningful ways to support the NF Network and make a lasting difference."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherWays.map((way) => (
              <ServiceCard key={way.title} {...way} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WHY YOUR DONATION MATTERS — impact stats
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Your Impact"
            title="Why Your Donation Matters"
            description="Every dollar you give directly powers our mission to improve the lives of those affected by neurofibromatosis. Here's what your support makes possible."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="relative p-6 bg-sand/50 rounded-xl border border-border/60 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-teal-light flex items-center justify-center text-navy">
                  {stat.icon}
                </div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                  {stat.value}
                </span>
                <span className="block mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Help Us Build a Brighter Future"
        description="Your donation is more than a gift — it's a lifeline for thousands of families living with neurofibromatosis. Join us in funding the research, advocacy, and community support that will one day end NF."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Learn About NF"
        secondaryHref="/understand-nf"
      />
    </>
  );
}
