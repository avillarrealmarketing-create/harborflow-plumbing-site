"use client"

import { Phone, AlertTriangle } from "lucide-react"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <a
        href={PHONE_LINK}
        className="flex items-center justify-center gap-3 bg-destructive px-4 py-3.5 text-destructive-foreground shadow-lg transition-colors hover:bg-destructive/90"
      >
        <AlertTriangle className="h-5 w-5" />
        <span className="font-semibold">Emergency Plumbing? Call Now</span>
        <Phone className="h-5 w-5" />
      </a>
    </div>
  )
}
