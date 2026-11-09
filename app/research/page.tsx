import { Navbar } from "@/components/layout/navbar"
import { ResearchSection } from "@/components/research-section"
import { Footer } from "@/components/footer"

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ResearchSection />
      </main>
      <Footer />
    </>
  )
}
