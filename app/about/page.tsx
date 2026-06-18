import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import {
  Heart,
  Users,
  Microscope,
  Scale,
  Globe,
  Lightbulb,
  Megaphone,
  HandHeart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with dot pattern overlay
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="About Us"
            title="Advocating for the NF Community"
            description="The NF Network is the leading national advocacy organization dedicated to improving the lives of those affected by neurofibromatosis."
            light
          />
        </div>
      </section>

      {/* ============================================================
          2. MISSION — white background
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Mission"
            title="Serving the NF Community"
            description="We work tirelessly to build and strengthen the NF community as we pursue effective treatments and a cure for all forms of neurofibromatosis."
          />

          {/* Mission statement highlight */}
          <div className="mt-12 max-w-4xl mx-auto">
            <blockquote className="relative rounded-2xl bg-teal-light border-l-4 border-navy p-8 sm:p-10">
              <p className="text-lg sm:text-xl font-medium text-navy-dark leading-relaxed italic">
                &ldquo;The NF Network works tirelessly to serve and build the
                NF community as we pursue treatments and a cure for NF. We
                believe that no one should face this journey alone.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-navy-light font-semibold">
                &mdash; NF Network
              </footer>
            </blockquote>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-10">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Compassion",
                  desc: "We lead with empathy, understanding the challenges faced by individuals and families living with NF every day.",
                },
                {
                  icon: <Scale className="w-6 h-6" />,
                  title: "Equity",
                  desc: "We fight for equal access to quality care, clinical trials, and support regardless of background or geography.",
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: "Innovation",
                  desc: "We champion cutting-edge research and creative solutions to accelerate progress toward effective treatments.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community",
                  desc: "We believe in the power of connection — bringing patients, families, researchers, and advocates together.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="group rounded-xl bg-sand/50 p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-navy-light transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. IMPACT — sand/cream background with stats
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Impact"
            title="Making a Difference"
            description="Every day, the NF Network drives change through advocacy, research, education, and community building."
          />

          {/* Impact Stats */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "50+",
                label: "Member Organizations",
                desc: "Uniting NF groups across the country under one powerful national voice.",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                value: "$200M+",
                label: "Research Funding Secured",
                desc: "Advocating for federal dollars through the CDMRP and NIH to accelerate NF research.",
                icon: <Microscope className="w-6 h-6" />,
              },
              {
                value: "30+",
                label: "Years of Advocacy",
                desc: "A proven track record of legislative wins and policy changes that benefit the NF community.",
                icon: <Megaphone className="w-6 h-6" />,
              },
              {
                value: "100K+",
                label: "Lives Touched",
                desc: "Connecting patients, families, and caregivers with the resources and support they need.",
                icon: <HandHeart className="w-6 h-6" />,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl bg-white p-6 text-center border border-border/40 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-light/10 flex items-center justify-center text-navy mx-auto mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. TEAM — white background, board mention
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Leadership &amp; Governance"
            description="The NF Network is guided by a dedicated Board of Directors and a passionate staff committed to serving the NF community."
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our Board of Directors brings together leaders from across the NF
              community &mdash; including medical professionals, researchers,
              patient advocates, and community organizers &mdash; all driven by
              a shared commitment to our mission. Together with our national
              staff, they guide the strategic direction of the organization,
              ensuring that every program and initiative stays focused on what
              matters most: serving individuals and families affected by NF.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Interested in joining our leadership or learning more about our
              governance? We welcome dedicated individuals who share our vision
              for a world without NF.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Together, We Can End NF"
        description="Your support powers advocacy, research, and community programs that change lives. Join us in the fight against neurofibromatosis."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
