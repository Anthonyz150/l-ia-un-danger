'use client'

import { useEffect, useState } from 'react'

interface Particle { id: number; top: string; left: string; size: string; delay: string; duration: string; }

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 8 + 12}s`,
    }))
    setParticles(generated)
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="animate-particles"
          style={{
            position: 'absolute', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%',
            top: p.top, left: p.left, width: p.size, height: p.size,
            // @ts-ignore
            '--particle-delay': p.delay, '--particle-duration': p.duration,
          }}
        />
      ))}
    </div>
  )
}