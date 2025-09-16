import { Button } from "@/components/ui/button"
import { ArrowRight, Brain } from "lucide-react"
import Link from "next/link"
import { NeuralBackground } from "./neural-background"
import { NeuralParticles } from "./neural-particles"

/**
 * Hero Section Component
 *
 * Main landing section featuring neural network theming and call-to-action buttons.
 * Includes animated background patterns and responsive design for all screen sizes.
 */
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <NeuralBackground nodeCount={60} connectionDistance={120} animationSpeed={0.3} />
      </div>

      <div className="absolute inset-0 opacity-20">
        <NeuralParticles particleCount={25} speed={0.8} />
      </div>

      {/* Static Neural Network Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-accent animate-pulse-glow" />
              <circle cx="80" cy="40" r="2" fill="currentColor" className="text-primary animate-pulse-glow" />
              <circle cx="50" cy="80" r="2" fill="currentColor" className="text-accent animate-pulse-glow" />
              <line x1="20" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="80" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="50" y1="80" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Brain Icon with Animation */}
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-accent animate-pulse-glow" /> {/* animate-pulse-glow */}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="text-accent">S</span>ynaptic <span className="text-accent">N</span>etwork <span className="text-accent">A</span>nalysis and <span className="text-accent">P</span>athway <span className="text-accent">S</span>cience
          </h1>

          {/* Subtitle Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            We are SNAPS, an undergraduate research team exploring the frontiers of brain connectivity and neural
            networks to unlock new possibilities in computational neuroscience.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent text-primary-foreground transition-all duration-300 hover:scale-102"
              asChild
            >
              <Link href="/about" className="flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-transparent hover:text-accent bg-transparent transition-all duration-300 hover:scale-102 dark:border-accent"
              asChild
            >
              <Link href="/research" className="flex items-center">
                Our Research <Brain className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
