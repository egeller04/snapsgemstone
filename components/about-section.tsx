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
            Meet the undergraduate researchers studying how the retina responds to optic nerve injury.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Who We Are</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              SNAPS is an undergraduate research team in the Gemstone Honors Program at the University of Maryland.
              We study how the visual system responds to injury and what might help retinal ganglion cells survive.
            </p>
            <p className="text-muted-foreground text-pretty">
              Our PACAP study combines public data analysis, retinal imaging, and a mouse model of optic nerve injury.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-accent/20">
                <div className="text-2xl font-bold text-accent">13</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">3rd</div>
                <div className="text-sm text-muted-foreground">Year in Gemstone</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/team.jpg"
                alt="Team SNAPS group photo"
                className="object-cover w-full h-full"
              />
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
                To explore neural plasticity and axon regeneration in the visual system, advancing understanding of glaucoma and vision restoration while generating insights that drive innovation in neuroscience research.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-102">
            <CardContent className="p-6">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-pretty">
                To be a pioneering undergraduate research team uncovering the mechanisms of neural plasticity and axon regeneration in the visual system, contributing to advances in glaucoma treatment and vision restoration.
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
