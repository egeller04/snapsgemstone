import { Navbar } from "@/components/layout/navbar"
import { ResearchSection } from "@/components/research-section"
import { Footer } from "@/components/footer"

/**
 * Research Page Component
 *
 * Showcases the team's research developments in neural networks and brain connectivity.
 * Features detailed information about ongoing projects and methodologies.
 */
export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Research Content Section */}
      <div className="pt-16">
        {" "}
        {/* Offset for fixed navbar */}
        <ResearchSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
