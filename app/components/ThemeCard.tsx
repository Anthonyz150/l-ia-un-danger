'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props { title: string; description: string; href: string; color: string; accentColor: string; }

export default function ThemeCard({ title, description, href, color, accentColor }: Props) {
  return (
    <motion.div whileHover={{ y: -6 }} style={{ height: '100%' }}>
      <Link href={href} style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        height: '100%', 
        padding: 'clamp(24px, 4vw, 40px)', 
        borderRadius: '24px', 
        background: 'rgba(15, 15, 17, 0.6)',
        border: `1px solid rgba(${color}, 0.15)`, 
        backdropFilter: 'blur(12px)',
        boxShadow: `0 0 40px rgba(${color}, 0.03)`, 
        textDecoration: 'none', 
        position: 'relative', 
        overflow: 'hidden', 
        transition: 'border-color 0.3s, box-shadow 0.3s' /* Le doublon 'display: block' a été supprimé ici */
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `rgba(${color}, 0.4)`
        e.currentTarget.style.boxShadow = `0 0 50px rgba(${color}, 0.12)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `rgba(${color}, 0.15)`
        e.currentTarget.style.boxShadow = `0 0 40px rgba(${color}, 0.03)`
      }}
      >
        <div style={{
          position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px',
          background: `rgba(${color}, 0.12)`, borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none'
        }} />

        <div>
          <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>{title}</h3>
          <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '28px' }}>{description}</p>
        </div>

        <div style={{ fontSize: '13px', fontWeight: 700, color: accentColor, display: 'flex', alignItems: 'center', gap: '8px' }}>
          Ouvrir l'univers <span>→</span>
        </div>
      </Link>
    </motion.div>
  )
}