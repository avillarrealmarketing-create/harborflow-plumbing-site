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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed text-muted-foreground">{service.description}</CardDescription>
                <Button asChild variant="link" className="mt-6 h-auto p-0 text-lg font-bold text-primary group-hover:gap-2 transition-all">
                  <a href={PHONE_LINK} className="flex items-center gap-1">
                    <Phone className="h-5 w-5 fill-current" />
                    <span>Get Immediate Help</span>
                  </a>
                </Button>
              </CardContent>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
