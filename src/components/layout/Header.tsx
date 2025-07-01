'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, scrollToSection } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Scroll vers une section sur la même page
      scrollToSection(href.substring(1))
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <span className="font-heading text-xl font-bold text-gray-900">
            Klaire Training
          </span>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Link href="tel:+33123456789" className="text-sm text-gray-600 hover:text-primary-600 flex items-center gap-1">
            <Phone className="h-4 w-4" />
            01 23 45 67 89
          </Link>
          <Button asChild>
            <Link href="/contact">Réserver</Link>
          </Button>
        </div>

        {/* Menu mobile button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-b border-gray-100",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
                setMobileMenuOpen(false)
              }}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="tel:+33123456789"
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-primary-600"
            >
              <Phone className="h-4 w-4" />
              01 23 45 67 89
            </Link>
            <div className="px-3 pt-2">
              <Button asChild className="w-full">
                <Link href="/contact">Réserver une séance</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
