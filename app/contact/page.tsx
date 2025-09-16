import { Navbar } from "@/components/layout/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

/**
 * Contact Page Component
 *
 * Provides contact information and forms for reaching out to the research team.
 * Includes collaboration opportunities and general inquiries.
 */
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Contact Content Section */}
      <div className="pt-16">
        {" "}
        {/* Offset for fixed navbar */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
