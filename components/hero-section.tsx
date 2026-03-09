import Image from "next/image"
import { Phone, Shield, Clock, CheckCircle2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient-bg pt-16 lg:pt-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] opacity-10" />
      <div className="absolute inset-0 -z-20 bg-blueprint opacity-[0.03]" />

      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex animate-in fade-in slide-in-from-left-8 duration-1000 flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20">
              <Clock className="h-4 w-4" />
              <span>24/7 Rapid Response San Diego</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              San Diego's Most Trusted{" "}
              <span className="text-primary italic">Emergency</span> Plumbers
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              When every second counts, HarborFlow is there. Professional, licensed, and local experts arriving at your door in 45 minutes or less.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-14 bg-destructive px-8 text-lg text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/20">
                <a href={PHONE_LINK} className="flex items-center gap-3">
                  <Phone className="h-5 w-5 fill-current" />
                  <span className="font-bold">Secure Your Dispatch {PHONE_NUMBER}</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                <a href="#services">Our Services</a>
              </Button>
            </div>

            {/* Enhanced Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium text-foreground">Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">BBB Accredited</span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 lg:ml-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
              <Image
                src="/images/hero-plumber.jpg"
                alt="Professional HarborFlow Plumber in San Diego"
                className="object-cover"
                fill
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -left-6 inline-flex animate-bounce-subtle rounded-2xl bg-card p-5 shadow-2xl ring-1 ring-border lg:-left-12">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tight text-foreground">45 min</p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Avg. Response</p>
                </div>
              </div>
            </div>

            {/* Trust Seal Display */}
            <div className="absolute -top-6 -right-6 hidden rounded-full bg-white p-2 shadow-xl ring-1 ring-border sm:block lg:-right-8">
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-dashed border-primary/30 text-center">
                <span className="text-[10px] font-bold uppercase text-muted-foreground">Est.</span>
                <span className="text-lg font-black text-primary">2008</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
