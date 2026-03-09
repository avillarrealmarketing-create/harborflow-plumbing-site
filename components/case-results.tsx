import Image from "next/image"
import { CheckCircle, Clock, DollarSign, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const caseResults = [
  {
    title: "Burst Pipe Replacement",
    location: "North Park, San Diego",
    description: "Emergency response to a major main line burst. We replaced the old failing iron pipe with a modern copper solution in under 2 hours.",
    result: "Water restored within 120 minutes",
    image: "/images/burst-pipe-case.jpg",
    highlight: "Fixed in 2h",
  },
  {
    title: "Kitchen Drain Overhaul",
    location: "Hillcrest, San Diego",
    description: "Multi-point blockage cleared using hydro-jetting technology. Restored full flow to a commercial kitchen facility during peak hours.",
    result: "Zero downtime for client",
    image: "/images/drain-case.jpg",
    highlight: "90 Min",
  },
  {
    title: "Water Heater Upgrade",
    location: "La Jolla, San Diego",
    description: "Replaced a non-functional 20-year-old tank with a high-efficiency model, providing the family with instant, reliable hot water.",
    result: "Saved $2,000 in repair costs",
    image: "/images/heater-case.jpg",
    highlight: "$2K Saved",
  },
]

export function CaseResults() {
  return (
    <section id="results" className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Trusted by San Diego Families
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground sm:text-xl">
            Our customers count on us for speed, cleanliness, and honest work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseResults.map((caseResult, idx) => (
            <Card key={caseResult.title} className="group overflow-hidden border-none shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(11,110,255,0.15)] animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="relative aspect-square overflow-hidden">
                {caseResult.image ? (
                  <Image
                    src={caseResult.image}
                    alt={caseResult.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/10">
                    <Clock className="h-12 w-12 text-primary/40" />
                  </div>
                )}
                <div className="absolute top-4 right-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                  {caseResult.highlight}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{caseResult.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 font-medium text-primary">
                  {caseResult.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{caseResult.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>{caseResult.result}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
