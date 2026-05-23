'use client'

import { motion } from 'framer-motion'

interface Props { title: string; points: string[]; textColor: string; delay: number; }

export default function SectionCard({ title, points, textColor, delay }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay }}
      style={{
        padding: 'clamp(20px, 4vw, 40px)', borderRadius: '24px', background: 'rgba(15, 15, 17, 0.4)',
        border: '1px solid rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)'
      }}
    >
      <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '24px', color: '#ffffff' }}>{title}</h2>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {points.map((p, i) => (
          <motion.li 
            key={i} 
            whileHover={{ x: 3 }}
            style={{ display: 'flex', gap: '12px', alignItems: 'start', color: '#e4e4e7', fontSize: '14.5px', lineHeight: 1.5 }}
          >
            <span style={{ color: textColor, fontWeight: 900, fontSize: '15px' }}>✓</span>
            <span style={{ flex: 1 }}>{p}</span> {/* flex: 1 empêche le texte long de se tordre sur mobile */}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}