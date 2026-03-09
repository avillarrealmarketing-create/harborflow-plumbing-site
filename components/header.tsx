"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">HarborFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <a href={PHONE_LINK} className="hidden items-center gap-2 sm:flex">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Call Now</span>
            </a>
          </Button>

          <Button asChild size="icon" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 sm:hidden">
            <a href={PHONE_LINK} aria-label="Call HarborFlow Plumbing">
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                    <Droplets className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold">HarborFlow</span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="border-t pt-4">
                  <Button asChild className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    <a href={PHONE_LINK} className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span className="font-semibold">{PHONE_NUMBER}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
