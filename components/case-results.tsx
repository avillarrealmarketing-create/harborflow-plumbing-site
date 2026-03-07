import { CheckCircle, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const caseResults = [
  {
    title: "Burst Pipe Emergency",
    location: "North Park",
    description: "Homeowner discovered a burst pipe in the basement at 11 PM. Water was flooding the utility room and threatening the electrical panel.",
    result: "Fixed in 2 hours, prevented estimated $5,000+ in water damage",
    icon: CheckCircle,
    highlight: "2 Hours",
  },
  {
    title: "Complete Drain Backup",
    location: "Hillcrest",
    description: "Restaurant experiencing complete drainage failure during busy Friday dinner service. All sinks and floor drains backed up.",
    result: "Cleared blockage and restored full drainage within 90 minutes",
    icon: Clock,
    highlight: "90 Min",
  },
  {
    title: "Water Heater Failure",
    location: "La Jolla",
    description: "Family of five without hot water for 2 days after their tankless water heater stopped working. Previous plumber couldn't diagnose.",
    result: "Diagnosed faulty igniter, replaced same-day. Saved $2,000 vs replacement",
    icon: DollarSign,
    highlight: "$2K Saved",
  },
]

export function CaseResults() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Success Stories
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Real emergencies, real solutions. See how we've helped San Diego residents in their time of need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseResults.map((caseResult) => (
            <Card key={caseResult.title} className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{caseResult.title}</CardTitle>
                    <CardDescription>{caseResult.location}</CardDescription>
                  </div>
                  <div className="flex h-10 items-center rounded-full bg-primary px-3 text-sm font-semibold text-primary-foreground">
                    {caseResult.highlight}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">{caseResult.description}</p>
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-green-50 p-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <p className="text-sm font-medium text-green-800">{caseResult.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
