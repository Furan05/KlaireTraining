import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Autres sections à venir */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Section Services à développer prochainement...
          </p>
        </div>
      </section>
    </main>
  )
}
