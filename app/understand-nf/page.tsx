import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Stethoscope,
  BookOpen,
  Heart,
  Microscope,
  MapPin,
  Dna,
  Brain,
  Activity,
  Search,
} from "lucide-react";

const nfTypes = [
  {
    icon: <Dna className="w-6 h-6" />,
    title: "Neurofibromatosis Type 1 (NF1)",
    description:
      "The most common form of NF, affecting about 1 in every 3,000 births. NF1 is characterized by café-au-lait spots on the skin, neurofibromas (benign tumors on or under the skin), and Lisch nodules in the eyes. Some individuals also experience bone deformities, learning disabilities, and optic pathway gliomas.",
    href: "/understand-nf#nf1",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Neurofibromatosis Type 2 (NF2)",
    description:
      "A less common form affecting about 1 in 25,000 births. NF2 is characterized by the development of benign tumors on both auditory nerves (vestibular schwannomas), which can lead to hearing loss, tinnitus, and balance problems. Other tumors may develop in the brain and spinal cord.",
    href: "/understand-nf#nf2",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Schwannomatosis",
    description:
      "The rarest form of NF, characterized by the development of multiple schwannomas — benign tumors that arise from Schwann cells — throughout the body. Unlike NF2, schwannomatosis does not typically involve vestibular tumors and hearing loss. Chronic pain is the most common and challenging symptom.",
    href: "/understand-nf#schwannomatosis",
  },
];

export default function UnderstandNFPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Understand NF
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Neurofibromatosis (NF) is a group of genetic disorders that cause
            tumors to grow on nerves throughout the body. Learn about the three
            types, find specialized care, and discover treatment options.
          </p>
        </div>
      </section>

      {/* What is NF — the three types */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What is NF?"
            title="The Three Types of Neurofibromatosis"
            description="NF affects people of all races and ethnicities equally, and can appear in families with no prior history of the condition. Understanding each type is the first step toward better care and support."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfTypes.map((type) => (
              <ServiceCard key={type.title} {...type} />
            ))}
          </div>
        </div>
      </section>

      {/* Find a Doctor */}
      <section className="py-16 sm:py-20 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Find a Doctor"
                title="Connect with NF Specialists"
                description="Finding a doctor who understands neurofibromatosis can make all the difference. Our directory connects you with experienced NF clinicians and comprehensive care centers across the country."
                align="left"
              />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                NF is a complex condition that often requires a
                multidisciplinary approach. The right specialist will coordinate
                care across dermatology, neurology, orthopedics, ophthalmology,
                oncology, and genetics — ensuring you or your loved one receives
                comprehensive, coordinated treatment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/understand-nf">
                  <Button size="lg" className="bg-navy hover:bg-navy-dark">
                    <Search className="w-5 h-5 mr-2" />
                    Search Directory
                  </Button>
                </Link>
                <Link href="/understand-nf">
                  <Button variant="outline" size="lg">
                    What to Ask Your Doctor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Nationwide Network",
                  desc: "Clinics and specialists in every region of the United States.",
                },
                {
                  icon: <Stethoscope className="w-5 h-5" />,
                  label: "Vetted Specialists",
                  desc: "Doctors experienced in diagnosing and managing all three types of NF.",
                },
                {
                  icon: <Heart className="w-5 h-5" />,
                  label: "Patient Reviews",
                  desc: "Learn from others in the NF community about their care experiences.",
                },
                {
                  icon: <BookOpen className="w-5 h-5" />,
                  label: "Telehealth Options",
                  desc: "Connect with NF experts remotely when travel is not possible.",
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

      {/* Clinical Care Options */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clinical Care"
            title="Clinical Care Options for NF1"
            description="While there is no cure for NF1 yet, a range of treatments and management strategies can help address symptoms and improve quality of life."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Microscope className="w-6 h-6" />,
                title: "Monitoring & Surveillance",
                description:
                  "Regular check-ups with an NF specialist to monitor tumor growth, vision changes, blood pressure, and developmental milestones. Early detection of complications leads to better outcomes.",
                href: "/understand-nf",
              },
              {
                icon: <Stethoscope className="w-6 h-6" />,
                title: "Surgical Interventions",
                description:
                  "When neurofibromas cause pain, impair function, or raise cosmetic concerns, surgical removal may be an option. Plexiform neurofibromas may require specialized surgical approaches.",
                href: "/understand-nf",
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Medication & Targeted Therapies",
                description:
                  "FDA-approved MEK inhibitors like selumetinib (Koselugo) can shrink plexiform neurofibromas in children. Clinical trials continue to explore new targeted treatments for NF1-related tumors.",
                href: "/understand-nf",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Pain Management",
                description:
                  "Chronic pain affects many people with NF. A comprehensive pain management plan may include medication, physical therapy, cognitive behavioral therapy, and complementary approaches.",
                href: "/understand-nf",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Learning & Developmental Support",
                description:
                  "Learning disabilities and ADHD are common in children with NF1. Early intervention, educational accommodations, and neuropsychological support can make a significant difference.",
                href: "/understand-nf",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Psychosocial Support",
                description:
                  "Living with a visible, chronic condition takes an emotional toll. Counseling, support groups, and NF community connections provide vital emotional and social support.",
                href: "/understand-nf",
              },
            ].map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Help Advance NF Research & Care"
        description="Your donation supports clinical care centers, accelerates research into effective treatments, and strengthens the NF community. Together, we can make a difference."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
