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
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Don't just take our word for it. Here's what San Diego homeowners say about our service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="pt-6">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-muted/50" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="text-sm font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="mt-4 text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
