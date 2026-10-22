import React from 'react'
import { X, Play, ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './icons'

export function VirtualTourModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#09120c] border border-emerald-800/80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[#47e246] hover:bg-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video / Tour Display */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
            title="NUFA Gaming Turf Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#070e0a]">
          <div>
            <h3 className="text-xl font-bold text-white font-heading">
              NUFA Gaming Turf - 360° Virtual Experience
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Siruseri, Chennai • Floodlit night grounds & international grade synthetic turf
            </p>
          </div>
          <a
            href="https://wa.me/917845798944?text=Hi%20NUFA%20Gaming%20Turf,%20I%20watched%20the%20tour%20and%20want%20to%20book%20a%20slot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#47e246] hover:bg-[#3dd23c] text-black font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(71,226,70,0.4)] whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5 text-black" />
            <span>Book Slot</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export function ImageLightboxModal({ isOpen, image, onClose }) {
  if (!isOpen || !image) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-gray-300 hover:text-white"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="rounded-xl overflow-hidden border border-emerald-900/60 shadow-2xl max-h-[80vh]">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>
        <div className="mt-4 text-center">
          <h4 className="text-lg font-bold text-white font-heading">{image.title}</h4>
          <p className="text-xs text-[#47e246] mt-0.5">NUFA Gaming Turf, Siruseri</p>
        </div>
      </div>
    </div>
  )
}

export function FacilityDetailModal({ isOpen, facility, onClose }) {
  if (!isOpen || !facility) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-[#0a130e] border border-emerald-800/80 rounded-2xl overflow-hidden shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="aspect-video w-full rounded-xl overflow-hidden mb-5">
          <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
        </div>

        <h3 className="text-2xl font-black text-white font-heading">{facility.title}</h3>
        <p className="text-sm font-semibold text-[#47e246] mt-1">{facility.subtitle}</p>

        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
          {facility.description || 'Equipped with professional floodlights, certified shock-absorbing artificial turf, boundary nets, and clean dugouts.'}
        </p>

        <div className="mt-6 pt-4 border-t border-emerald-950 flex items-center justify-between">
          <span className="text-xs text-gray-400">Timings: 6 AM - 11 PM Daily</span>
          <a
            href={`https://wa.me/917845798944?text=Hi%20NUFA%20Gaming%20Turf,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(facility.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#47e246] hover:bg-[#3dd23c] text-black font-bold px-5 py-2 rounded-full flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(71,226,70,0.4)]"
          >
            <WhatsAppIcon className="w-4 h-4 text-black" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  )
}
