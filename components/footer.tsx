import Link from "next/link"
import { Brain } from "lucide-react"

/**
 * Footer Component
 *
 * Enhanced footer with neural network background pattern and improved navigation.
 * Features responsive design and consistent branding elements.
 */
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <defs>
            <pattern id="footer-neural-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-accent" />
              <circle cx="60" cy="35" r="1.5" fill="currentColor" className="text-primary-foreground" />
              <circle cx="40" cy="65" r="1.5" fill="currentColor" className="text-accent" />
              <line
                x1="20"
                y1="20"
                x2="60"
                y2="35"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-primary-foreground"
              />
              <line x1="60" y1="35" x2="40" y2="65" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-neural-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-accent" /> {/* animate-pulse-glow */}
              <span className="text-2xl font-bold">SNAPS</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md text-pretty">
              Advancing neural network research and brain connectivity analysis through innovative undergraduate
              research at the University of Maryland Gemstone Program.
            </p>
            <p className="text-sm text-primary-foreground/60">© 2024 SNAPS Research Team. All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://gemstone.umd.edu" target="_blank" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gemstone Program
                </a>
              </li>
              <li>
                <a href="https://umd.edu" target="_blank" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  University of Maryland
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
