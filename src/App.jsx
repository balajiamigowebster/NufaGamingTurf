import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesStrip from './components/FeaturesStrip'
import Facilities from './components/Facilities'
import GallerySection from './components/GallerySection'
import BookingSection from './components/BookingSection'
import MobileBottomNav from './components/MobileBottomNav'
import { VirtualTourModal, ImageLightboxModal, FacilityDetailModal } from './components/Modals'
import { SoccerBallIcon, WhatsAppIcon } from './components/icons'
import { turfData } from './data/turfData'

export default function App() {
  const [virtualTourOpen, setVirtualTourOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedFacility, setSelectedFacility] = useState(null)

  const scrollToBooking = () => {
    const el = document.getElementById('book-slot')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = () => {
    const el = document.getElementById('gallery')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#060b08] text-white flex flex-col font-sans selection:bg-[#47e246] selection:text-black pb-16 lg:pb-0">
      {/* Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero 
          onBookClick={scrollToBooking} 
          onViewGallery={scrollToGallery} 
        />

        {/* 5 Features Strip */}
        <FeaturesStrip />

        {/* Our Facilities Section */}
        <Facilities
          onSelectFacility={(fac) => setSelectedFacility(fac)}
          onOpenVirtualTour={() => setVirtualTourOpen(true)}
        />

        {/* Gallery Section */}
        <GallerySection
          onOpenLightbox={(img) => setSelectedImage(img)}
        />

        {/* Book Your Slot & Location Section */}
        <BookingSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#040705] border-t border-emerald-950/80 py-10 text-center text-gray-500 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <SoccerBallIcon className="w-5 h-5 text-[#47e246]" />
            <span className="font-bold tracking-wider text-white font-heading">NUFA GAMING TURF</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">Siruseri, Chennai</span>
          </div>
          <p className="max-w-md text-gray-400">
            Premium multi-sport turf for Football, Cricket & Volleyball. Open 6:00 AM to 11:00 PM daily.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} NUFA Gaming Turf. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fixed Mobile Bottom Navigation (Visible only on mobile devices) */}
      <MobileBottomNav onBookClick={scrollToBooking} />

      {/* Interactive Modals */}
      <VirtualTourModal
        isOpen={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
      />

      <ImageLightboxModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <FacilityDetailModal
        isOpen={!!selectedFacility}
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
    </div>
  )
}
