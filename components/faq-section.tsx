import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

const faqs = [
  {
    question: "What should I do if I have a burst pipe?",
    answer: "First, locate your main water shut-off valve and turn off the water supply to prevent further damage. Then call us immediately at (619) 555-0147. While you wait, try to contain the water with towels or buckets, and move valuable items away from the affected area. We typically arrive within 45 minutes for emergencies.",
  },
  {
    question: "Are you available 24/7 for emergencies in San Diego?",
    answer: "Yes! We understand that plumbing emergencies don't follow a 9-to-5 schedule. Our team is available 24 hours a day, 7 days a week, including holidays. When you call our emergency line, you'll speak with a real person who can dispatch a plumber to your location right away.",
  },
  {
    question: "How long until a plumber arrives at my home?",
    answer: "Our average response time across San Diego is 45 minutes or less. We have technicians strategically stationed throughout the county (North Park, Chula Vista, La Jolla, etc.) to ensure the fastest possible arrival when every second counts.",
  },
  {
    question: "How much does an emergency call cost?",
    answer: "Our diagnostic visit is $79, which includes a thorough inspection and professional diagnosis. This fee is waived if you proceed with our recommended repairs. We provide detailed, upfront quotes before any work begins, so you'll never be surprised by hidden fees.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Absolutely. All our repairs and installations come with a 100% satisfaction guarantee. We also offer standard warranties on parts, ranging from 1-5 years depending on the component installed. If something isn't right, we'll return to fix it at no cost.",
  },
  {
    question: "Can you help with gas line leaks?",
    answer: "Yes. Our plumbers are licensed to work on gas lines as well as water and sewer lines. If you smell gas (a rotten egg scent), leave your home immediately, call SDG&E to shut off the gas, and then call us to locate and repair the leak.",
  },
  {
    question: "How do I know if my drain needs professional cleaning?",
    answer: "Common signs include slow drainage, gurgling sounds from pipes, recurring clogs, or foul odors. If multiple drains are backed up at once, it's likely a main sewer line issue that requires professional hydro-jetting or snaking.",
  },
  {
    question: "Are you licensed to work in condo complexes?",
    answer: "Yes, we are fully licensed, bonded, and insured, which is a requirement for most HOAs and condo management companies in San Diego. We can provide proof of insurance (COI) upon request before arriving at your property.",
  },
  {
    question: "What should I do if my water heater is leaking?",
    answer: "Immediately turn off the cold water supply valve (usually located on top of the tank) and turn off the power source (breaker for electric, dial for gas). Call us right away to prevent floor damage and to determine if a repair or replacement is needed.",
  },
  {
    question: "Do you offer any discounts for seniors or military?",
    answer: "Yes! As a local San Diego business, we are proud to offer a 10% discount on labor for seniors, active-duty military, and veterans. Please mention this when you call or to your technician upon arrival.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Common <span className="text-primary italic">Questions</span>
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Find quick answers to common plumbing concerns. If you have an urgent situation not covered here, call our 24/7 dispatch line immediately.
            </p>
            <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold">Still Need Help?</h3>
              <p className="mt-3 text-sm text-slate-400">Our dispatch team is standing by to send a technician to your door.</p>
              <Button asChild size="lg" className="mt-6 w-full bg-primary h-14 text-lg hover:bg-primary/90 transition-all">
                <a href={PHONE_LINK} className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 fill-current" />
                  <span className="font-bold">{PHONE_NUMBER}</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="group rounded-2xl border border-slate-200 bg-slate-50/50 px-6 transition-all hover:bg-white hover:shadow-md">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:no-underline group-data-[state=open]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-lg leading-relaxed text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
