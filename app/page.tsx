import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import EventCard from "@/components/ui/EventCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Stethoscope,
  BookOpen,
  Users,
  Microscope,
  HeartHandshake,
  CalendarHeart,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Help Center — quick access cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="NF Help Center"
            title="Find Support & Information"
            description="Whether you're newly diagnosed or a long-time advocate, we're here to help you navigate life with NF."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Stethoscope className="w-6 h-6" />}
              title="Find a Doctor"
              description="Locate NF specialists and clinical care centers near you with our comprehensive directory."
              href="/understand-nf"
            />
            <ServiceCard
              icon={<BookOpen className="w-6 h-6" />}
              title="What is NF?"
              description="Learn about the three types of neurofibromatosis, symptoms, diagnosis, and treatment options."
              href="/understand-nf"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Find an NF Group"
              description="Connect with local NF support groups and member organizations in your community."
              href="/community"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Impact"
            title="What We Do"
            description="The NF Network works on multiple fronts to improve the lives of those affected by neurofibromatosis."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Microscope className="w-6 h-6" />,
                title: "Research Funding",
                description:
                  "We advocate for federal research dollars and connect researchers with the NF community to accelerate scientific discovery.",
                href: "/research",
              },
              {
                icon: <HeartHandshake className="w-6 h-6" />,
                title: "Advocacy",
                description:
                  "Our advocacy program fights for increased NIH and CDMRP funding, better clinical care, and policies that support the NF community.",
                href: "/advocacy",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Building",
                description:
                  "We unite over 50 member organizations, run NF camps, support groups, and create spaces for connection and shared experience.",
                href: "/community",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Education",
                description:
                  "From webinars to printed materials, we provide reliable, up-to-date information for patients, families, and healthcare providers.",
                href: "/resources",
              },
              {
                icon: <CalendarHeart className="w-6 h-6" />,
                title: "Events & Fundraising",
                description:
                  "Join NF Strong walks, Hope Concerts, and community fundraisers that bring people together while raising critical funds.",
                href: "/events",
              },
              {
                icon: <Stethoscope className="w-6 h-6" />,
                title: "Patient Support",
                description:
                  "Our NF Heartline connects newly diagnosed patients and families with mentors who understand the journey firsthand.",
                href: "/resources",
              },
            ].map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Events"
            title="Upcoming Events"
            description="Join us at an upcoming event to connect, learn, and make a difference."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <EventCard
              title="Stronger Together: Navigating NF as a Dad"
              date="17"
              location="Virtual — Everywhere"
              href="/events"
            />
            <EventCard
              title="NF Strong Summer Concert"
              date="17"
              location="Woodstock, GA"
              href="/events"
            />
            <EventCard
              title="NF California's Huntington Beach Day"
              date="18"
              location="Bolsa Chica State Beach, CA"
              href="/events"
            />
            <EventCard
              title="NF Summer Camp at Brainy Ridge"
              date="19"
              location="St. George, VA"
              href="/events"
            />
          </div>
          <div className="mt-10 text-center">
            <Link href="/events">
              <Button variant="outline" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="News"
            title="Latest Updates"
            description="Stay informed about NF research breakthroughs, community stories, and advocacy wins."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Spotlight on SketchNF Superhero: Maggie!",
                desc: "Meet Maggie, a young artist using her talent to raise awareness and funds for NF research.",
              },
              {
                title: "One Sketch at a Time: SketchNF Returns This Summer",
                desc: "The annual SketchNF campaign is back — join artists worldwide in sketching for a cure.",
              },
              {
                title: "NF Center Launches New Therapy Program",
                desc: "A new multidisciplinary therapy program opens this summer for NF patients.",
              },
              {
                title: "NF Awareness Month Celebrated Community & Hope",
                desc: "Recap of NF Awareness Month events, stories, and milestones from across the country.",
              },
            ].map((news) => (
              <Link
                key={news.title}
                href="/news"
                className="group block p-6 rounded-xl bg-white border border-border/60 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {news.desc}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-primary">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Partners & Friends
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "SpringWorks Therapeutics",
              "Alexion (AstraZeneca Rare Disease)",
              "NORD",
              "Candid / GuideStar",
            ].map((partner) => (
              <span key={partner} className="text-sm font-semibold text-foreground/50">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
