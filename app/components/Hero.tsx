'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      minHeight: '80vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '120px 20px 60px', position: 'relative', zIndex: 10
    }}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '999px', fontSize: '12px', color: '#a1a1aa', marginBottom: '24px', fontWeight: 600
        }}
      >
        🤖 Une avancée technologique imprésionante
      </motion.div>

      {/* clamp() ajuste automatiquement la taille de la police selon l'écran */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '20px' }}
      >
        L’Intelligence Artificielle :<br />
        <span style={{ background: 'linear-gradient(135deg, #fff 30%, #52525b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Révolution ou Menace ?
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ color: '#a1a1aa', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '20px' }}
      >
        Explorez les avantages et les inconvénients l'IA à travers trois univers distincts représentant la société de demain.
      </motion.p>
    </section>
  )
}