'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Play, Star, Users, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  // État pour contrôler l'affichage des animations après l'hydratation
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Propriétés d'animation conditionnelles
  const getAnimationProps = (delay: number = 0) => {
    if (!isClient) {
      return {}
    }
    return {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay }
    }
  }

  const getScaleAnimationProps = (delay: number = 0) => {
    if (!isClient) {
      return {}
    }
    return {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay, duration: 1 }
    }
  }

  const getFloatingProps = (duration: number, delayOffset: number = 0) => {
    if (!isClient) {
      return {}
    }
    return {
      animate: { y: [0, -10, 0] },
      transition: { duration, repeat: Infinity, delay: delayOffset }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Contenu texte */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            {...getAnimationProps(0)}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              {...(isClient ? {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.2, duration: 0.5 }
              } : {})}
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Coach certifiée depuis 2020
            </motion.div>

            {/* Titre principal */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight"
                {...getAnimationProps(0.3)}
              >
                Transformez votre{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  corps et votre vie
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
                {...getAnimationProps(0.4)}
              >
                Coaching personnalisé pour atteindre vos objectifs de forme et de bien-être.
                Des résultats durables avec un accompagnement professionnel.
              </motion.p>
            </div>

            {/* Stats rapides */}
            <motion.div
              className="grid grid-cols-3 gap-8 py-6"
              {...getAnimationProps(0.5)}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600">150+</div>
                <div className="text-sm text-gray-600">Clients accompagnés</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600">5 ans</div>
                <div className="text-sm text-gray-600">Expérience</div>
              </div>
            </motion.div>

            {/* Boutons d'action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              {...getAnimationProps(0.6)}
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Réserver une séance
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="#services">
                  <Play className="w-5 h-5 mr-2" />
                  Découvrir mes services
                </Link>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 pt-4"
              {...(isClient ? {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8, duration: 0.8 }
              } : {})}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">+20 clientes</span> ce mois-ci
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            {...getScaleAnimationProps(0.4)}
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
              {/* Placeholder pour l'image de votre copine */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">
                    Photo de Klaire en action
                  </p>
                  <p className="text-sm text-gray-500">
                    Ajoutez une belle photo ici !
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-lg"
                {...getFloatingProps(3, 0)}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">En ligne</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-lg"
                {...getFloatingProps(3, 1.5)}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Avis clients</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
