import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EmergencyChecklist } from "@/components/emergency-checklist"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TeamSection } from "@/components/team-section"
import { EmergencyMetrics } from "@/components/emergency-metrics"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CaseResults } from "@/components/case-results"
import { PricingSection } from "@/components/pricing-section"
import { ServiceArea } from "@/components/service-area"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"

// LocalBusiness Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HarborFlow Plumbing",
  "image": "/images/hero-plumber.jpg",
  "description": "24/7 emergency plumbing services in San Diego. Fast response for burst pipes, clogged drains, and water heater repairs.",
  "telephone": "(619) 555-0147",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "San Diego",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "postalCode": "92101",
    "addressCountry": "US"
  },
  "priceRange": "$79+",
  "areaServed": ["San Diego", "Chula Vista", "La Mesa", "National City", "El Cajon", "La Jolla", "North Park", "Hillcrest", "Pacific Beach", "Ocean Beach"],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HeroSection />
        <EmergencyChecklist />
        <ServicesSection />
        <WhyChooseUs />
        <TeamSection />
        <EmergencyMetrics />
        <TestimonialsSection />
        <CaseResults />
        <PricingSection />
        <ServiceArea />
        <FAQSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  )
}
