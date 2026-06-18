import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Microscope,
  FlaskConical,
  Users,
  ClipboardCheck,
  Beaker,
  Search,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore the latest neurofibromatosis research, clinical trials, funding opportunities, and breakthroughs. Learn how researchers, patients, and families can participate in advancing NF science.",
};

const breakthroughs = [
  {
    year: "2020",
    title: "FDA Approves Selumetinib (Koselugo)",
    description:
      "The first-ever FDA-approved drug for NF1, selumetinib (a MEK inhibitor) was shown to shrink plexiform neurofibromas in children, marking a historic milestone for the NF community.",
  },
  {
    year: "2023",
    title: "NF2 Gene Therapy Advances",
    description:
      "Early-stage clinical trials for gene therapy targeting NF2-related vestibular schwannomas have shown promise, offering new hope for preserving hearing in NF2 patients.",
  },
  {
    year: "2022",
    title: "Biomarker Discovery for Schwannomatosis",
    description:
      "Researchers identified novel biomarkers that may help diagnose schwannomatosis earlier and track disease progression, paving the way for more targeted clinical trials.",
  },
  {
    year: "2021",
    title: "AI-Powered Imaging for NF Tumors",
    description:
      "Machine learning tools were developed to automatically segment and measure NF-related tumors on MRI scans, improving the accuracy and speed of clinical trial assessments.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with Microscope icon
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Microscope className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Advancing science to find effective treatments and a cure for all
            forms of neurofibromatosis.
          </p>
        </div>
      </section>

      {/* ============================================================
          2. NF RESEARCH OVERVIEW — white background
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Research Landscape"
            title="Pursuing Treatments and a Cure"
            description="Neurofibromatosis research has entered an exciting era. With the first FDA-approved treatment for NF1 now available and dozens of clinical trials underway, the path toward effective therapies for all forms of NF has never been clearer."
          />

          <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <FlaskConical className="w-6 h-6" />,
                title: "Clinical Trials",
                desc: "Over 60 active clinical trials are exploring targeted therapies, gene therapy, and immunotherapy approaches for NF1, NF2, and schwannomatosis.",
              },
              {
                icon: <Beaker className="w-6 h-6" />,
                title: "Basic Science",
                desc: "Researchers are uncovering the molecular pathways that drive tumor growth, opening doors to precision medicine approaches tailored to each type of NF.",
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Drug Development",
                desc: "From MEK inhibitors to gene therapies, pharmaceutical and academic labs are developing next-generation treatments that target NF at its genetic roots.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-sand/50 p-6 text-center border border-border/40 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-navy mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              Federal funding through the NIH and the Congressionally Directed
              Medical Research Program (CDMRP) has been the backbone of NF
              research for decades. The NF Network works year-round to protect
              and grow this critical investment &mdash; because every dollar
              brings us closer to a cure.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. FOR RESEARCHERS — sand background with ServiceCards
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="For Researchers"
            title="Resources & Funding Opportunities"
            description="Whether you're an established NF investigator or exploring the field for the first time, the NF Network connects you with the resources, collaborators, and funding you need to accelerate your work."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<FlaskConical className="w-6 h-6" />}
              title="Research Grants"
              description="Discover funding opportunities from the CDMRP, NIH, and private foundations. We help researchers navigate grant applications and connect with NF-specific funding streams."
              href="/research"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Collaboration Network"
              description="Join a national network of NF researchers, clinicians, and patient advocates. Find collaborators, share data, and accelerate discovery through team science."
              href="/research"
            />
            <ServiceCard
              icon={<Beaker className="w-6 h-6" />}
              title="Clinical Trial Support"
              description="Access resources for designing and running NF clinical trials, including patient recruitment assistance, regulatory guidance, and endpoint consultation."
              href="/research"
            />
            <ServiceCard
              icon={<Search className="w-6 h-6" />}
              title="Data & Biospecimens"
              description="Tap into shared NF data repositories and biospecimen banks to power your research without the delay and cost of collecting samples from scratch."
              href="/research"
            />
            <ServiceCard
              icon={<Lightbulb className="w-6 h-6" />}
              title="Research Priorities"
              description="Stay informed about the NF community's most urgent research questions, from pain management to hearing preservation to tumor prevention."
              href="/research"
            />
            <ServiceCard
              icon={<Microscope className="w-6 h-6" />}
              title="Training & Fellowships"
              description="Build the next generation of NF researchers through mentorship programs, early-career fellowships, and dedicated NF research training opportunities."
              href="/research"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          4. PARTICIPATE IN RESEARCH — white background
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Participate in Research"
            title="Your Role in Advancing Science"
            description="Patients and families are at the heart of NF research. By participating in clinical trials, joining patient registries, and sharing your experience, you help drive the discoveries that lead to better treatments."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ClipboardCheck className="w-6 h-6" />}
              title="Clinical Trials"
              description="Explore actively recruiting NF clinical trials. From MEK inhibitors to gene therapies, find studies that may be right for you or your loved one."
              href="/research"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Patient Registries"
              description="Join the NF Patient Registry to connect with researchers studying the natural history of NF. Your data helps scientists understand how NF affects people over time."
              href="/research"
            />
            <ServiceCard
              icon={<Beaker className="w-6 h-6" />}
              title="Biospecimen Donation"
              description="Donate blood, tissue, or tumor samples to accelerate research. Biospecimens are a critical resource for developing and testing new treatments."
              href="/research"
            />
          </div>

          {/* How to Join */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-10">
              How to Get Started
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Learn About Trials",
                  description:
                    "Browse clinicaltrials.gov or speak with your NF specialist to understand which studies may be a good fit for you.",
                },
                {
                  step: "02",
                  title: "Talk to Your Doctor",
                  description:
                    "Discuss participation with your healthcare team. They can help you weigh the benefits and risks of any study.",
                },
                {
                  step: "03",
                  title: "Connect with the NF Network",
                  description:
                    "Our team can help you navigate the research landscape, connect with study coordinators, and answer your questions.",
                },
                {
                  step: "04",
                  title: "Stay Engaged",
                  description:
                    "Even after a trial ends, your involvement matters. Share your experience, join a registry, and help spread the word.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative p-6 bg-sand/50 rounded-xl border border-border/60 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-4xl font-extrabold text-teal-light select-none">
                    {item.step}
                  </span>
                  <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/research">
                <Button
                  size="lg"
                  className="bg-navy hover:bg-navy-dark text-white text-base px-8"
                >
                  <ClipboardCheck className="w-5 h-5 mr-2" />
                  Find Clinical Trials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. RESEARCH HIGHLIGHTS — sand background
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Breakthroughs"
            title="Research Milestones"
            description="The NF research community has achieved remarkable progress in recent years. These breakthroughs are transforming what it means to live with neurofibromatosis."
          />

          <div className="mt-12 max-w-4xl mx-auto">
            {/* Timeline-style layout */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-navy-light/20 hidden sm:block" />

              <div className="space-y-8">
                {breakthroughs.map((item, i) => (
                  <div
                    key={item.year}
                    className="relative flex gap-4 sm:gap-8 items-start group"
                  >
                    {/* Year badge */}
                    <div className="relative z-10 shrink-0 w-8 sm:w-16 flex justify-center">
                      <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-navy flex items-center justify-center text-white shadow-elevated group-hover:scale-110 transition-transform">
                        <span className="text-xs sm:text-sm font-bold">
                          {item.year.slice(2)}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-xl border border-border/60 shadow-card p-5 sm:p-6 hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-navy-light mb-1 block">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              These achievements represent just a fraction of the progress being
              made. With sustained investment and community participation, the
              next decade promises even greater advances for everyone affected
              by neurofibromatosis.
            </p>
            <Link href="/research">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8"
              >
                View All Research Updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Help Power the Next Breakthrough"
        description="Every dollar you give funds critical research, supports clinical trials, and brings us closer to effective treatments for all forms of NF. Together, we can change the future."
        primaryLabel="Donate to Research"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
