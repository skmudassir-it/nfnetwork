import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  MessageCircle,
  Tent,
  HeartHandshake,
  MapPin,
  Globe,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Connect with the NF community through local member organizations, online support groups, and NF summer camps. You are not alone in this journey.",
};

const memberOrgTypes = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local Chapters & Affiliates",
    description:
      "Grassroots organizations in communities across the United States offering in-person support groups, educational events, awareness walks, and local advocacy efforts.",
    href: "/community",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Regional NF Networks",
    description:
      "Multi-state coalitions that coordinate regional conferences, connect families across broader areas, and amplify local voices in state-level advocacy.",
    href: "/community",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Clinic-Based Support Groups",
    description:
      "NF specialty clinics across the country host regular support group meetings, bringing together patients, caregivers, and medical teams in a supportive environment.",
    href: "/community",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Virtual Communities",
    description:
      "Online groups and forums that connect NF families regardless of geography — ensuring that even those in rural areas or far from a major clinic can find support.",
    href: "/community",
  },
];

const campPrograms = [
  {
    icon: <Tent className="w-6 h-6" />,
    title: "NF Summer Camp",
    description:
      "A week-long residential summer camp for children and teens with NF, offering traditional camp activities in a safe, medically supported environment where campers build confidence, independence, and lifelong friendships.",
    href: "/community",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Family Camp Weekends",
    description:
      "Weekend retreats designed for the whole family. Parents connect with other NF families, siblings find understanding peers, and everyone enjoys outdoor activities tailored to all abilities.",
    href: "/community",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Teen & Young Adult Retreats",
    description:
      "Leadership and social programs for teens and young adults living with NF, focusing on self-advocacy, career readiness, and building a peer network for the transition into adulthood.",
    href: "/community",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with Users icon
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Community
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            You are not alone. Connect with local NF groups, find support in our
            online community, and discover life-changing NF camp experiences for
            the whole family.
          </p>
        </div>
      </section>

      {/* ============================================================
          2. MEMBER ORGANIZATIONS — 50+ local groups
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Member Organizations"
            title="50+ Local NF Groups Nationwide"
            description="The NF Network unites over 50 member organizations across the country, each serving their local community with support groups, educational events, and advocacy. Find a group near you and connect with people who truly understand."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberOrgTypes.map((org) => (
              <ServiceCard key={org.title} {...org} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/community">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-dark text-white text-base px-8"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find a Group Near You
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. ONLINE SUPPORT COMMUNITY — NF Network Inspire
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Online Support"
                title="NF Network Inspire Community"
                description="Connect with thousands of NF patients, families, and caregivers from anywhere in the world through our online support community, powered by Inspire."
                align="left"
              />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The NF Network Inspire Community is a free, moderated online
                space where you can ask questions, share experiences, and find
                emotional support — all from the comfort of your home. Whether
                you're newly diagnosed, navigating treatment decisions, or caring
                for a loved one, you'll find a welcoming community ready to help.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/community">
                  <Button
                    size="lg"
                    className="bg-navy hover:bg-navy-dark text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join the Conversation
                  </Button>
                </Link>
                <Link href="/community">
                  <Button variant="outline" size="lg">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Globe className="w-5 h-5" />,
                  label: "Always Available",
                  desc: "Access the community 24/7 from any device — support is there whenever you need it.",
                },
                {
                  icon: <MessageCircle className="w-5 h-5" />,
                  label: "Topic-Based Discussions",
                  desc: "Find conversations organized by topic, from NF1 and NF2 to parenting, school, and treatment.",
                },
                {
                  icon: <HeartHandshake className="w-5 h-5" />,
                  label: "Moderated & Safe",
                  desc: "A respectful, supportive space moderated to ensure a positive experience for all members.",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  label: "Thousands of Members",
                  desc: "Join a vibrant community of NF patients, parents, spouses, and advocates sharing their journeys.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white border border-border/60 shadow-card"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-light flex items-center justify-center text-navy mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. NF CAMPS — summer camps for kids & families
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="NF Camps"
            title="Life-Changing Camp Experiences"
            description="Our NF camp programs give children, teens, and families the chance to unplug, connect with nature, and build relationships with others who share the NF journey — all in a safe, medically supported environment."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campPrograms.map((camp) => (
              <ServiceCard key={camp.title} {...camp} />
            ))}
          </div>

          {/* Camp highlights */}
          <div className="mt-12 bg-teal-light rounded-2xl p-8 sm:p-10 border border-navy/10">
            <div className="flex items-center gap-3 mb-6">
              <Tent className="w-7 h-7 text-navy" />
              <h3 className="text-2xl font-bold text-navy-dark">
                Why NF Camps Matter
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "100%",
                  label: "Medical Support",
                  desc: "Every camp session is staffed by medical professionals who understand NF, so parents can feel confident their child is in safe hands.",
                },
                {
                  value: "No Cost",
                  label: "To Families",
                  desc: "Thanks to generous donors, NF camps are provided at no charge to families — removing financial barriers to participation.",
                },
                {
                  value: "Lifetime",
                  label: "Friendships",
                  desc: "Campers meet others who truly get what they're going through, forming bonds that last well beyond the summer.",
                },
                {
                  value: "All Ages",
                  label: "& Abilities",
                  desc: "Programs are designed to be inclusive and accessible, with activities adapted so every camper can participate fully.",
                },
              ].map((highlight) => (
                <div key={highlight.label} className="text-center">
                  <div className="text-2xl font-extrabold text-navy mb-1">
                    {highlight.value}
                  </div>
                  <div className="text-sm font-semibold text-navy-dark mb-2">
                    {highlight.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/community">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-dark text-white text-base px-8"
              >
                <Tent className="w-5 h-5 mr-2" />
                Learn About NF Camps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Strengthen the NF Community"
        description="Your support helps fund local groups, online communities, and NF camp programs that connect families and change lives. Together, we ensure no one faces NF alone."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
