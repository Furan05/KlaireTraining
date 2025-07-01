import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Klaire Training - Coach Sportif Personnel',
  description: 'Coaching personnalisé pour atteindre vos objectifs de forme et de bien-être. Des résultats durables avec un accompagnement professionnel.',
  keywords: 'coach sportif, fitness, musculation, perte de poids, remise en forme, paris',
  authors: [{ name: 'Klaire Training' }],
  openGraph: {
    title: 'Klaire Training - Coach Sportif Personnel',
    description: 'Transformez votre corps et votre vie avec un coaching personnalisé',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
