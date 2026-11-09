import Image from "next/image"
import Link from "next/link"

const studySteps = [
  {
    title: "Model optic nerve injury",
    description: "We use optic nerve crush in mice to study how retinal ganglion cells respond to injury relevant to glaucoma.",
  },
  {
    title: "Compare delivery routes",
    description: "We compare injured eyes given PACAP drops, injured eyes given PACAP injections, and an injured baseline group. Uninjured fellow eyes provide a reference.",
  },
  {
    title: "Image and count retinal cells",
    description: "We stain and image dissected retinas to assess cell survival, with a focus on intrinsically photosensitive retinal ganglion cells (ipRGCs).",
  },
]

export function ResearchSection() {
  return (
    <section className="container mx-auto px-5 py-14 sm:px-8 lg:py-20">
      <header className="max-w-3xl">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">Our research</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          PACAP eye drops vs. injections
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Retinal ganglion cells carry visual signals from the eye to the brain. We are testing whether
          pituitary adenylate cyclase-activating polypeptide (PACAP), a naturally occurring peptide,
          helps those cells survive after injury and whether topical drops can match delivery by injection.
        </p>
      </header>

      <ol className="my-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
        {studySteps.map((step, index) => (
          <li key={step.title} className="bg-card p-6">
            <p className="mb-3 font-mono text-xs font-semibold text-primary">0{index + 1}</p>
            <h2 className="mb-2 text-lg font-semibold">{step.title}</h2>
            <p className="leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>

      <div id="reanalysis" className="grid scroll-mt-24 items-center gap-8 rounded-3xl border bg-muted/30 p-5 sm:p-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary">Public data reanalysis</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight">What changes after injury?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            In our reanalysis of public retinal data, the fraction of pooled retinal ganglion cells
            with detectable <i>Adcyap1</i> RNA rose from 4.7% in the sham group to 22.2% at 24 hours
            after optic nerve crush. <i>Adcyap1</i> is the gene that encodes PACAP.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            These descriptive proportions summarize pooled cells. The mouse study separately tests whether
            administering PACAP affects cell survival.
          </p>
          <a className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
            href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE241268">
            Source dataset · Qian et al. (GSE241268)
          </a>
        </div>
        <figure>
          <a href="/research/pacap_injury_showcase.svg" aria-label="Open full-size PACAP reanalysis figure">
            <Image
              src="/research/pacap_injury_showcase.svg"
              alt="Detectable Adcyap1 RNA in pooled retinal ganglion cells. Sham 4.7%, 12 hours 13.6%, 24 hours 22.2%, and 48 hours 18.9%."
              width={960}
              height={576}
              className="h-auto w-full rounded-xl bg-white"
            />
          </a>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Team SNAPS reanalysis. Open the figure for pooled cell counts.
          </figcaption>
        </figure>
      </div>
      <Link href="/#updates" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4">
        See team updates
      </Link>
    </section>
  )
}
