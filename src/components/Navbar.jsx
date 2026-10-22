import React, { useState } from 'react'
import { WhatsAppIcon, SoccerBallIcon } from './icons'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Bookings', href: '#book-slot' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (name) => {
    setActiveTab(name)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#070d09]/90 backdrop-blur-md border-b border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              {/* Grass blades accent behind/below soccer ball */}
              <div className="w-10 h-10 rounded-full bg-emerald-950/70 border border-[#47e246]/40 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(71,226,70,0.25)] group-hover:scale-105 transition-transform">
                <SoccerBallIcon className="w-7 h-7 text-[#47e246]" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-2xl tracking-wider text-white font-heading">
                NUFA
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#47e246] mt-0.5">
                GAMING TURF
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#47e246] font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#47e246] rounded-full shadow-[0_0_8px_#47e246]" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Book Now WhatsApp CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/917845798944?text=Hi%20NUFA%20Gaming%20Turf,%20I%20would%20like%20to%20book%20a%20slot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#47e246] hover:bg-[#3dd23c] text-black font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-200 shadow-[0_0_20px_rgba(71,226,70,0.4)] hover:shadow-[0_0_25px_rgba(71,226,70,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 text-black fill-current" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-950/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a120d] border-b border-emerald-900/40 px-5 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`block py-2 text-base font-medium transition-colors ${
                activeTab === link.name ? 'text-[#47e246] font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/917845798944?text=Hi%20NUFA%20Gaming%20Turf,%20I%20would%20like%20to%20book%20a%20slot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#47e246] hover:bg-[#3dd23c] text-black font-bold text-center py-3 rounded-full flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(71,226,70,0.4)]"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>Book Now (7845798944)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
