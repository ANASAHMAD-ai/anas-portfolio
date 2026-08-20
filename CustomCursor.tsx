import { useEffect, useRef, useState } from 'react'

/** Custom ring/dot cursor, active on fine-pointer (desktop) devices only. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let dx = 0
    let dy = 0
    let rx = 0
    let ry = 0
    let frameId = 0

    function onMove(e: MouseEvent) {
      dot!.style.left = `${e.clientX}px`
      dot!.style.top = `${e.clientY}px`
      dx = e.clientX
      dy = e.clientY
    }

    function loop() {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      ring!.style.left = `${rx}px`
      ring!.style.top = `${ry}px`
      frameId = requestAnimationFrame(loop)
    }

    function onEnter() {
      ring!.style.width = '52px'
      ring!.style.height = '52px'
      ring!.style.borderColor = '#4cdfe8'
    }
    function onLeave() {
      ring!.style.width = '32px'
      ring!.style.height = '32px'
      ring!.style.borderColor = 'rgba(255,255,255,0.15)'
    }

    window.addEventListener('mousemove', onMove)
    frameId = requestAnimationFrame(loop)

    const interactive = document.querySelectorAll('a, button, .glass-card')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameId)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[200] w-1.5 h-1.5 rounded-full bg-cyan pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[200] w-8 h-8 rounded-full border border-white/15 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
      />
    </>
  )
}
