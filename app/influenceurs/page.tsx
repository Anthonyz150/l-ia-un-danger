import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import SectionCard from '../components/SectionCard'
import Footer from '../components/Footer'

export default function InfluenceursPage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(circle at top left, rgba(249, 115, 22, 0.1), transparent 40%), #050505', 
      position: 'relative' 
    }}>
      <Navbar />
      
      <div style={{ flex: 1, paddingBottom: '60px' }}>
        <PageBanner title="IA & Influenceurs" subtitle="Immersion au cœur des influenceurs de synthèse et des flux de données automatisés." rgbColor="249, 115, 22" textColor="#fb923c" />
        <section style={{ 
          maxWidth: '1100px', margin: '0 auto', padding: '20px', 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' 
        }}>
          <SectionCard title="Les innovations" textColor="#fb923c" delay={0.1} points={['Création fluide de scripts et d’identités de marque', 'Doublage et traduction vidéo instantanés pour l’international', 'Disponibilité absolue d’avatars gérés sans contrainte humaine']} />
          <SectionCard title="Les dangers éthiques" textColor="#fb923c" delay={0.2} points={['Création et diffusion de trucages numériques réalistes', 'Diffusion de standards esthétiques inaccessibles via des filtres', 'Perte d’authenticité et altération des rapports aux abonnés']} />
        </section>
      </div>

      <Footer />
    </main>
  )
}