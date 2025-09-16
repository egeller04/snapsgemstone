"use client"

import { useEffect, useRef } from "react"

/**
 * Neural Network Background Component
 *
 * Creates an animated neural network visualization using Canvas API.
 * Features dynamic node connections, particle movement, and responsive design.
 * Optimized for performance with requestAnimationFrame and efficient rendering.
 */

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

interface NeuralBackgroundProps {
  className?: string
  nodeCount?: number
  connectionDistance?: number
  animationSpeed?: number
}

export function NeuralBackground({
  className = "",
  nodeCount = 50,
  connectionDistance = 150,
  animationSpeed = 0.5,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])

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

    // Initialize nodes
    const initNodes = () => {
      const rect = canvas.getBoundingClientRect()
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * animationSpeed,
        vy: (Math.random() - 0.5) * animationSpeed,
        connections: [],
      }))
    }

    // Calculate connections between nodes
    const updateConnections = () => {
      const nodes = nodesRef.current
      nodes.forEach((node, i) => {
        node.connections = []
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < connectionDistance) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update node positions
      nodesRef.current.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= rect.width) node.vx *= -1
        if (node.y <= 0 || node.y >= rect.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(rect.width, node.x))
        node.y = Math.max(0, Math.min(rect.height, node.y))
      })

      updateConnections()

      // Draw connections
      ctx.strokeStyle = "rgba(236, 72, 153, 0.2)" // Pink accent with transparency
      ctx.lineWidth = 1
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodesRef.current[connectionIndex]
          const dx = node.x - connectedNode.x
          const dy = node.y - connectedNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = 1 - distance / connectionDistance

          ctx.globalAlpha = opacity * 0.3
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        })
      })

      // Draw nodes
      ctx.globalAlpha = 1
      nodesRef.current.forEach((node) => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4)
        gradient.addColorStop(0, "rgba(236, 72, 153, 0.8)") // Pink accent
        gradient.addColorStop(1, "rgba(236, 72, 153, 0.2)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fill()

        // Add pulsing effect for some nodes
        if (node.connections.length > 3) {
          const pulseRadius = 3 + Math.sin(Date.now() * 0.003 + node.x * 0.01) * 2
          ctx.strokeStyle = "rgba(236, 72, 153, 0.4)"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    resizeCanvas()
    initNodes()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initNodes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [nodeCount, connectionDistance, animationSpeed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
