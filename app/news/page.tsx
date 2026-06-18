import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Newspaper, Rss, Mail, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay up to date with the latest NF Network news, community stories, research updates, and advocacy wins. Read articles from across the NF community.",
};

const articles = [
  {
    date: "October 2024",
    title: "Spotlight on SketchNF Superhero: Maggie!",
    excerpt:
      "Meet Maggie, a young artist using her creative talents to raise funds and awareness for NF research. Through SketchNF, she's turning her passion for art into real impact for the community.",
    slug: "sketch-nf-superhero-maggie",
  },
  {
    date: "September 2024",
    title: "One Sketch at a Time: SketchNF Returns This Summer",
    excerpt:
      "The beloved SketchNF campaign is back, bringing together artists from around the world to create portraits and raise critical funds for neurofibromatosis research — one sketch at a time.",
    slug: "sketch-nf-returns-summer",
  },
  {
    date: "August 2024",
    title: "NF Center Launches New Therapy Program This Summer",
    excerpt:
      "A leading NF specialty center has unveiled an innovative therapy program designed to address the physical and emotional needs of children and adults living with neurofibromatosis.",
    slug: "nf-center-new-therapy-program",
  },
  {
    date: "July 2024",
    title: "NF Awareness Month Celebrated Community, Connection, and Hope",
    excerpt:
      "May's NF Awareness Month brought together thousands of advocates, families, and supporters across the country for walks, fundraisers, educational events, and powerful stories of resilience.",
    slug: "nf-awareness-month-community-hope",
  },
  {
    date: "June 2024",
    title: "New Research Grant Awarded for NF2 Gene Therapy Study",
    excerpt:
      "A groundbreaking gene therapy study targeting NF2 has received major funding, offering new hope for patients with NF2-related tumors. Researchers aim to begin clinical trials within two years.",
    slug: "nf2-gene-therapy-research-grant",
  },
  {
    date: "May 2024",
    title: "NF Network Welcomes New Board Members for 2024",
    excerpt:
      "The NF Network is proud to welcome three new members to its Board of Directors, bringing expertise in clinical care, rare disease advocacy, and nonprofit leadership to guide our mission forward.",
    slug: "new-board-members-2024",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with Newspaper icon
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Network News
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest updates, stories, and breakthroughs
            from across the NF community. Read about research advances,
            community events, advocacy wins, and the people driving change.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/news#subscribe">
              <Button
                size="lg"
                className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe to Updates
              </Button>
            </Link>
            <Link href="/news">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8"
              >
                <Rss className="w-5 h-5 mr-2" />
                RSS Feed
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. NEWS ARTICLES GRID — 6 article cards
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Latest Articles"
            title="Stories from the NF Community"
            description="Explore our latest news, feature stories, and updates covering research breakthroughs, community spotlights, advocacy victories, and more."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col rounded-xl border border-border/60 bg-white shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Date badge */}
                <div className="flex items-center gap-2 px-6 pt-6 pb-0">
                  <Calendar className="w-4 h-4 text-navy-light" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-light">
                    {article.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 pt-3">
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. NEWSLETTER SIGNUP — visual section, no JS form handling
          ============================================================ */}
      <section
        id="subscribe"
        className="py-16 sm:py-20 bg-sand/50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-teal-light flex items-center justify-center text-navy mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Sign up for the NF Network newsletter and get the latest news,
              research updates, community stories, and advocacy alerts delivered
              straight to your inbox. Never miss an update that matters.
            </p>

            {/* Visual email signup form (no action, no JS) */}
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/60 bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-navy hover:bg-navy-dark text-white text-base px-8 shrink-0"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>

            {/* Perks */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Newspaper className="w-5 h-5" />,
                  label: "Monthly Digest",
                  desc: "A curated roundup of the month's top stories, delivered once a month.",
                },
                {
                  icon: <Rss className="w-5 h-5" />,
                  label: "Breaking News",
                  desc: "Be the first to hear about research breakthroughs and major announcements.",
                },
                {
                  icon: <Calendar className="w-5 h-5" />,
                  label: "Event Reminders",
                  desc: "Never miss an NF walk, fundraiser, webinar, or community gathering near you.",
                },
              ].map((perk) => (
                <div
                  key={perk.label}
                  className="rounded-xl bg-white p-5 border border-border/40 shadow-card text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center text-navy mx-auto mb-3">
                    {perk.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{perk.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Your Support Drives These Stories"
        description="Every breakthrough, every community event, and every life-changing program starts with the generosity of supporters like you. Help us continue making news that matters."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
