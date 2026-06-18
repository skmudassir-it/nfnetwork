"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "admin@nfnetwork.org",
    href: "mailto:admin@nfnetwork.org",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "(630) 510-1115",
    href: "tel:+16305101115",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Toll-Free",
    value: "(800) 942-6825",
    href: "tel:+18009426825",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "310 S. Williams Blvd., Ste. 345\nTucson, AZ 85711",
    href: null,
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — just visual confirmation
    setSubmitted(true);
  };

  return (
    <>
      {/* ============================================================
          1. BANNER — navy gradient with dot pattern overlay
          ============================================================ */}
      <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="Have questions or want to get involved? We'd love to hear from you. Reach out and a member of our team will get back to you as soon as possible."
            light
          />
        </div>
      </section>

      {/* ============================================================
          2. TWO-COLUMN LAYOUT — contact info + form
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ========================================================
                LEFT COLUMN — contact info + map placeholder
                ======================================================== */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reach us by email, phone, or mail. We&apos;re here to help
                  and look forward to connecting with you.
                </p>
              </div>

              {/* Contact detail cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-sand/50 border border-border/40"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-navy transition-colors leading-relaxed"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground leading-relaxed whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border/40 bg-sand/30">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-10 h-10 text-navy-light mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground">
                      NF Network Headquarters
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      310 S. Williams Blvd., Ste. 345
                      <br />
                      Tucson, AZ 85711
                    </p>
                    <a
                      href="https://maps.google.com/?q=310+S+Williams+Blvd+Suite+345+Tucson+AZ+85711"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-semibold text-navy hover:text-navy-light transition-colors"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                RIGHT COLUMN — contact form
                ======================================================== */}
            <div className="lg:col-span-3">
              <div className="bg-sand/40 rounded-2xl border border-border/40 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you as
                  soon as possible. All fields are required.
                </p>

                {submitted ? (
                  /* Success state */
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. A member of our team will
                      review your message and respond shortly.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Full Name
                      </label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Email Address
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        type="text"
                        placeholder="What's this about?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-navy hover:bg-navy-dark text-white text-base px-8"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
