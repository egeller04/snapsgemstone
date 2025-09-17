/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // --- Add these for GitHub Pages ---
  output: 'export',          // generate fully static HTML
  basePath: '/snapsgemstone',     // replace 'gemstone' with your GitHub repo name
  trailingSlash: true        // avoids 404s on page refresh
}

export default nextConfig