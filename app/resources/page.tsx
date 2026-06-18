import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  PhoneCall,
  Video,
  BookOpen,
  FileText,
  ExternalLink,
  Heart,
} from "lucide-react";

export default function ResourcesPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with dot pattern overlay
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Resources"
            title="Support, Education &amp; Connection"
            description="From one-on-one peer support to educational webinars and downloadable guides — the NF Network provides the resources you need at every stage of your NF journey."
            light
          />
        </div>
      </section>

      {/* ============================================================
          2. NF HEARTLINE — peer support program
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Peer Support"
            title="NF Heartline"
            description="A one-on-one peer support program that connects individuals and families affected by neurofibromatosis with trained mentors who truly understand the journey."
          />

          {/* How It Works — three cards */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<PhoneCall className="w-6 h-6" />}
              title="Reach Out"
              description="Call or email the NF Heartline to let us know what you're looking for — whether it's a mentor, information, or just someone to talk to who gets it."
              href="/resources"
            />
            <ServiceCard
              icon={<Heart className="w-6 h-6" />}
              title="Get Matched"
              description="We pair you with a trained NF Heartline mentor whose experience aligns with your needs — from a new diagnosis to parenting a child with NF."
              href="/resources"
            />
            <ServiceCard
              icon={<PhoneCall className="w-6 h-6" />}
              title="Stay Connected"
              description="Build an ongoing relationship with your mentor through regular calls, texts, or emails. There's no time limit — support is here for as long as you need it."
              href="/resources"
            />
          </div>

          {/* Heartline highlight box */}
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-navy-gradient p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-10" />
            <div className="relative">
              <Heart className="w-10 h-10 text-warm-red mx-auto mb-4" fill="currentColor" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                You Don&apos;t Have to Face NF Alone
              </h3>
              <p className="text-blue-100/80 leading-relaxed max-w-xl mx-auto mb-6">
                Whether you&apos;re newly diagnosed, a parent, or a long-time patient,
                the NF Heartline connects you with someone who has walked a similar
                path. All mentors are trained and supported by the NF Network.
              </p>
              <Link href="/resources">
                <Button size="lg" className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Contact NF Heartline
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. WEBINARS — upcoming and past webinars
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Learn"
            title="Webinars &amp; Online Events"
            description="Join live webinars with NF experts, researchers, and community leaders — or watch past recordings on your own schedule."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Video className="w-6 h-6" />}
              title="Upcoming Webinars"
              description="Stay up to date with our calendar of live webinars. Topics range from NF research updates to practical tips for managing daily life with NF."
              href="/resources"
            />
            <ServiceCard
              icon={<Video className="w-6 h-6" />}
              title="On-Demand Library"
              description="Browse our archive of recorded webinars. Catch up on presentations you missed or revisit talks on topics that matter most to you."
              href="/resources"
            />
            <ServiceCard
              icon={<Video className="w-6 h-6" />}
              title="Expert Speakers"
              description="Learn from leading NF clinicians, researchers, and advocates. Our webinars feature the voices shaping the future of NF care and treatment."
              href="/resources"
            />
          </div>

          {/* Featured webinar highlight */}
          <div className="mt-10 max-w-3xl mx-auto p-6 rounded-xl bg-white border border-border/60 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-navy shrink-0">
                <Video className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-navy-light">
                  Featured Webinar
                </span>
                <h3 className="mt-1 text-lg font-semibold">
                  Understanding Plexiform Neurofibromas: Latest Treatment Options
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Dr. Sarah Chen discusses current and emerging treatments for plexiform neurofibromas, including MEK inhibitors and surgical approaches. Available on-demand.
                </p>
                <Link href="/resources" className="inline-block mt-3 text-sm font-medium text-primary hover:underline">
                  Watch now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. EDUCATIONAL MATERIALS — brochures, guides, downloads
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Learn"
            title="Educational Materials"
            description="Downloadable brochures, fact sheets, and guides — designed for patients, families, educators, and healthcare providers."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<BookOpen className="w-6 h-6" />}
              title="NF Fact Sheets"
              description="Concise, printable overviews of NF1, NF2, and Schwannomatosis. Perfect for sharing with family, teachers, or new healthcare providers."
              href="/resources"
            />
            <ServiceCard
              icon={<FileText className="w-6 h-6" />}
              title="Patient Guides"
              description="In-depth guides covering diagnosis, treatment options, and living well with NF. Available in English and Spanish."
              href="/resources"
            />
            <ServiceCard
              icon={<BookOpen className="w-6 h-6" />}
              title="School &amp; Educator Resources"
              description="Materials to help teachers, school nurses, and administrators understand NF and support students with the condition."
              href="/resources"
            />
            <ServiceCard
              icon={<FileText className="w-6 h-6" />}
              title="Clinical Trial Information"
              description="Learn about current NF clinical trials, what participation involves, and how to find studies that may be right for you or your loved one."
              href="/resources"
            />
            <ServiceCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Advocacy Toolkits"
              description="Step-by-step guides for contacting elected officials, sharing your NF story, and becoming an effective advocate for the NF community."
              href="/resources"
            />
            <ServiceCard
              icon={<FileText className="w-6 h-6" />}
              title="Newsletter Archive"
              description="Browse past editions of the NF Network newsletter for community stories, research updates, and upcoming events."
              href="/resources"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/resources">
              <Button size="lg" className="bg-navy hover:bg-navy-dark text-white text-base px-8">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Materials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. OTHER RESOURCES — external links, partner orgs
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Connect"
            title="Other Resources"
            description="Trusted organizations, partner resources, and external links to help you find the information and support you need."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Partner Organizations */}
            {[
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "Children's Tumor Foundation",
                description:
                  "A leading nonprofit dedicated to ending NF through research. Find clinical trial listings, patient resources, and research news.",
                href: "https://www.ctf.org/",
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "NORD — Rare Disease Organization",
                description:
                  "The National Organization for Rare Disorders provides patient advocacy, financial assistance programs, and rare disease policy resources.",
                href: "https://rarediseases.org/",
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "NIH — Neurofibromatosis",
                description:
                  "The National Institutes of Health offers comprehensive information on NF research, genetics, clinical studies, and treatment advances.",
                href: "https://www.ninds.nih.gov/health-information/disorders/neurofibromatosis",
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "CDMRP — NF Research Program",
                description:
                  "The Congressionally Directed Medical Research Program funds innovative, high-impact NF research. Learn about funded projects and funding opportunities.",
                href: "https://cdmrp.health.mil/nfrp/default",
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "NF Clinics &amp; Care Centers",
                description:
                  "Find an NF specialty clinic near you. These centers offer coordinated care from neurologists, geneticists, dermatologists, and more.",
                href: "/resources",
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "ClinicalTrials.gov — NF Studies",
                description:
                  "Search for actively recruiting NF clinical trials across the United States. Filter by location, trial phase, and eligibility criteria.",
                href: "https://clinicaltrials.gov/search?cond=Neurofibromatosis",
              },
            ].map((resource) => (
              <ServiceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Help Us Provide These Resources"
        description="Every brochure, webinar, and Heartline call is made possible by supporters like you. Your donation keeps these vital resources free and accessible to the entire NF community."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
