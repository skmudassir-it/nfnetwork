import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  organization: {
    title: "Organization",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Mission", href: "/about" },
      { label: "Board of Directors", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  learn: {
    title: "Learn About NF",
    links: [
      { label: "What is NF", href: "/understand-nf" },
      { label: "Find a Doctor", href: "/understand-nf" },
      { label: "Clinical Care Options", href: "/understand-nf" },
      { label: "Research", href: "/research" },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { label: "Events", href: "/events" },
      { label: "Advocacy", href: "/advocacy" },
      { label: "Community", href: "/community" },
      { label: "Donate", href: "/donate" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Webinars", href: "/resources" },
      { label: "Educational Materials", href: "/resources" },
      { label: "NF Heartline", href: "/resources" },
      { label: "News", href: "/news" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#0d3b52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Heart className="w-6 h-6 text-red-400" fill="currentColor" />
              NF Network
            </Link>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-6 max-w-xs">
              The leading national organization advocating for federal funding for NF
              research and building and supporting NF communities.
            </p>
            <div className="space-y-2 text-sm text-blue-200/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(630) 510-1115</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:admin@nfnetwork.org" className="hover:text-white transition-colors">
                  admin@nfnetwork.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Toll-Free: (800) 942-6825</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-200/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-200/50">
          <p>
            &copy; {new Date().getFullYear()} Neurofibromatosis Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
