import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/** Animated neural-network visual used in the hero. Pauses motion for prefers-reduced-motion. */
export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nodes: Node[] = []
    let width = 0
    let height = 0
    let dpr = 1
    let frameId = 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function initNodes() {
      const count = Math.min(Math.max(18, Math.floor((width * height) / 9000)), 42)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 1.2,
      }))
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = wrap!.clientWidth
      height = wrap!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      initNodes()
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      const maxDist = Math.min(width, height) * 0.32

      if (!reduceMotion) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35
            const grad = ctx!.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, `rgba(76,223,232,${alpha})`)
            grad.addColorStop(1, `rgba(139,124,255,${alpha})`)
            ctx!.strokeStyle = grad
            ctx!.lineWidth = 0.7
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(234,240,255,0.85)'
        ctx!.fill()
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(139,124,255,0.10)'
        ctx!.fill()
      }

      frameId = requestAnimationFrame(draw)
    }

    resize()
    frameId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative h-[300px] md:h-[440px] -order-1 md:order-none">
      <canvas ref={canvasRef} className="block w-full h-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 [background:radial-gradient(circle_at_50%_40%,rgba(139,124,255,0.08),transparent_70%)]" />
    </div>
  )
}
