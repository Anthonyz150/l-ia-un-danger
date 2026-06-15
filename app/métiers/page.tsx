import Navbar from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import SectionCard from '../components/SectionCard'
import Footer from '../components/Footer'

export default function MétiersPage() {
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
        <PageBanner title="IA & Métiers" subtitle="Transformation des compétences, automatisation des tâches répétitives et émergence de nouvelles professions." rgbColor="59, 130, 246" textColor="#60a5fa" />
        <section style={{ 
          maxWidth: '1100px', margin: '0 auto', padding: '20px', 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' 
        }}>
          <SectionCard title="Les avancées" textColor="#60a5fa" delay={0.1} points={['Augmentation de la productivité grâce à l’automatisation des tâches administratives', 'Création de nouveaux métiers spécialisés (ingénieurs de prompts, experts en éthique de l’IA)', 'Personnalisation de la formation continue et aide à la décision pour les managers']} />
          <SectionCard title="Les risques" textColor="#60a5fa" delay={0.2} points={['Restructuration profonde des emplois et déplacement de la main-d’œuvre', 'Dépendance accrue aux outils numériques et perte de certains savoir-faire traditionnels', 'Nécessité d’une reconversion rapide pour éviter la fracture numérique professionnelle']} />
        </section>
      </div>

      <Footer />
    </main>
  )
}