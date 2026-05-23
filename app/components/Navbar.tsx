'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Détection automatique de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Mode mobile sous 768px
    }
    
    handleResize() // Appel initial
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Musique', href: '/musique' },
    { name: 'Technologie', href: '/technologie' },
    { name: 'Influenceurs', href: '/influenceurs' },
  ]

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
      }}>
        {/* LOGO */}
        <Link href="/" style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textDecoration: 'none', letterSpacing: '1px' }}>
          L'IA, <span style={{ color: '#60a5fa' }}>UNE REVOLUTION ?</span>
        </Link>
        
        {/* --- VERSION ORDINATEUR --- */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '24px' }}>
            {menuLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link 
                  href={link.href} 
                  style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* --- BOUTON BURGER (Mobile uniquement) --- */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 60, position: 'relative'
            }}
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} style={{ width: '24px', height: '2px', backgroundColor: '#fff' }} />
            <motion.div animate={{ opacity: isOpen ? 0 : 1 }} style={{ width: '24px', height: '2px', backgroundColor: '#fff' }} />
            <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} style={{ width: '24px', height: '2px', backgroundColor: '#fff' }} />
          </button>
        )}
      </div>

      {/* --- MENU LATÉRAL COULISSANT --- */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            {/* Fond sombre transparent */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0, height: '100vh', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 54
              }}
            />

            {/* Le volet */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '280px', height: '100vh', background: '#09090b',
                borderLeft: '1px solid rgba(255,255,255,0.05)',
                padding: '100px 32px', display: 'flex', flexDirection: 'column', gap: '32px', zIndex: 55
              }}
            >
              {menuLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  /* La correction est juste en dessous : 'letterSpacing' remplace 'tracking' */
                  style={{ color: '#f4f4f5', textDecoration: 'none', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}