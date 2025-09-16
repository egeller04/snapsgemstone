import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

/**
 * Home Page Component
 *
 * The main landing page for the Snaps Gemstone research team website.
 * Features the hero section with neural network theming and call-to-action buttons.
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar - Fixed across all pages */}
      <Navbar />

      {/* Hero Section - Main landing content */}
      <HeroSection />

      {/* Footer - Consistent across all pages */}
      <Footer />
    </main>
  )
}
