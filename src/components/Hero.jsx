import React from 'react'
import { SoccerBallIcon, CricketIcon, VolleyballIcon, WhatsAppIcon } from './icons'
import { MapPin, Play } from 'lucide-react'

export default function Hero({ onBookClick, onViewGallery }) {
  const sports = [
    { name: 'FOOTBALL', icon: SoccerBallIcon },
    { name: 'CRICKET', icon: CricketIcon },
    { name: 'VOLLEYBALL', icon: VolleyballIcon },
  ]

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#060b08]">
      {/* Stadium Floodlights & Turf Pitch Background */}
      <div className="absolute inset-0 z-0">
        {/* Night Turf Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform filter brightness-85 contrast-115"
          style={{
            backgroundImage: `url('/banner.jpg')`,
          }}
        />

        {/* Gradient overlays to match the dark aesthetic & lighting beams */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b08]/85 via-[#060b08]/40 to-[#060b08]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b08]/90 via-[#060b08]/60 to-transparent" />

        {/* Floodlight Beam Highlights */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#47e246]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[500px] h-96 bg-white/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-10 w-80 h-80 bg-emerald-400/10 blur-[110px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Main Brand Title */}
          <div className="space-y-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black tracking-tight text-white leading-none font-heading drop-shadow-xl">
              NUFA
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#47e246] leading-none font-heading drop-shadow-[0_0_35px_rgba(71,226,70,0.45)]">
              GAMING TURF
            </h2>
          </div>

          {/* Tagline with Dividers */}
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-gray-200">
            <span className="hover:text-[#47e246] transition-colors">PLAY</span>
            <span className="text-[#47e246] font-normal opacity-80">|</span>
            <span className="hover:text-[#47e246] transition-colors">PRACTICE</span>
            <span className="text-[#47e246] font-normal opacity-80">|</span>
            <span className="hover:text-[#47e246] transition-colors">ENJOY</span>
          </div>

          {/* Sports Icons Row */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
            {sports.map((sport) => {
              const Icon = sport.icon
              return (
                <div 
                  key={sport.name} 
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gray-400/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:border-[#47e246] group-hover:text-[#47e246] group-hover:shadow-[0_0_15px_rgba(71,226,70,0.35)] transition-all duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-gray-300 group-hover:text-white transition-colors">
                    {sport.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Location Tag */}
          <div className="mt-6 flex items-center gap-2 text-gray-300 text-sm sm:text-base font-medium">
            <MapPin className="w-5 h-5 text-[#47e246] shrink-0" />
            <span>Siruseri, Chennai</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* WhatsApp Book Now Button */}
            <a
              href="https://wa.me/917845798944?text=Hi%20NUFA%20Gaming%20Turf,%20I%20would%20like%20to%20book%20a%20slot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#47e246] hover:bg-[#3dd23c] text-black font-bold px-7 py-3 rounded-full flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(71,226,70,0.5)] hover:shadow-[0_0_35px_rgba(71,226,70,0.7)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-7 h-7 text-black fill-current" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[11px] font-semibold tracking-wide text-emerald-950 uppercase">
                  Book Now
                </span>
                <span className="text-base sm:lg font-black tracking-wide text-black">
                  7845798944
                </span>
              </div>
            </a>

            {/* View Gallery Button */}
            <a
              href="#gallery"
              onClick={onViewGallery}
              className="w-full sm:w-auto bg-black/40 hover:bg-black/60 border border-white/20 hover:border-[#47e246]/60 text-white font-medium px-6 py-3.5 rounded-full flex items-center justify-center gap-2.5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(71,226,70,0.2)]"
            >
              <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
              </div>
              <span className="text-sm font-semibold tracking-wide">View Gallery</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
