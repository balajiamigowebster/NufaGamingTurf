import React from 'react'
import { TurfGrassIcon, BrightLightingIcon, SafeSecureIcon, CleanFacilitiesIcon, ParkingIcon } from './icons'

export default function FeaturesStrip() {
  const features = [
    { title: 'Premium Turf', icon: TurfGrassIcon },
    { title: 'Bright Lighting', icon: BrightLightingIcon },
    { title: 'Safe & Secure', icon: SafeSecureIcon },
    { title: 'Clean Facilities', icon: CleanFacilitiesIcon },
    { title: 'Parking Available', icon: ParkingIcon },
  ]

  return (
    <section className="bg-[#050906] border-y border-emerald-950/60 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 items-center justify-items-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center gap-2.5 group cursor-default transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="text-[#47e246] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(71,226,70,0.5)]">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 group-hover:text-white">
                  {feature.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
