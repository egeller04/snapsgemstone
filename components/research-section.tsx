import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, Zap, Database, Microscope, ExternalLink, Calendar } from "lucide-react"

/**
 * Research Section Component
 *
 * Showcases current research projects with enhanced visual elements and progress tracking.
 * Features interactive cards with detailed project information and status indicators.
 */
export function ResearchSection() {
  const researchProjects = [
    {
      title: "Neural Network Optimization",
      description:
        "Developing novel algorithms to improve the efficiency and accuracy of deep neural networks for brain signal processing and pattern recognition.",
      icon: Network,
      status: "Active",
      progress: 75,
      startDate: "Jan 2024",
      tags: ["Deep Learning", "Optimization", "Signal Processing"],
      publications: 2,
    },
    {
      title: "Brain Connectivity Mapping",
      description:
        "Creating comprehensive maps of neural connections using advanced imaging techniques and computational analysis to understand brain network topology.",
      icon: Microscope,
      status: "In Progress",
      progress: 60,
      startDate: "Mar 2024",
      tags: ["Neuroimaging", "Graph Theory", "Data Analysis"],
      publications: 1,
    },
    {
      title: "Real-time Neural Interfaces",
      description:
        "Building responsive brain-computer interfaces that can adapt to neural patterns in real-time applications for assistive technologies.",
      icon: Zap,
      status: "Planning",
      progress: 25,
      startDate: "Sep 2024",
      tags: ["BCI", "Real-time Systems", "Machine Learning"],
      publications: 0,
    },
    {
      title: "Neural Data Repository",
      description:
        "Establishing a comprehensive database of neural network patterns and connectivity data for research collaboration and open science initiatives.",
      icon: Database,
      status: "Active",
      progress: 85,
      startDate: "Nov 2023",
      tags: ["Data Management", "Open Science", "Collaboration"],
      publications: 3,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-accent text-accent-foreground"
      case "In Progress":
        return "bg-primary text-primary-foreground"
      case "Planning":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Recent Research Developments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our cutting-edge research projects and discoveries in neural networks and brain connectivity
          </p>
        </div>

        {/* Research Projects Grid
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {researchProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 hover:scale-102"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <project.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform animate-pulse-glow" />
                  <div className="text-right">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.startDate}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-accent font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>  */}

                {/* Project Tags
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {project.publications} Publication{project.publications !== 1 ? "s" : ""}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent hover:text-accent-foreground hover:bg-accent"
                  >
                    Learn More <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Research Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <div className="text-sm text-muted-foreground">Collaborations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
          </div>
        </div>  */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Research Vision</h3>
            <p className="text-muted-foreground text-pretty">
              SNAPS is at the beginning of an exciting journey to explore how neural pathways 
              shape brain function and contribute to disorders. While our research is just 
              getting started, our mission is to lay the foundation for discoveries that can 
              advance treatment, improve outcomes, and spark new possibilities in neuroscience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
