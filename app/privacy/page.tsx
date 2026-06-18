import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how the NF Network collects, uses, and protects your personal information.",
};

const sections: { title: string; content: string[] }[] = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you voluntarily provide when you interact with the NF Network, including when you sign up for our newsletter, register for an event, make a donation, complete a survey, or contact us through our website. This may include your name, email address, mailing address, phone number, payment information, and details about your connection to the NF community.",

      "We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, referring URL, pages viewed, and the date and time of your visit. This information helps us understand how visitors use our site and improve their experience.",

      "We use cookies and similar tracking technologies to collect this information. For more details, see the Cookies section below.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We use the information we collect to fulfill our mission of serving the NF community. Specifically, we use your information to process donations and send acknowledgments, register you for events and programs, communicate about our work including newsletters, advocacy alerts, and research updates, respond to your inquiries and requests, improve our website and services, and comply with legal obligations.",

      "We do not sell, rent, or trade your personal information to third parties for their marketing purposes. Any information you share with us is used exclusively to support the NF Network's mission and programs.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We may share your information with trusted service providers who assist us in operating our website, processing donations, managing events, and communicating with our community. These providers are contractually obligated to protect your information and use it only for the services they provide to us.",

      "We may also disclose information when required by law, to protect our rights, or to comply with a legal process. In the unlikely event of a merger, acquisition, or reorganization, your information may be transferred as part of that transaction.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement reasonable technical, administrative, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption of sensitive data, secure server infrastructure, and access controls that limit data access to authorized personnel only.",

      "While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we continuously monitor and update our security practices to address emerging threats.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses cookies \u2014 small text files placed on your device \u2014 to enhance your browsing experience. We use essential cookies that are necessary for the website to function properly, analytics cookies that help us understand how visitors interact with our site, and functional cookies that remember your preferences.",

      "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies, though doing so may affect your experience on our website. By continuing to use our site, you consent to our use of cookies as described in this policy.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites, including partner organizations, research institutions, and social media platforms. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "The NF Network is committed to protecting the privacy of children. We do not knowingly collect personal information from children under the age of 13 without verifiable parental consent. If we learn that we have collected information from a child under 13 without parental consent, we will promptly delete that information.",

      "If you believe we may have collected information from a child under 13, please contact us immediately using the information in the Contact Us section below.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Depending on your location, you may have certain rights regarding your personal information, including the right to access the personal data we hold about you, the right to request correction of inaccurate information, the right to request deletion of your information, the right to opt out of marketing communications, and the right to withdraw consent where processing is based on consent.",

      "To exercise any of these rights, please contact us using the information in the Contact Us section. We will respond to your request within the timeframe required by applicable law. You can also unsubscribe from our marketing emails at any time by clicking the unsubscribe link at the bottom of any email we send.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:",

      "Neurofibromatosis Network\nP.O. Box 1536\nWheaton, IL 60187\n\nEmail: admin@nfnetwork.org\nPhone: (630) 510-2127",
    ],
  },
  {
    title: "Updates to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. When we make changes, we will revise the \u201cLast Updated\u201d date at the top of this page and, for material changes, provide a more prominent notice on our website.",

      "We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ============================================================
          BANNER — navy gradient with dot pattern overlay
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Privacy Policy"
            title="Your Privacy Matters"
            description="We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data."
            light
          />
          <p className="mt-6 text-center text-sm text-blue-200/70">
            Last Updated: June 17, 2026
          </p>
        </div>
      </section>

      {/* ============================================================
          POLICY CONTENT — white background, prose styling
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-16">
            <p>
              The Neurofibromatosis Network (&ldquo;NF Network,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) values
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your personal information when you visit
              our website, interact with us online, donate, register for events,
              or otherwise engage with our organization.
            </p>
            <p>
              By using our website or providing your information to us, you
              agree to the practices described in this policy. If you do not
              agree, please discontinue use of our site and services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1 shrink-0">
                    <Shield className="w-5 h-5 text-navy" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed pl-8 space-y-4">
                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-16 prose prose-lg max-w-none text-muted-foreground leading-relaxed border-t border-border pt-10">
            <p className="text-sm">
              This privacy policy was last updated on June 17, 2026 and is
              effective as of that date. If you have any questions about this
              policy or wish to exercise your data rights, please contact us
              using the information above.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BANNER
          ============================================================ */}
      <CTABanner
        title="Your Support Changes Lives"
        description="When you donate to the NF Network, you power research, advocacy, and community programs that make a real difference for families affected by NF."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
