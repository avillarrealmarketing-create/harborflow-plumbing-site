import { Check, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

const includedFeatures = [
  "Thorough inspection of affected areas",
  "Professional diagnosis of the problem",
  "Detailed repair quote before work begins",
  "No obligation to proceed",
  "Same-day service available",
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-50 py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Upfront, <span className="text-primary italic">Transparent</span> Pricing
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
            No hidden fees. No surprise charges. We believe in honest work at an honest price.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="relative overflow-hidden border-none shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
            <div className="absolute top-0 right-0 h-32 w-32 bg-primary/10 blur-3xl" />

            <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />

            <CardHeader className="text-center pt-12 pb-8">
              <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary ring-1 ring-primary/20">
                ⭐ Most Requested
              </div>
              <CardTitle className="text-3xl font-black text-slate-900">Emergency Dispatch</CardTitle>
              <CardDescription className="text-lg font-medium">Professional diagnosis of your issue</CardDescription>
              <div className="mt-8 flex items-baseline justify-center gap-1">
                <span className="text-7xl font-black tracking-tighter text-slate-900">$79</span>
                <span className="text-xl font-bold text-slate-400">/visit</span>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-12">
              <ul className="space-y-4">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-600/20">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-lg font-medium text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-4">
                <Button asChild size="lg" className="h-20 w-full bg-destructive text-2xl hover:bg-destructive/90 shadow-xl shadow-destructive/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <a href={PHONE_LINK} className="flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6 fill-current" />
                    <span className="font-bold">Book Dispatch Now</span>
                  </a>
                </Button>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Units available in North Park & Chula Vista
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-center text-lg leading-relaxed text-slate-500 italic">
              "The diagnostic fee is **100% waived** when you proceed with our recommended repairs. You'll always get a final quote before we turn a single wrench."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
