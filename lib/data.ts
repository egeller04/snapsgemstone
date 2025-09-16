/**
 * Application Data
 *
 * Centralized data management for the Snaps research website.
 * Contains team information, research projects, and other static data.
 */

import { Network, Zap, Database, Microscope, Target, Eye, Lightbulb } from "lucide-react"
import type { ResearchProject, TeamMember, TeamStats, ResearchStats } from "@/types"
import { PROJECT_STATUS } from "./constants"

// Research Projects Data
export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: "Neural Network Optimization",
    description:
      "Developing novel algorithms to improve the efficiency and accuracy of deep neural networks for brain signal processing and pattern recognition.",
    icon: Network,
    status: PROJECT_STATUS.ACTIVE,
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
    status: PROJECT_STATUS.IN_PROGRESS,
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
    status: PROJECT_STATUS.PLANNING,
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
    status: PROJECT_STATUS.ACTIVE,
    progress: 85,
    startDate: "Nov 2023",
    tags: ["Data Management", "Open Science", "Collaboration"],
    publications: 3,
  },
]

// Team Members Data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Chen",
    role: "Team Lead & Neural Networks Specialist",
    bio: "Senior studying Computer Science with a focus on deep learning architectures and neural optimization. Leading our neural network optimization research.",
    image: "/professional-headshot-of-alex-chen--team-lead.jpg",
    expertise: ["Deep Learning", "Python", "TensorFlow"],
    achievements: ["Dean's List", "Research Award 2024"],
    publications: 3,
    social: { github: "#", linkedin: "#", email: "alex@snaps.team" },
  },
  {
    name: "Sarah Rodriguez",
    role: "Brain Connectivity Researcher",
    bio: "Neuroscience major specializing in connectomics and graph theory applications in brain research. Expert in neuroimaging data analysis.",
    image: "/professional-headshot-of-sarah-rodriguez--research.jpg",
    expertise: ["Neuroimaging", "Graph Theory", "MATLAB"],
    achievements: ["NSF Fellowship", "Best Poster Award"],
    publications: 2,
    social: { github: "#", linkedin: "#", email: "sarah@snaps.team" },
  },
  {
    name: "Marcus Johnson",
    role: "Data Analysis & Visualization",
    bio: "Mathematics and Computer Science double major with expertise in statistical analysis and data visualization for neural data interpretation.",
    image: "/professional-headshot-of-marcus-johnson--data-anal.jpg",
    expertise: ["Statistics", "R", "Data Viz"],
    achievements: ["Phi Beta Kappa", "Analytics Competition Winner"],
    publications: 1,
    social: { github: "#", linkedin: "#", email: "marcus@snaps.team" },
  },
  {
    name: "Emily Zhang",
    role: "Software Development & Integration",
    bio: "Computer Engineering student focused on building robust software systems for research applications and neural interface development.",
    image: "/professional-headshot-of-emily-zhang--software-dev.jpg",
    expertise: ["Full-Stack", "React", "Node.js"],
    achievements: ["Hackathon Winner", "Open Source Contributor"],
    publications: 1,
    social: { github: "#", linkedin: "#", email: "emily@snaps.team" },
  },
  {
    name: "David Park",
    role: "Machine Learning Engineer",
    bio: "Computer Science major specializing in machine learning algorithms and their applications in neuroscience research and brain-computer interfaces.",
    image: "/professional-headshot-of-david-park--ml-engineer.jpg",
    expertise: ["ML Algorithms", "PyTorch", "Scikit-learn"],
    achievements: ["ML Conference Speaker", "Research Grant Recipient"],
    publications: 2,
    social: { github: "#", linkedin: "#", email: "david@snaps.team" },
  },
  {
    name: "Lisa Thompson",
    role: "Research Coordinator",
    bio: "Cognitive Science major coordinating research efforts and managing project timelines and collaborations with external research institutions.",
    image: "/professional-headshot-of-lisa-thompson--coordinato.jpg",
    expertise: ["Project Management", "Research Design", "Communication"],
    achievements: ["Leadership Award", "Conference Organizer"],
    publications: 1,
    social: { github: "#", linkedin: "#", email: "lisa@snaps.team" },
  },
]

// Statistics Data
export const TEAM_STATISTICS: TeamStats = {
  members: 15,
  publications: 10,
  awards: 8,
  presentations: 5,
}

export const RESEARCH_STATISTICS: ResearchStats = {
  publications: 6,
  activeProjects: 4,
  collaborations: 12,
  awards: 3,
}

// About Section Data
export const ABOUT_SECTIONS = [
  {
    icon: Target,
    title: "Our Mission",
    content:
      "To advance the understanding of neural networks and brain connectivity through innovative research, fostering the next generation of computational neuroscientists and contributing meaningful insights to the scientific community.",
    borderColor: "border-accent/20 hover:border-accent/40",
    iconColor: "text-accent",
  },
  {
    icon: Eye,
    title: "Our Vision",
    content:
      "To become a leading undergraduate research team that bridges the gap between theoretical neuroscience and practical applications, creating solutions that benefit both academic research and real-world challenges.",
    borderColor: "border-primary/20 hover:border-primary/40",
    iconColor: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    content:
      "Innovation, collaboration, and scientific rigor guide our research. We believe in open science, interdisciplinary cooperation, and the power of undergraduate research to drive meaningful discoveries.",
    borderColor: "border-secondary/20 hover:border-secondary/40",
    iconColor: "text-secondary",
  },
]

// Contact Form Options
export const INQUIRY_TYPES = [
  { value: "general", label: "General Inquiry" },
  { value: "collaboration", label: "Research Collaboration" },
  { value: "student", label: "Student Opportunities" },
  { value: "media", label: "Media & Press" },
] as const
