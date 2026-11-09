import { ArrowDown, ArrowRight, Droplet, Syringe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="border-b bg-muted/30">
      <div className="container mx-auto grid items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:pb-24 lg:pt-36">
        <div>
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Team SNAPS · UMD Gemstone Honors
          </p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            What if we could protect vision by protecting the retina?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            In glaucoma, damage to the cells that carry visual signals can lead to lasting vision loss.
            We’re studying neuroprotection: helping those cells survive after injury. Our experiment
            asks whether PACAP eye drops can protect them as effectively as injections in mice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/research">See what we’re testing <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#updates">Team updates <ArrowDown aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-card">
          <div className="relative grid aspect-[2/1] place-items-center overflow-hidden border-b bg-primary/5">
            <svg viewBox="0 0 400 200" className="absolute h-full w-full text-primary" fill="none" aria-hidden="true">
              <ellipse cx="200" cy="100" rx="188" ry="87" stroke="currentColor" opacity=".12" />
              <path d="M48 100Q200-47 352 100Q200 247 48 100Z" stroke="currentColor" opacity=".5" />
              <circle cx="200" cy="100" r="56" stroke="currentColor" opacity=".55" />
              <circle cx="200" cy="100" r="43" stroke="currentColor" strokeDasharray="1 4" opacity=".5" />
              <circle cx="200" cy="100" r="29" fill="currentColor" opacity=".08" />
            </svg>
            <span className="relative font-mono text-sm font-semibold tracking-widest text-primary">PACAP</span>
          </div>
          <div className="grid grid-cols-2 divide-x">
            <div className="p-5">
              <Droplet className="mb-3 size-5 text-primary" aria-hidden="true" />
              <p className="font-semibold">Eye drops</p>
              <p className="text-sm text-muted-foreground">Topical delivery</p>
            </div>
            <div className="p-5">
              <Syringe className="mb-3 size-5 text-primary" aria-hidden="true" />
              <p className="font-semibold">Injections</p>
              <p className="text-sm text-muted-foreground">Delivery into the eye</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
