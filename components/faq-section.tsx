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
    question: "Are you available 24/7 for emergencies?",
    answer: "Yes! We understand that plumbing emergencies don't follow a 9-to-5 schedule. Our team is available 24 hours a day, 7 days a week, including holidays. When you call our emergency line, you'll speak with a real person who can dispatch a plumber to your location right away.",
  },
  {
    question: "How much does an emergency call cost?",
    answer: "Our emergency diagnostic visit is $79, which includes a thorough inspection and diagnosis of the problem. This fee is waived if you proceed with our recommended repairs. We provide detailed, upfront quotes before any work begins, so you'll never be surprised by hidden fees.",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Absolutely. All our repairs and installations come with a 100% satisfaction guarantee. If you're not completely satisfied with our work, we'll make it right at no additional cost. We also offer warranties on parts, ranging from 1-5 years depending on the component.",
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Yes, all HarborFlow plumbers are fully licensed, bonded, and insured in the state of California. Our technicians undergo rigorous training and background checks. We carry comprehensive liability insurance to protect your property and give you peace of mind.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, cash, and personal checks. For larger projects, we also offer financing options with approved credit to help manage the cost of major repairs or installations.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Have questions? We've got answers. Can't find what you're looking for? Give us a call.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-xl bg-primary/5 p-6 text-center lg:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Still have questions?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Our friendly team is here to help. Call us anytime for immediate assistance.
            </p>
            <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={PHONE_LINK} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">{PHONE_NUMBER}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
