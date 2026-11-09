import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/hero-section"
import { UpdatesSection } from "@/components/updates-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section className="border-b">
          <div className="container mx-auto grid gap-6 px-5 py-10 sm:px-8 md:grid-cols-[1fr_2fr] md:items-start lg:gap-12">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary">Why it matters</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight">Protect the cells that make sight possible.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Retinal ganglion cells carry information from the eye to the brain. Keeping those cells
              alive is one avenue researchers are exploring to prevent vision loss in glaucoma.
              For Team SNAPS, the first step is measuring how many cells survive after optic nerve
              injury and whether the way we deliver PACAP makes a difference.
            </p>
          </div>
        </section>
        <UpdatesSection />
      </main>
      <Footer />
    </>
  )
}
