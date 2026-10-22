import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

export default function GallerySection({ onOpenLightbox }) {
  const scrollRef = useRef(null)

  const galleryImages = [
    {
      id: 1,
      title: 'Floodlit Night Pitch',
      url: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Cricket Box Pitch & Nets',
      url: 'https://images.unsplash.com/photo-1531415074868-83633dd5e457?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Volleyball & Multi-Sport Setup',
      url: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'Player Lounge & Seating',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Reception & Refreshment Area',
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      title: 'Evening Turf Match',
      url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=80',
    },
  ]

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#050906] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Mobile 'View All Photos' */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading text-white">
              GALLERY
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 font-medium">
              Real moments from NUFA Gaming Turf
            </p>
          </div>

          <a
            href="#gallery"
            onClick={() => onOpenLightbox && onOpenLightbox(galleryImages[0])}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#47e246] hover:text-[#38c538] transition-colors"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Carousel Container with Left / Right Floating Buttons */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-[#47e246] text-white hover:text-black border border-white/20 hover:border-[#47e246] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-[#47e246] text-white hover:text-black border border-white/20 hover:border-[#47e246] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => onOpenLightbox && onOpenLightbox(img)}
                className="shrink-0 w-64 sm:w-72 md:w-80 aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c1610] border border-emerald-950/70 hover:border-[#47e246]/60 transition-all duration-300 shadow-lg cursor-pointer group/item relative"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs sm:text-sm font-semibold text-white drop-shadow">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Photos Bottom Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => onOpenLightbox && onOpenLightbox(galleryImages[0])}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-700 hover:border-[#47e246] bg-black/40 hover:bg-black text-gray-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300"
          >
            <span>View More Photos</span>
            <ArrowRight className="w-4 h-4 text-[#47e246]" />
          </button>
        </div>

      </div>
    </section>
  )
}
