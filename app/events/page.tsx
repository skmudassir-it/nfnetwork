import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CalendarHeart,
  MapPin,
  Music,
  Coffee,
  Palette,
  Dumbbell,
  PartyPopper,
  ArrowRight,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join NF Network events across the country — concerts, runs, golf tournaments, art showcases, and more. Every event raises funds and awareness for the neurofibromatosis community.",
};

const upcomingEvents = [
  {
    title: "NF Strong Summer Concert",
    date: "Jun 21, 2026",
    location: "Woodstock, GA",
    description:
      "An evening of live music, community celebration, and hope. All proceeds benefit NF research and local programs.",
    href: "/events",
  },
  {
    title: "NF California Huntington Beach Day",
    date: "Jun 28, 2026",
    location: "Bolsa Chica State Beach, CA",
    description:
      "A day of sun, sand, and solidarity on the California coast. Family-friendly activities for all ages.",
    href: "/events",
  },
  {
    title: "NF Summer Camp at Brainy Ridge",
    date: "Jul 5, 2026",
    location: "St. George, VA",
    description:
      "A week-long residential summer camp for children and teens with NF in a safe, medically supported environment.",
    href: "/events",
  },
  {
    title: "Stronger Together: Navigating NF as a Dad",
    date: "Jul 12, 2026",
    location: "Virtual — Online",
    description:
      "An online gathering for fathers of children with NF to share experiences, challenges, and encouragement.",
    href: "/events",
  },
  {
    title: "Docs Rock for NF",
    date: "Aug 15, 2026",
    location: "Nationwide",
    description:
      "Physicians and medical professionals come together for a concert event supporting NF research and awareness.",
    href: "/events",
  },
  {
    title: "Links for Lauren",
    date: "Sep 8, 2026",
    location: "Chicago, IL",
    description:
      "Annual charity golf tournament honoring Lauren — bringing the community together for a day on the green.",
    href: "/events",
  },
  {
    title: "Scully Coffee4NF",
    date: "Sep 19, 2026",
    location: "Nationwide — Local Cafés",
    description:
      "Grab a cup for a cause. Local coffee shop fundraiser supporting NF Network programs and research.",
    href: "/events",
  },
  {
    title: "Ducky Dash",
    date: "Oct 22, 2026",
    location: "Nashville, TN",
    description:
      "Thousands of rubber ducks race to the finish line — adopt your duck and watch it compete for a great cause.",
    href: "/events",
  },
  {
    title: "Run4NF",
    date: "Oct 14, 2026",
    location: "Denver, CO",
    description:
      "Lace up and hit the pavement. A family-friendly 5K run and walk raising funds for the NF community.",
    href: "/events",
  },
  {
    title: "SketchNF",
    date: "Nov 25, 2026",
    location: "Nationwide — Online Gallery",
    description:
      "An art event celebrating creativity in the NF community. Artists of all ages share their work and their stories.",
    href: "/events",
  },
];

const eventTypes = [
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "NF Strong",
    description:
      "Fitness and strength events that bring the NF community together through physical challenges, team workouts, and wellness activities — proving that together we are stronger.",
    href: "/events",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Hope Concerts",
    description:
      "Live music events featuring local and national artists. Hope Concerts raise awareness and funds while celebrating the resilience of the NF community through the power of music.",
    href: "/events",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Docs Rock",
    description:
      "A unique concert series where physicians and medical professionals take the stage to rock out for NF research, awareness, and better patient care.",
    href: "/events",
  },
  {
    icon: <CalendarHeart className="w-6 h-6" />,
    title: "Links for Lauren",
    description:
      "Annual charity golf tournament held in loving memory of Lauren, uniting golfers and supporters for a day of friendly competition and community impact.",
    href: "/events",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Coffee4NF",
    description:
      "Community coffee fundraisers hosted at local cafés. A simple, powerful way to start conversations about NF over a cup of coffee while raising critical funds.",
    href: "/events",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Ducky Dash",
    description:
      "Rubber duck races held in communities nationwide — a fun, family-friendly event where every duck adoption supports NF programs and research.",
    href: "/events",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Run4NF",
    description:
      "5K runs and walks organized by NF families and supporters across the country. Get moving, raise funds, and show the world what the NF community can do.",
    href: "/events",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "SketchNF",
    description:
      "Art showcases and creative events where NF patients, families, and supporters express their journeys through visual art, raising awareness one piece at a time.",
    href: "/events",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with CalendarHeart icon
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarHeart className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Events
          </h1>
          <p className="mt-4 text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            From coast to coast, the NF community comes together through
            concerts, runs, golf tournaments, art showcases, and more. Find an
            event near you — or start one of your own.
          </p>
        </div>
      </section>

      {/* ============================================================
          2. FEATURED / UPCOMING EVENTS — EventCard grid
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Upcoming Events"
            title="Join an NF Event Near You"
            description="Browse upcoming NF Network events happening across the country and online. Every event helps raise awareness and critical funds for the neurofibromatosis community."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-dark text-white text-base px-8"
              >
                <CalendarHeart className="w-5 h-5 mr-2" />
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. EVENT TYPES — ServiceCard grid
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Event Types"
            title="Ways to Get Involved"
            description="The NF Network supports a wide range of community-driven events. Whether you want to run, create art, enjoy live music, or grab a coffee for a cause, there's a way for you to make a difference."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type) => (
              <ServiceCard key={type.title} {...type} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. HOST YOUR OWN EVENT
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-navy-gradient rounded-2xl overflow-hidden shadow-elevated">
            <div className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative">
                <PartyPopper className="w-12 h-12 text-blue-200 mx-auto mb-5" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Host Your Own Event
                </h2>
                <p className="mt-4 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                  You don't need to wait for an event to come to your town.
                  Whether it's a bake sale, a charity stream, a garage sale, or
                  a community walk, the NF Network gives you the tools to turn
                  your idea into a successful fundraiser. Every event — big or
                  small — moves us closer to a cure.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/events">
                    <Button
                      size="lg"
                      className="bg-warm-red hover:bg-warm-red/90 text-white text-base px-8"
                    >
                      <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                      Start Your Event
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 text-base px-8"
                    >
                      Event Toolkit
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
        title="Support NF Community Events"
        description="Every concert, run, golf tournament, and coffee fundraiser is powered by people like you. Your support helps us grow these events, reach more families, and fund the research that will end NF."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
