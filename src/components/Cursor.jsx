import { useEffect, useState } from 'react'

export default function Cursor() {
  const [dot, setDot] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setDot({ x: e.clientX, y: e.clientY })
      setTimeout(() => setRing({ x: e.clientX, y: e.clientY }), 90)
    }

    const over = (e) => {
      if (e.target.closest('a, button')) setHovering(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button')) setHovering(false)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" style={{ left: dot.x, top: dot.y, transform: `translate(-50%, -50%) scale(${hovering ? 0 : 1})` }} />
      <div
        className="cursor-ring"
        style={{
          left: ring.x,
          top: ring.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`,
          borderColor: hovering ? 'rgba(129,140,248,0.8)' : 'rgba(129,140,248,0.4)',
        }}
      />
    </>
  )
}
