# HarborFlow Plumbing Landing Page - Implementation Kickstart

## Project Overview

Build a high-conversion emergency plumbing landing page for **HarborFlow Plumbing** in San Diego. The site focuses exclusively on phone-based calls-to-action with static content, no forms, and minimal animations.

| Attribute | Value |
|-----------|-------|
| **Target** | Lighthouse 90+ |
| **Framework** | Next.js 16 |
| **Styling** | Tailwind CSS v4.2 |
| **Components** | shadcn/ui |
| **Icons** | Lucide React |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-blue` | `#0B6EFF` | Brand color, secondary CTAs |
| `--accent-red` | `#E53935` | Emergency CTAs, urgent actions |
| `--dark-text` | `#1F2937` | Body text, headings |
| `--light-bg` | `#F8FAFC` | Section backgrounds |
| `--white` | `#FFFFFF` | Cards, hero background |
| `--neutral-border` | `#E5E7EB` | Dividers, borders |

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` (h1-h3), `font-semibold` (h4-h6)
- **Body**: `font-normal`
- **CTA Buttons**: `font-semibold`

### Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | <640px | 1 |
| Tablet | 768px (md) | 2 |
| Desktop | 1024px (lg) | 3 |

---

## Directory Structure

```
app/
├── layout.tsx          # Update with SEO metadata & fonts
├── page.tsx            # Main landing page
├── globals.css         # Update color tokens
public/
├── images/
│   └── hero-plumber.jpg  # Stock image placeholder
components/
├── header.tsx          # Sticky navigation with mobile hamburger
├── mobile-sticky-bar.tsx # Emergency CTA bar for mobile <768px
├── hero-section.tsx    
├── services-section.tsx
├── why-choose-us.tsx   # Trust signals
├── emergency-metrics.tsx
├── testimonials-section.tsx
├── case-results.tsx    
├── pricing-section.tsx
├── service-area.tsx    
├── faq-section.tsx     # Accordion component
├── footer.tsx
```

---

## Component Specifications

### 1. Header (`components/header.tsx`)

**Features:**
- Sticky positioning on all screen sizes
- Logo + brand name: "HarborFlow Plumbing"
- Desktop: Horizontal navigation (Home, Services, Why Choose Us, FAQ, Contact)
- Mobile: Hamburger menu using shadcn Sheet component
- "Call Now" CTA button (red accent) - always visible as `tel:` link

**Responsive Behavior:**
- Desktop: Full nav visible, logo left, CTA right
- Mobile: Hamburger menu right, CTA visible, nav collapses

---

### 2. Hero Section (`components/hero-section.tsx`)

**Content:**
- Headline: "Emergency Plumbing Services in San Diego"
- Subheading: "Available 24/7 for all your plumbing emergencies"
- Hero Image: Professional plumber (4:3 aspect ratio)
- CTA Button: Red accent, "Call Now (619) 555-0147"
- Trust badge: "Trusted by 5,000+ San Diego families"

**Layout:**
- Desktop: Two columns (text left, image right)
- Mobile: Stacked (text, then image)

---

### 3. Services Section (`components/services-section.tsx`)

**6 Service Cards:**

| Service | Icon |
|---------|------|
| Burst Pipe Repair | Wrench |
| Drain Cleaning | Droplet |
| Water Heater Repair | Flame |
| Pipe Installation | Pipette |
| Plumbing Inspection | ShieldCheck |
| Emergency Response | Clock |

**Layout:** 1/2/3 columns (mobile/tablet/desktop)

---

### 4. Why Choose Us (`components/why-choose-us.tsx`)

**3 Value Props:**
1. Fast Response (within 1 hour)
2. Licensed & Insured
3. Transparent Pricing (no hidden fees)

**Layout:** 1/2/3 columns (mobile/tablet/desktop)

---

### 5. Emergency Metrics (`components/emergency-metrics.tsx`)

| Metric | Value |
|--------|-------|
| Years in Business | 15+ |
| Emergency Calls | 10,000+ |
| Avg Response Time | 45 mins |
| Satisfaction Rate | 98% |

**Layout:** 2 columns (mobile), 4 columns (desktop)

---

### 6. Testimonials (`components/testimonials-section.tsx`)

**3 Hardcoded Testimonials:**

```typescript
const testimonials = [
  {
    name: "John Smith",
    location: "Chula Vista, CA",
    text: "Quick response and fixed our burst pipe in under an hour...",
    rating: 5
  },
  // ... 2 more
]
```

**Layout:** 1/2/3 columns (mobile/tablet/desktop)

---

### 7. Case Results (`components/case-results.tsx`)

**3 Repair Examples:**

```typescript
const caseResults = [
  {
    title: "Burst Pipe Emergency - North Park",
    description: "Replaced 40 ft of damaged pipe...",
    result: "Fixed in 2 hours, prevented $5K+ water damage"
  },
  // ... 2 more
]
```

---

### 8. Pricing (`components/pricing-section.tsx`)

**Single Pricing Card:**
- Service: Emergency Diagnostic Visit
- Price: **$79**
- Description: "Includes inspection, diagnosis, and repair quote"
- CTA: "Book Your Diagnostic" (`tel:` link)

---

### 9. Service Area (`components/service-area.tsx`)

**Coverage:**
- San Diego
- Chula Vista
- La Mesa
- National City
- El Cajon

**Layout:** Map placeholder (styled div) + city list

---

### 10. FAQ (`components/faq-section.tsx`)

**Using shadcn Accordion component**

**Questions:**
1. "What should I do if I have a burst pipe?"
2. "Are you available 24/7?"
3. "How much does an emergency call cost?"
4. "Do you guarantee your work?"
5. "What areas do you serve?"

---

### 11. Mobile Sticky Bar (`components/mobile-sticky-bar.tsx`)

**Features:**
- Fixed to bottom of screen
- Visible only on screens < 768px
- Content: "Emergency Plumbing? Call Now (619) 555-0147"
- Red accent background, white text
- Always visible, no close button

---

### 12. Footer (`components/footer.tsx`)

**Content:**
- Company: HarborFlow Plumbing, San Diego, CA
- Quick links
- Phone number (large, clickable)
- Copyright

**Design:** Dark background (#1F2937), white text

---

## SEO & Metadata

### Page Metadata

```typescript
export const metadata: Metadata = {
  title: "Emergency Plumbing San Diego | HarborFlow Plumbing & Drain",
  description: "24/7 emergency plumbing services in San Diego. Fast response for burst pipes, clogged drains, and water heater repairs. Call now for immediate service.",
  openGraph: {
    title: "Emergency Plumbing San Diego | HarborFlow Plumbing",
    description: "24/7 emergency plumbing services in San Diego...",
    type: "website",
  }
}
```

### LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HarborFlow Plumbing",
  "telephone": "(619) 555-0147",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "postalCode": "92101",
    "addressCountry": "US"
  },
  "priceRange": "$79+",
  "areaServed": ["San Diego", "Chula Vista", "La Mesa", "National City", "El Cajon"]
}
```

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Update `app/layout.tsx` with metadata and fonts
- [ ] Update `app/globals.css` with color tokens
- [ ] Create `/public/images` folder

