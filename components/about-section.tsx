import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Eye, Users, Lightbulb } from "lucide-react"

/**
 * About Section Component
 *
 * Comprehensive information about the SNAPS team and Gemstone program.
 * Features mission, vision, and team values with enhanced visual elements.
 */
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About SNAPS & Gemstone</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover who we are and our commitment to advancing neural network research through collaborative innovation
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Who We Are</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              SNAPS is a dedicated team of undergraduate researchers within the prestigious Gemstone Honors Program at
              the University of Maryland. We bring together diverse perspectives and expertise to tackle complex
              challenges in neural network research and brain connectivity analysis.
            </p>
            <p className="text-muted-foreground text-pretty">
              Our interdisciplinary approach combines computer science, neuroscience, mathematics, and engineering to
              push the boundaries of what's possible in computational neuroscience research.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                <div className="text-2xl font-bold text-accent">13</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <GraduationCap className="h-24 w-24 text-primary z-10" />
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                  <circle cx="50" cy="50" r="3" fill="currentColor" className="text-accent animate-pulse-glow" />
                  <circle cx="150" cy="80" r="3" fill="currentColor" className="text-primary animate-pulse-glow" />
                  <circle cx="100" cy="150" r="3" fill="currentColor" className="text-accent animate-pulse-glow" />
                  <line
                    x1="50"
                    y1="50"
                    x2="150"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary"
                  />
                  <line
                    x1="150"
                    y1="80"
                    x2="100"
                    y2="150"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:scale-102">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-pretty">
                To advance the understanding of neural networks and brain connectivity through innovative research,
                fostering the next generation of computational neuroscientists and contributing meaningful insights to
                the scientific community.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-102">
            <CardContent className="p-6">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-pretty">
                To become a leading undergraduate research team that bridges the gap between theoretical neuroscience
                and practical applications, creating solutions that benefit both academic research and real-world
                challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:scale-102">
            <CardContent className="p-6">
              <Lightbulb className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-muted-foreground text-pretty">
                Innovation, collaboration, and scientific rigor guide our research. We believe in open science,
                interdisciplinary cooperation, and the power of undergraduate research to drive meaningful discoveries.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">The Gemstone Program</h3>
            <p className="text-muted-foreground text-pretty">
              The Gemstone Honors Program is a unique four-year research program at the University of Maryland that
              brings together exceptional students from diverse disciplines to conduct team-based research on complex,
              multifaceted problems. Our team exemplifies the program's commitment to collaborative innovation and
              interdisciplinary excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
