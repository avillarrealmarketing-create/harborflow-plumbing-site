import { MapPin, Phone, CheckCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(619) 555-0147"
const PHONE_LINK = "tel:+16195550147"

const serviceAreas = [
  { name: "San Diego", zip: "92101" },
  { name: "Chula Vista", zip: "91911" },
  { name: "La Mesa", zip: "91942" },
  { name: "National City", zip: "91950" },
  { name: "El Cajon", zip: "92020" },
  { name: "La Jolla", zip: "92037" },
  { name: "North Park", zip: "92104" },
  { name: "Hillcrest", zip: "92103" },
  { name: "Pacific Beach", zip: "92109" },
  { name: "Ocean Beach", zip: "92107" },
]

export function ServiceArea() {
  return (
    <section id="service-area" className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0B6EFF 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Map & Visuals */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
              <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-12 text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                  <MapPin className="h-12 w-12 text-primary animate-bounce-subtle" />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-slate-900">
                  Serving All of <span className="text-primary italic">San Diego</span> County
                </h3>
                <p className="mt-4 max-w-sm text-lg font-medium text-slate-500">
                  Our dispatch center is online 24/7. Technicians are currently active in North Park, Hillcrest, and Chula Vista.
                </p>
                <div className="mt-10 flex items-center gap-3 rounded-full bg-green-100 px-6 py-2 text-sm font-bold text-green-700 ring-1 ring-green-600/20">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600" />
                  </div>
                  Live Dispatch: Average Response 45m
                </div>
              </div>
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-8 -right-8 hidden rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-border sm:block lg:-right-12">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <Navigation className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nearest Unit</p>
                  <p className="text-lg font-black text-slate-900">3.2 Miles Away</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Fast Response, Wherever You Are
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
                Plumbing emergencies don't wait for business hours, and neither do we. Whether you're in the heart of San Diego or the coastal communities of La Jolla, we have a technician near you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {serviceAreas.map((area, idx) => (
                <div
                  key={area.name}
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-md hover:ring-primary/30 group animate-in fade-in slide-in-from-right-4 duration-500"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="font-bold text-slate-700">{area.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 group-hover:text-primary/50 transition-colors uppercase tracking-widest">{area.zip}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-16 bg-destructive px-12 text-xl hover:bg-destructive/90 shadow-xl shadow-destructive/20 transition-all hover:-translate-y-1">
                <a href={PHONE_LINK} className="flex items-center gap-3">
                  <Phone className="h-6 w-6 fill-current" />
                  <span className="font-bold">Call Dispatch {PHONE_NUMBER}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
