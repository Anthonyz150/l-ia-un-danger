'use client'

import { motion } from 'framer-motion'
import FloatingParticles from './components/FloatingParticles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThemeCard from './components/ThemeCard'
import Footer from './components/Footer'

const THEMES = [
  { id: 'm', title: 'IA & Musique', desc: 'L’IA compose désormais des chansons, clone des voix et transforme totalement l’industrie de l’audio.', href: '/musique', color: '168, 85, 247', accent: '#c084fc' },
  { id: 't', title: 'IA & Technologie', desc: 'Robots autonomes, médecine de pointe et cyber-sécurité… l’IA redéfinit l’infrastructure globale.', href: '/technologie', color: '59, 130, 246', accent: '#60a5fa' },
  { id: 'i', title: 'IA & Influenceurs', desc: 'Les réseaux sociaux voient l’émergence d’avatars virtuels autonomes et de contenus entièrement automatisés.', href: '/influenceurs', color: '249, 115, 22', accent: '#fb923c' }
]

export default function HomePage() {
  return (
    /* L'astuce magique est ici : display flex + flex direction column + minHeight 100vh */
    <main style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(circle at top left, rgba(168,85,247,0.1), radial-gradient(circle at top right, rgba(59,130,246,0.1), transparent 40%), #050505'
    }}>
      <FloatingParticles />
      <Navbar />
      
      {/* On enveloppe le contenu dans une div qui pousse le footer vers le bas via flex: 1 */}
      <div style={{ flex: 1 }}>
        <Hero />
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px' }}
        >
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
            gap: '24px' 
          }}>
            {THEMES.map((t) => (
              <ThemeCard key={t.id} title={t.title} description={t.desc} href={t.href} color={t.color} accentColor={t.accent} />
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}