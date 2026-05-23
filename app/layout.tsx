import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA : Révolution ou Danger ?',
  description: 'Projet scolaire interactif sur l’intelligence artificielle.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="background-grid" />
        {children}
      </body>
    </html>
  )
}