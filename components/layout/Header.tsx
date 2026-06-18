"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Understand NF", href: "/understand-nf" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "Research", href: "/research" },
  { label: "Community", href: "/community" },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-navy shrink-0">
            <Heart className="w-6 h-6 text-warm-red" fill="currentColor" />
            <span className="hidden sm:inline">NF Network</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-teal-light/50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="sm" className="bg-warm-red hover:bg-warm-red/90 text-white">
                <Heart className="w-4 h-4 mr-1" fill="currentColor" />
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] pt-12">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-base font-medium rounded-md hover:bg-teal-light/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="my-3" />
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-medium rounded-md hover:bg-teal-light/50 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/donate"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-medium text-white bg-warm-red rounded-md text-center mt-2"
                  >
                    <Heart className="w-4 h-4 inline mr-1" fill="currentColor" />
                    Donate
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
