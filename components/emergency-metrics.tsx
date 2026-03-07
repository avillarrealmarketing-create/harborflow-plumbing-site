const metrics = [
  {
    value: "15+",
    label: "Years in Business",
    description: "Serving San Diego",
  },
  {
    value: "10,000+",
    label: "Emergency Calls",
    description: "Successfully handled",
  },
  {
    value: "45 min",
    label: "Response Time",
    description: "Average arrival",
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    description: "Customer rating",
  },
]

export function EmergencyMetrics() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-4xl font-bold text-primary-foreground lg:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-lg font-semibold text-primary-foreground/90">
                {metric.label}
              </p>
              <p className="text-sm text-primary-foreground/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
