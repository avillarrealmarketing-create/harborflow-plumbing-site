import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Smith",
    location: "Chula Vista, CA",
    text: "Our pipe burst at 2 AM and HarborFlow was at our door within 30 minutes. They saved us from thousands in water damage. Absolutely professional service!",
    rating: 5,
    initials: "JS",
  },
  {
    name: "Maria Garcia",
    location: "La Mesa, CA",
    text: "Finally found a plumber I can trust! Fair pricing, honest assessments, and quality work. They fixed our water heater issue quickly and explained everything.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Robert Chen",
    location: "National City, CA",
    text: "Called them for a clogged drain and they came same day. The technician was courteous, cleaned up after himself, and the price was exactly what they quoted.",
    rating: 5,
    initials: "RC",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
            }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-ripple opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Trusted by San Diego Families
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground sm:text-xl">
            Our customers count on us for speed, cleanliness, and honest work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.name}
              className="relative border-none shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(11,110,255,0.1)] animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <CardContent className="pt-6">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-md">
                    <span>{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="mt-4 italic leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
