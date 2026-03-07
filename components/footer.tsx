import Link from "next/link"
import { Phone, Mail, MapPin, Droplets } from "lucide-react"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

const serviceAreas = [
  "San Diego",
  "Chula Vista",
  "La Mesa",
  "National City",
  "El Cajon",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-background">HarborFlow</span>
            </Link>
            <p className="mt-4 text-sm text-background/70">
              San Diego's trusted emergency plumbing service. Available 24/7 for all your plumbing needs.
            </p>
            <a
              href={PHONE_LINK}
              className="mt-4 inline-flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80"
            >
              <Phone className="h-5 w-5" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-background/70">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@harborflow.com"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4" />
                  info@harborflow.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>San Diego, CA 92101</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} HarborFlow Plumbing. All rights reserved.
            </p>
            <p className="text-sm text-background/50">
              Licensed & Insured | CA License #123456
            </p>
          </div>
        </div>
      </div>
      
      {/* Spacer for mobile sticky bar */}
      <div className="h-14 md:hidden" />
    </footer>
  )
}
