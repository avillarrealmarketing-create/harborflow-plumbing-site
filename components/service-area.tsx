import { MapPin, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

const serviceAreas = [
  "San Diego",
  "Chula Vista", 
  "La Mesa",
  "National City",
  "El Cajon",
  "La Jolla",
  "North Park",
  "Hillcrest",
  "Pacific Beach",
  "Ocean Beach",
]

export function ServiceArea() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/5 lg:aspect-square">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-center text-2xl font-bold text-foreground">
                Serving San Diego County
              </h3>
              <p className="mt-2 text-center text-muted-foreground">
                Fast response times throughout the greater San Diego area
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {serviceAreas.slice(0, 5).map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              We Come to You, Fast
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              No matter where you are in San Diego County, our team of expert plumbers is ready to respond to your emergency. We pride ourselves on our quick response times and comprehensive coverage.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <a href={PHONE_LINK} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Schedule Service {PHONE_NUMBER}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
