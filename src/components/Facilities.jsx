import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Facilities({ onSelectFacility, onOpenVirtualTour }) {
  const cards = [
    {
      id: 'football',
      title: 'FOOTBALL TURF',
      subtitle: 'Full-size turf for 5-a-side, 7-a-side & corporate matches',
      image: '/football-turf.jpg',
    },
    {
      id: 'cricket',
      title: 'CRICKET TURF',
      subtitle: 'Practice nets & box cricket',
      image: '/Night Match at Turf Cricket Arena.png',
    },
    {
      id: 'volleyball',
      title: 'VOLLEYBALL COURT',
      subtitle: 'Professional setup with quality flooring',
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-[#060b08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading">
            <span className="text-white">OUR </span>
            <span className="text-[#47e246] drop-shadow-[0_0_20px_rgba(71,226,70,0.4)]">FACILITIES</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-medium">
            Everything you need for a perfect game experience
          </p>
        </div>

        {/* 4 Facilities Grid (3 sports cards + 1 wide virtual tour card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Football Turf */}
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectFacility && onSelectFacility(card)}
              className="group bg-[#0b140e] rounded-2xl overflow-hidden border border-emerald-950/80 hover:border-[#47e246]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b140e] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex items-end justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-[#47e246] transition-colors font-heading tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>

                {/* Arrow Icon Circle */}
                <div className="w-9 h-9 shrink-0 rounded-full border border-gray-700/60 group-hover:border-[#47e246] group-hover:bg-[#47e246] flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}

          {/* Card 4: Virtual Tour (Wide / Highlight Card) */}
          <div
            onClick={onOpenVirtualTour}
            className="group relative bg-[#0b140e] rounded-2xl overflow-hidden border border-emerald-950/80 hover:border-[#47e246]/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_10px_35px_rgba(71,226,70,0.2)] cursor-pointer"
          >
            {/* Background Image with Lighting */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80"
                alt="NUFA Virtual Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Play Button Overlay */}
              <div className="absolute z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 border-2 border-white/80 group-hover:border-[#47e246] group-hover:bg-[#47e246] flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_30px_rgba(71,226,70,0.8)] transition-all duration-300 transform group-hover:scale-110">
                <Play className="w-6 h-6 fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors" />
              </div>
            </div>

            {/* Virtual Tour Labels */}
            <div className="p-5 text-center">
              <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-[#47e246] transition-colors font-heading tracking-wide">
                Virtual Tour
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Take a look inside our turf
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
