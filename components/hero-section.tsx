import { Phone, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

export function HeroSection() {
  return (
    <section className="hero-gradient-bg relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Clock className="h-4 w-4" />
              <span>24/7 Emergency Service</span>
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Emergency Plumbing Services in{" "}
              <span className="text-primary">San Diego</span>
            </h1>
            
            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              Fast, reliable plumbing solutions when you need them most. Our licensed experts are available around the clock for burst pipes, clogged drains, and all your plumbing emergencies.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <a href={PHONE_LINK} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Call Now {PHONE_NUMBER}</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">View Our Services</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">5,000+</span>
                <span>San Diego Families Served</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">Need Help Now?</p>
                  <p className="text-muted-foreground">We respond in 45 minutes or less</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg ring-1 ring-border lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">45 min</p>
                  <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
