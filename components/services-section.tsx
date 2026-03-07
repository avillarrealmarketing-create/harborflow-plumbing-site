import { Wrench, Droplets, Flame, PenTool, ShieldCheck, Clock, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PHONE_LINK = "tel:+16195550147"

const services = [
  {
    icon: Wrench,
    title: "Burst Pipe Repair",
    description: "Immediate response to burst pipes. We locate, repair, and restore your plumbing system to prevent water damage.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to clear clogs and prevent backups in sinks, tubs, and sewer lines.",
  },
  {
    icon: Flame,
    title: "Water Heater Repair",
    description: "Expert water heater diagnosis and repair. We service all brands and types, including tankless systems.",
  },
  {
    icon: PenTool,
    title: "Pipe Installation",
    description: "Quality pipe installation and replacement using durable materials for long-lasting plumbing solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Plumbing Inspection",
    description: "Comprehensive plumbing inspections to identify issues before they become costly emergencies.",
  },
  {
    icon: Clock,
    title: "Emergency Response",
    description: "24/7 emergency plumbing services. We arrive fast and work efficiently to solve your plumbing crisis.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Plumbing Services
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From emergency repairs to routine maintenance, we handle all your plumbing needs with expertise and care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <Button asChild variant="link" className="mt-4 h-auto p-0 text-primary">
                  <a href={PHONE_LINK} className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>Get Help Now</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
