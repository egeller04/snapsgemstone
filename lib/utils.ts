import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility Functions
 *
 * Collection of helper functions used throughout the application.
 * Includes styling utilities, validation helpers, and common operations.
 */

// Tailwind CSS class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Status color mapping utility
export function getStatusColor(status: string): string {
  const statusColors = {
    Active: "bg-accent text-accent-foreground",
    "In Progress": "bg-primary text-primary-foreground",
    Planning: "bg-muted text-muted-foreground",
    Completed: "bg-secondary text-secondary-foreground",
  } as const

  return statusColors[status as keyof typeof statusColors] || "bg-muted text-muted-foreground"
}

// Route active state checker
export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }
  return pathname.startsWith(href)
}

// Email validation utility
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Text truncation utility
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

// Delay utility for animations
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Format date utility
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Generate initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2)
}

// Progress percentage formatter
export function formatProgress(progress: number): string {
  return `${Math.round(progress)}%`
}

// Pluralize utility
export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) return singular
  return plural || `${singular}s`
}
