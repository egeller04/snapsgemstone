import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold">SNAPS</span>
              <a href="https://gemstone.umd.edu/" className="rounded-md border bg-white px-3 py-2">
                <Image src="/gemstone-logo.png" alt="University of Maryland Gemstone Honors Program" width={160} height={36} />
              </a>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              Studying PACAP delivery and retinal cell survival at the University of Maryland’s Gemstone Honors Program.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 SNAPS Research Team. All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://gemstone.umd.edu" target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                  Gemstone Program
                </a>
              </li>
              <li>
                <a href="https://umd.edu" target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
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
