const metrics = [
  {
    value: "15+",
    label: "Years in San Diego",
    description: "Deep local roots and local trusted experts",
  },
  {
    value: "15k+",
    label: "Emergency Repairs",
    description: "Mastering every plumbing emergency",
  },
  {
    value: "45 min",
    label: "Avg. Arrival",
    description: "The fastest response in the county",
  },
  {
    value: "98%",
    label: "Success Rate",
    description: "Consistent 5-star quality and service",
  },
]

export function EmergencyMetrics() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
      {/* Decorative background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-primary/20 blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="group text-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <p className="text-5xl font-black tracking-tighter text-white lg:text-7xl transition-transform group-hover:scale-110">
                {metric.value}
              </p>
              <div className="mt-4 inline-block h-1.5 w-12 rounded-full bg-primary" />
              <p className="mt-6 text-xl font-bold text-white uppercase tracking-widest">
                {metric.label}
              </p>
              <p className="mt-2 text-slate-400 font-medium leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