### Phase 2: Core Components
- [ ] Create `header.tsx`
- [ ] Create `hero-section.tsx`
- [ ] Create `footer.tsx`
- [ ] Create main `app/page.tsx`

### Phase 3: Content Sections
- [ ] Create `services-section.tsx`
- [ ] Create `why-choose-us.tsx`
- [ ] Create `emergency-metrics.tsx`
- [ ] Create `testimonials-section.tsx`
- [ ] Create `case-results.tsx`

### Phase 4: Bottom Sections
- [ ] Create `pricing-section.tsx`
- [ ] Create `service-area.tsx`
- [ ] Create `faq-section.tsx`

### Phase 5: Mobile & Polish
- [ ] Create `mobile-sticky-bar.tsx`
- [ ] Test responsive design
- [ ] Accessibility audit
- [ ] Lighthouse optimization

---

## Key Constants

```typescript
// Phone number used throughout the site
const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

// Company info
const COMPANY_NAME = "HarborFlow Plumbing"
const COMPANY_LOCATION = "San Diego, CA"
```

---

## Success Criteria

- [ ] All `tel:` links functional
- [ ] Responsive at all breakpoints
- [ ] Header sticky on all devices
- [ ] Mobile sticky bar visible only < 768px
- [ ] FAQ accordion works smoothly
- [ ] Lighthouse score >= 90
- [ ] WCAG AA compliance
- [ ] Page loads < 2s on 4G

---

## Files Summary

### Create New
| File | Description |
|------|-------------|
| `app/page.tsx` | Main landing page |
| `components/header.tsx` | Sticky navigation |
| `components/hero-section.tsx` | Hero with CTA |
| `components/services-section.tsx` | 6 service cards |
| `components/why-choose-us.tsx` | Trust signals |
| `components/emergency-metrics.tsx` | KPI stats |
| `components/testimonials-section.tsx` | Customer reviews |
| `components/case-results.tsx` | Repair examples |
| `components/pricing-section.tsx` | Pricing card |
| `components/service-area.tsx` | Coverage map |
| `components/faq-section.tsx` | FAQ accordion |
| `components/mobile-sticky-bar.tsx` | Mobile CTA bar |
| `components/footer.tsx` | Site footer |

### Modify Existing
| File | Changes |
|------|---------|
| `app/layout.tsx` | Add SEO metadata |
| `app/globals.css` | Add color tokens |

---

## Notes

- **Phone-First**: Every section includes a `tel:` link to (619) 555-0147
- **Static Content**: All data is hardcoded (no database)
- **No Animations**: CSS transitions only for performance
- **Accessibility First**: Built with WCAG AA from the start
- **Mobile-First**: Design starts mobile, scales up
