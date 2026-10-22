import React, { useState } from 'react'
import { Home, Layers, Image as ImageIcon, MapPin, PhoneCall } from 'lucide-react'
import { WhatsAppIcon } from './icons'

export default function MobileBottomNav({ onBookClick }) {
  const [activeTab, setActiveTab] = useState('Home')

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Facilities', href: '#facilities', icon: Layers },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
    { name: 'Location', href: '#book-slot', icon: MapPin },
    { 
      name: 'Book Now', 
      href: 'https://wa.me/917845798944?text=Hi%20NUFA%20Gaming%20Turf,%20I%20would%20like%20to%20book%20a%20slot', 
      icon: WhatsAppIcon, 
      isExternal: true 
    },
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070e0a]/95 backdrop-blur-lg border-t border-emerald-950/80 px-2 py-2">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 py-1 px-3 text-gray-400 hover:text-[#47e246] transition-colors"
              >
                <Icon className="w-5 h-5 text-[#47e246]" />
                <span className="text-[10px] font-semibold tracking-tight text-[#47e246]">
                  {item.name}
                </span>
              </a>
            )
          }

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`flex flex-col items-center gap-1 py-1 px-3 transition-colors ${
                isActive ? 'text-[#47e246]' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold tracking-tight">
                {item.name}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
