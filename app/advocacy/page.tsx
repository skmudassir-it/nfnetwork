import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Megaphone,
  Landmark,
  Users,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advocacy",
  description:
    "The NF Network advocates for federal research funding, better clinical care, and policies that support the neurofibromatosis community. Learn how to get involved.",
};

const faqs = [
  {
    question: "What is NF advocacy?",
    answer:
      "NF advocacy is the organized effort to influence public policy and funding decisions that affect the neurofibromatosis community. This includes lobbying Congress for increased NIH and CDMRP research funding, working with regulatory agencies to accelerate drug approvals, and raising awareness among elected officials about the needs of NF patients and families.",
  },
  {
    question: "How can I advocate for NF research?",
    answer:
      "There are many ways to get involved. You can write or call your congressional representatives to share your NF story, participate in our annual NF Advocacy Day on Capitol Hill, join letter-writing campaigns, or simply share educational materials with your network. Every voice matters — and personal stories are the most powerful tool we have.",
  },
  {
    question: "What is the Sam Leary Advocacy Scholarship?",
    answer:
      "The Sam Leary Advocacy Scholarship Fund honors Samuel D. Leary, a tireless NF advocate who dedicated his life to fighting for the NF community. The scholarship provides financial support to individuals and families who want to attend advocacy events and training, ensuring that cost is never a barrier to making your voice heard.",
  },
  {
    question: "Where does NF research funding come from?",
    answer:
      "Federal funding for NF research primarily comes from two programs: the National Institutes of Health (NIH) and the Congressionally Directed Medical Research Program (CDMRP). The NF Network works year-round to protect and grow this funding by educating lawmakers about the importance of NF research and the real impact it has on patient lives.",
  },
  {
    question: "How do I contact my elected officials?",
    answer:
      "It's easier than you think. You can find your representatives' contact information at house.gov and senate.gov. A simple phone call, email, or letter sharing how NF has affected your life can make a meaningful difference. The NF Network provides templates, talking points, and guidance to help you every step of the way.",
  },
];

export default function AdvocacyPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Megaphone className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advocacy
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Fighting for federal funding, better policies, and a stronger voice
            for everyone affected by neurofibromatosis.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="The NF Network Advocacy Program"
            description="Our advocacy program fights to protect and grow federal research funding, improve clinical care, and ensure the NF community has a seat at the table when decisions are made."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Landmark className="w-6 h-6" />}
              title="Federal Funding"
              description="We work with Congress to secure and increase funding through the NIH and the CDMRP neurofibromatosis research program — the two largest sources of NF research dollars."
              href="/advocacy"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Capitol Hill Days"
              description="Our annual advocacy event brings NF families, researchers, and supporters to Washington, D.C. to meet directly with lawmakers and their staff."
              href="/advocacy"
            />
            <ServiceCard
              icon={<Megaphone className="w-6 h-6" />}
              title="Community Voices"
              description="We amplify the stories of NF patients and families, turning personal experiences into powerful advocacy that drives real policy change."
              href="/advocacy"
            />
          </div>
        </div>
      </section>

      {/* Take Action */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Take Action"
            title="How You Can Advocate"
            description="You don't have to be in Washington to make a difference. Here's how you can raise your voice for the NF community."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Share Your Story",
                description:
                  "Your personal experience with NF is the most powerful advocacy tool. Share it with elected officials to put a human face on the need for research funding.",
              },
              {
                step: "02",
                title: "Contact Congress",
                description:
                  "Call, email, or write your senators and representative. A few minutes of your time can influence millions in research dollars.",
              },
              {
                step: "03",
                title: "Join Advocacy Day",
                description:
                  "Meet with lawmakers in person during our annual NF Advocacy Day on Capitol Hill. Training and materials are provided — no experience needed.",
              },
              {
                step: "04",
                title: "Spread the Word",
                description:
                  "Follow us on social media, share advocacy alerts with friends and family, and help grow our movement for NF research and care.",
              },
            ].map((item) => (
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
              <Button size="lg" className="bg-navy hover:bg-navy-dark text-white text-base px-8">
                <Megaphone className="w-5 h-5 mr-2" />
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sam Leary Scholarship */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-navy-gradient rounded-2xl overflow-hidden shadow-elevated">
            <div className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative">
                <GraduationCap className="w-12 h-12 text-blue-200 mx-auto mb-5" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Sam Leary Advocacy Scholarship Fund
                </h2>
                <p className="mt-4 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                  Named in honor of Samuel D. Leary — a passionate NF advocate who
                  dedicated his life to fighting for the NF community — this
                  scholarship ensures that financial barriers never prevent anyone
                  from raising their voice. Recipients receive support to attend
                  advocacy events, training programs, and Capitol Hill visits.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/donate">
                    <Button
                      size="lg"
                      className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8"
                    >
                      <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                      Support the Scholarship
                    </Button>
                  </Link>
                  <Link href="/advocacy">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 text-base px-8"
                    >
                      Apply
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Advocacy FAQ"
            description="Answers to common questions about NF advocacy and how you can get involved."
          />
          <div className="mt-12 max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="group border border-border rounded-xl overflow-hidden bg-white"
              >
                <input
                  type="checkbox"
                  id={`faq-${i}`}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`faq-${i}`}
                  className="flex items-center justify-between p-5 cursor-pointer select-none"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 group-has-[:checked]:rotate-180" />
                </label>
                <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
