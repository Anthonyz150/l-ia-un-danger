'use client'

import { motion } from 'framer-motion'

interface Props { title: string; subtitle: string; rgbColor: string; textColor: string; }

export default function PageBanner({ title, subtitle, rgbColor, textColor }: Props) {
  return (
    /* Remplacement de paddingX par paddingInline pour corriger l'erreur */
    <section style={{ paddingTop: '140px', paddingBottom: '40px', textAlign: 'center', paddingInline: '20px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)',
        width: 'min(80vw, 400px)', height: '300px', background: `rgba(${rgbColor}, 0.06)`,
        borderRadius: '50%', filter: 'blur(80px)', zIndex: -1, pointerEvents: 'none'
      }} />

      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }}
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '16px', color: textColor, letterSpacing: '-0.02em' }}
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ color: '#a1a1aa', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, paddingInline: '16px' }}
      >
        {subtitle}
      </motion.p>
    </section>
  )
}