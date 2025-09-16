import { Navbar } from "@/components/layout/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

/**
 * About Page Component
 *
 * Dedicated page for information about the Snaps team and Gemstone program.
 * Provides detailed background on the research team's mission and objectives.
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* About Content Section */}
      <div className="pt-16">
        {" "}
        {/* Offset for fixed navbar */}
        <AboutSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
