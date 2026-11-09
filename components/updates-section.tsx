import { ChartNoAxesColumnIncreasing, Microscope, Presentation } from "lucide-react"
import Link from "next/link"

const updates = [
  {
    title: "Do Good Showcase",
    icon: Presentation,
    description: "We presented why PACAP delivery matters, how our mouse study compares eye drops with injections, and what we’ve done so far.",
  },
  {
    title: "Our first retinal images",
    icon: Microscope,
    description: "We captured preliminary images of a control retina stained for Brn3a and of control and injured retinas stained for melanopsin. These images document our early staining and imaging work.",
  },
  {
    title: "Public dataset reanalysis",
    icon: ChartNoAxesColumnIncreasing,
    description: "We looked at how often retinal ganglion cells expressed the gene for PACAP at different times after optic nerve injury.",
    href: "/research#reanalysis",
  },
]

export function UpdatesSection() {
  return (
    <section id="updates" className="container mx-auto scroll-mt-16 px-5 py-14 sm:px-8 lg:py-20">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary">Team updates</p>
      <h2 className="mb-8 text-4xl font-semibold tracking-tight">What we’ve been working on</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {updates.map(({ title, icon: Icon, description, href }) => (
          <article key={title} className="rounded-2xl border bg-card p-6">
            <Icon className="mb-5 size-6 text-primary" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="leading-relaxed text-muted-foreground">{description}</p>
            {href && <Link href={href} className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4">See the figure</Link>}
          </article>
        ))}
      </div>
    </section>
  )
}
