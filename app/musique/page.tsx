import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import SectionCard from '../components/SectionCard'
import Footer from '../components/Footer'

export default function MusiquePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(circle at top left, rgba(168, 85, 247, 0.12), transparent 40%), #050505', 
      position: 'relative' 
    }}>
      <Navbar />
      
      <div style={{ flex: 1, paddingBottom: '60px' }}>
        <PageBanner title="IA & Musique" subtitle="Du clonage vocal aux compositeurs algorithmiques, l'art audio est en pleine mutation." rgbColor="168, 85, 247" textColor="#c084fc" />
        <section style={{ 
          maxWidth: '1100px', margin: '0 auto', padding: '20px', 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' 
        }}>
          <SectionCard title="Les opportunités" textColor="#c084fc" delay={0.1} points={['Démocratisation de l’écriture de mélodies complexes', 'Outils intelligents d’aide à la production en studio', 'Restauration instantanée de pistes audio anciennes']} />
          <SectionCard title="Les dérives" textColor="#c084fc" delay={0.2} points={['Clonage vocal industriel (Deepfakes d’artistes)', 'Flou total concernant la juste rémunération des auteurs', 'Inondation des plateformes par des morceaux synthétiques']} />
        </section>
      </div>

      <Footer />
    </main>
  )
}