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
    <section id="pricing" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            No hidden fees. No surprise charges. Get started with our diagnostic visit.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="relative overflow-hidden border-2 border-primary">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
              Most Popular
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Emergency Diagnostic Visit</CardTitle>
              <CardDescription>Get expert diagnosis of your plumbing issue</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold text-foreground">$79</span>
                <span className="text-muted-foreground">/visit</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  <a href={PHONE_LINK} className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Book Your Diagnostic</span>
                  </a>
                </Button>
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  Call {PHONE_NUMBER} for immediate service
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          * Diagnostic fee is waived when you proceed with recommended repairs. Final repair costs provided before any work begins.
        </p>
      </div>
    </section>
  )
}
