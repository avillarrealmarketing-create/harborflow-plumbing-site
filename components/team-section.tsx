import Image from "next/image"
import { Award, CheckCircle, Star } from "lucide-react"

const team = [
    {
        name: "Mark Henderson",
        role: "Master Plumber",
        experience: "18+ Years",
        image: "/images/team-1.png",
        specialty: "Pipe Replacement & Repair",
    },
    {
        name: "Sarah Miller",
        role: "Lead Technician",
        experience: "12+ Years",
        image: "/images/team-2.png",
        specialty: "Water Heaters & Gas Lines",
    },
]

export function TeamSection() {
    return (
        <section id="team" className="bg-card py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            Meet the Experts Behind <span className="text-primary italic">HarborFlow</span>
                        </h2>
                        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                            We aren't just technicians—we're your neighbors. Our team consists of highly trained, background-checked professionals who treat your home with the respect it deserves.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold">Master Licensed & Bonded</p>
                                    <p className="text-sm text-muted-foreground">Highest level of plumbing certification in California</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold">Background Checked</p>
                                    <p className="text-sm text-muted-foreground">Every team member passes rigorous safety screening</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                        {team.map((member, idx) => (
                            <div
                                key={member.name}
                                className="group relative animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both"
                                style={{ animationDelay: `${idx * 200}ms` }}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="text-xl font-bold text-white">{member.name}</p>
                                        <p className="text-sm font-medium text-primary-foreground/90">{member.role}</p>
                                        <div className="mt-2 flex items-center gap-2 border-t border-white/20 pt-2 text-xs font-semibold text-white/70 uppercase tracking-widest">
                                            <Star className="h-3 w-3 fill-primary text-primary" />
                                            {member.experience} Experience
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
