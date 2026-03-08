import { ShieldAlert, Droplets, Zap, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PHONE_LINK = "tel:+16195550147"

const steps = [
    {
        icon: Droplets,
        title: "Shut Off the Water",
        description: "Locate your main water shut-off valve (usually near the street or in the garage) and turn it clockwise to stop the flow.",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Zap,
        title: "Turn Off Electricity",
        description: "If water is near electrical outlets or your breaker box, cautiously turn off the power to those areas to prevent shocks.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
    },
    {
        icon: ShieldAlert,
        title: "Contain the Leak",
        description: "Place buckets under active leaks and use towels to prevent water from spreading to other rooms or damaging floors.",
        color: "text-red-600",
        bgColor: "bg-red-50",
    },
    {
        icon: Phone,
        title: "Call HarborFlow",
        description: "Don't wait for the damage to get worse. Call us immediately for 24/7 emergency dispatch in San Diego.",
        color: "text-primary",
        bgColor: "bg-primary/5",
    },
]

export function EmergencyChecklist() {
    return (
        <section className="bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="rounded-3xl bg-slate-900 px-6 py-12 text-white shadow-2xl lg:p-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                            Plumbing Emergency? <br className="hidden sm:block" />
                            <span className="text-primary italic">Follow These 4 Steps</span>
                        </h2>
                        <p className="mt-6 text-pretty text-lg text-slate-300 sm:text-xl leading-relaxed">
                            Stay calm and act fast to minimize property damage. We're on the way.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, idx) => (
                            <div
                                key={step.title}
                                className="group relative flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-700"
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${step.bgColor} ring-4 ring-slate-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                    <step.icon className={`h-10 w-10 ${step.color}`} />
                                </div>
                                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 rounded-full bg-primary px-3 py-1 text-xs font-bold ring-4 ring-slate-900 shadow-xl">
                                    Step {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-center gap-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row">
                        <div className="flex flex-col text-center sm:text-left">
                            <p className="text-lg font-bold">Still need help?</p>
                            <p className="text-sm text-slate-400">Our technicians arrive in 45 minutes or less.</p>
                        </div>
                        <Button asChild size="lg" className="h-14 bg-destructive px-10 text-lg hover:bg-destructive/90 shadow-2xl shadow-destructive/20">
                            <a href={PHONE_LINK} className="flex items-center gap-3">
                                <Phone className="h-5 w-5 fill-current" />
                                <span className="font-bold">Dispatch Now (619) 555-0147</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
