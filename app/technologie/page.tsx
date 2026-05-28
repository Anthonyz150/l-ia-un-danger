import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import SectionCard from '../components/SectionCard'
import Footer from '../components/Footer'

export default function TechnologiePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.12), transparent 40%), #050505', 
      position: 'relative' 
    }}>
      <Navbar />
      
      <div style={{ flex: 1, paddingBottom: '60px' }}>
        <PageBanner title="IA & Technologie" subtitle="Accélération de la recherche scientifique, de la médecine de pointe et des systèmes autonomes." rgbColor="59, 130, 246" textColor="#60a5fa" />
        <section style={{ 
          maxWidth: '1100px', margin: '0 auto', padding: '20px', 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' 
        }}>
          <SectionCard title="Les avancées" textColor="#60a5fa" delay={0.1} points={['Diagnostics médicaux d’une grande précision', 'Automatisation complète de processus lourds et industriels', 'Optimisation algorithmique des consommations d’énergie']} />
          <SectionCard title="Les risques" textColor="#60a5fa" delay={0.2} points={['Obsolescence rapide des compétences face au marché de l’emploi', 'Cyber-attaques gérées par des malwares autonomes', 'Biais algorithmiques et risques de discrimination systémique dans les modèles IA']} />
        </section>
      </div>

      <Footer />
    </main>
  )
}