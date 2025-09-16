/**
 * Application Constants
 *
 * Centralized configuration and constants for the Snaps research website.
 * Includes team information, research data, and application settings.
 */

// Application Configuration
export const APP_CONFIG = {
  name: "SNAPS",
  fullName: "Snaps Gemstone Research Team",
  description: "Snaps Gemstone undergraduate research team focused on neural networks and brain connectivity",
  university: "University of Maryland",
  program: "Gemstone Honors Program",
  location: "College Park, MD 20742",
  foundedYear: 2024,
  currentYear: new Date().getFullYear(),
} as const

// Contact Information
export const CONTACT_INFO = {
  emails: {
    primary: "contact@snaps.team",
    research: "research@snaps.team",
  },
  officeHours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM EST",
    lab: "Research Lab: By Appointment",
  },
  social: {
    github: "https://github.com/snaps-research",
    twitter: "https://twitter.com/snaps_research",
    linkedin: "https://linkedin.com/company/snaps-research",
  },
} as const

// Navigation Configuration
export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const

// Research Project Status Types
export const PROJECT_STATUS = {
  ACTIVE: "Active",
  IN_PROGRESS: "In Progress",
  PLANNING: "Planning",
  COMPLETED: "Completed",
} as const

// Animation Configuration
export const ANIMATION_CONFIG = {
  neural: {
    nodeCount: 60,
    connectionDistance: 120,
    animationSpeed: 0.3,
  },
  particles: {
    count: 25,
    speed: 0.8,
  },
  transitions: {
    duration: 300,
    easing: "ease-in-out",
  },
} as const

// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: "light",
  storageKey: "snaps-theme",
  enableSystem: true,
  disableTransitionOnChange: false,
} as const

// Research Areas and Tags
export const RESEARCH_AREAS = [
  "Deep Learning",
  "Neural Networks",
  "Brain Connectivity",
  "Neuroimaging",
  "Graph Theory",
  "Machine Learning",
  "Data Analysis",
  "Signal Processing",
  "BCI",
  "Real-time Systems",
] as const

// Team Roles
export const TEAM_ROLES = {
  LEAD: "Team Lead",
  RESEARCHER: "Researcher",
  DEVELOPER: "Developer",
  COORDINATOR: "Coordinator",
  ANALYST: "Data Analyst",
  ENGINEER: "Engineer",
} as const
