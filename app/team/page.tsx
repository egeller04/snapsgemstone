import { Navbar } from "@/components/layout/navbar"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

/**
 * Team Page Component
 *
 * Displays information about team members, their roles, and expertise.
 * Highlights the collaborative nature of the research team.
 */
export default function TeamPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Team Content Section */}
      <div className="pt-16">
        {" "}
        {/* Offset for fixed navbar */}
        <TeamSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
