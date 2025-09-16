"use client"

import { useEffect, useRef } from "react"

/**
 * Neural Particles Component
 *
 * Creates flowing particle effects that simulate neural signals.
 * Features customizable particle behavior and responsive design.
 */

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

interface NeuralParticlesProps {
  className?: string
  particleCount?: number
  speed?: number
}

export function NeuralParticles({ className = "", particleCount = 30, speed = 1 }: NeuralParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }

    // Create particle
    const createParticle = (): Particle => {
      const rect = canvas.getBoundingClientRect()
      return {
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        life: 0,
        maxLife: 100 + Math.random() * 100,
        size: 1 + Math.random() * 2,
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, createParticle)
    }

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      particlesRef.current.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Wrap around edges
        if (particle.x < 0) particle.x = rect.width
        if (particle.x > rect.width) particle.x = 0
        if (particle.y < 0) particle.y = rect.height
        if (particle.y > rect.height) particle.y = 0

        // Reset particle if life exceeded
        if (particle.life > particle.maxLife) {
          particlesRef.current[index] = createParticle()
          return
        }

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife
        const opacity = Math.sin(lifeRatio * Math.PI) * 0.6

        // Draw particle with trail effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`) // Blue primary
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw trail
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5)
        ctx.lineTo(particle.x, particle.y)
        ctx.stroke()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    resizeCanvas()
    initParticles()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [particleCount, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
