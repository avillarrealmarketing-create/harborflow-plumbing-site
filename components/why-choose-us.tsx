import { Clock, Shield, BadgeDollarSign, ThumbsUp, Headphones, Award } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "We arrive within 45 minutes on average. When you have a plumbing emergency, every minute counts.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All our plumbers are fully licensed, bonded, and insured for your peace of mind and protection.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide upfront quotes before any work begins.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on all repairs and installations.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "Plumbing emergencies don't wait, and neither do we. Call us anytime, day or night.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Our team brings over 15 years of combined experience solving San Diego's plumbing problems.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why San Diego Trusts HarborFlow
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            We've built our reputation on reliability, quality workmanship, and exceptional customer service.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
