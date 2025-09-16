/**
 * Type Definitions
 *
 * Centralized TypeScript type definitions for the Snaps research website.
 * Includes component props, data models, and API interfaces.
 */

import type { LucideIcon } from "lucide-react"

// Base Types
export type Status = "Active" | "In Progress" | "Planning" | "Completed"
export type InquiryType = "general" | "collaboration" | "student" | "media"

// Navigation Types
export interface NavigationItem {
  href: string
  label: string
}

// Research Project Types
export interface ResearchProject {
  title: string
  description: string
  icon: LucideIcon
  status: Status
  progress: number
  startDate: string
  tags: string[]
  publications: number
}

// Team Member Types
export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  expertise: string[]
  achievements: string[]
  publications: number
  social: {
    github: string
    linkedin: string
    email: string
  }
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  inquiryType: InquiryType
}

// Neural Animation Types
export interface NeuralNode {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export interface NeuralParticle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

// Component Props Types
export interface NeuralBackgroundProps {
  className?: string
  nodeCount?: number
  connectionDistance?: number
  animationSpeed?: number
}

export interface NeuralParticlesProps {
  className?: string
  particleCount?: number
  speed?: number
}

// Statistics Types
export interface TeamStats {
  members: number
  publications: number
  awards: number
  presentations: number
}

export interface ResearchStats {
  publications: number
  activeProjects: number
  collaborations: number
  awards: number
}

// Theme Types
export type Theme = "light" | "dark" | "system"

// API Response Types (for future use)
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: unknown
}
