import React, { useState } from 'react'
import { WhatsAppIcon } from './icons'
import { User, Phone, Calendar, Clock, MapPin, Navigation } from 'lucide-react'

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const text = `Hi NUFA Gaming Turf! I want to book a turf slot:
Name: ${formData.name || 'Customer'}
Phone: ${formData.phone || 'Not provided'}
Preferred Date: ${formData.date || 'Today/Soon'}
Preferred Time: ${formData.time || 'Evening'}`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/917845798944?text=${encoded}`, '_blank')
  }

  return (
    <section id="book-slot" className="py-16 sm:py-24 bg-[#060b08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading">
                <span className="text-white">BOOK </span>
                <span className="text-[#47e246] drop-shadow-[0_0_20px_rgba(71,226,70,0.4)]">
                  YOUR SLOT
                </span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-400 font-medium">
                Easy booking through WhatsApp
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Name */}
                <div className="relative flex items-center bg-[#0d1711] border border-gray-800 focus-within:border-[#47e246] rounded-xl px-4 py-3.5 transition-colors">
                  <User className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="relative flex items-center bg-[#0d1711] border border-gray-800 focus-within:border-[#47e246] rounded-xl px-4 py-3.5 transition-colors">
                  <Phone className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div className="relative flex items-center bg-[#0d1711] border border-gray-800 focus-within:border-[#47e246] rounded-xl px-4 py-3.5 transition-colors">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none [color-scheme:dark]"
                    placeholder="Preferred Date"
                  />
                </div>

                {/* Preferred Time */}
                <div className="relative flex items-center bg-[#0d1711] border border-gray-800 focus-within:border-[#47e246] rounded-xl px-4 py-3.5 transition-colors">
                  <Clock className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none [color-scheme:dark]"
                  >
                    <option value="" disabled className="bg-[#0d1711] text-gray-400">
                      Preferred Time
                    </option>
                    <option value="6:00 AM - 8:00 AM" className="bg-[#0d1711] text-white">6:00 AM - 8:00 AM (Early Morning)</option>
                    <option value="8:00 AM - 11:00 AM" className="bg-[#0d1711] text-white">8:00 AM - 11:00 AM (Morning)</option>
                    <option value="4:00 PM - 6:00 PM" className="bg-[#0d1711] text-white">4:00 PM - 6:00 PM (Evening)</option>
                    <option value="6:00 PM - 8:00 PM" className="bg-[#0d1711] text-white">6:00 PM - 8:00 PM (Night Floodlights)</option>
                    <option value="8:00 PM - 10:00 PM" className="bg-[#0d1711] text-white">8:00 PM - 10:00 PM (Night Match)</option>
                    <option value="10:00 PM - 11:00 PM" className="bg-[#0d1711] text-white">10:00 PM - 11:00 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#47e246] hover:bg-[#3dd23c] text-black font-extrabold text-sm sm:text-base py-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(71,226,70,0.4)] hover:shadow-[0_0_35px_rgba(71,226,70,0.6)] transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-6 h-6 text-black fill-current" />
                  <span>Send Booking Request on WhatsApp</span>
                  <WhatsAppIcon className="w-5 h-5 text-black fill-current opacity-80 hidden sm:inline" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Timings, Location & Map Pin */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            
            {/* Timings & Location Side-by-Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* OUR TIMINGS Card */}
              <div className="bg-[#0b140e] border border-emerald-950/80 rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase font-heading">
                  <div className="w-7 h-7 rounded-full border border-emerald-500/40 flex items-center justify-center text-[#47e246]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>OUR TIMINGS</span>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-xs text-gray-400 font-medium">Open Daily</p>
                  <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                    6:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              {/* LOCATION Card */}
              <div className="bg-[#0b140e] border border-emerald-950/80 rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase font-heading">
                  <MapPin className="w-5 h-5 text-[#47e246]" />
                  <span>LOCATION</span>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-xs font-semibold text-white">NUFA Gaming Turf</p>
                  <p className="text-xs text-gray-400 leading-snug">
                    Siruseri, Chennai, Tamil Nadu
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Siruseri,+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-[#47e246] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#47e246]" />
                    <span>Get Direction</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Dark Styled Map Preview with Red Location Pin Marker */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-emerald-950/90 bg-[#121c15] shadow-lg group">
              {/* Map vector simulation / roads styling */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter brightness-90 contrast-125"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-[#06110a]/80 backdrop-blur-[2px]" />

              {/* Vector Road lines overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-35 stroke-emerald-600" fill="none" strokeWidth="2">
                <line x1="0" y1="50" x2="400" y2="120" />
                <line x1="120" y1="0" x2="260" y2="300" strokeWidth="3" stroke="#47e246" />
                <line x1="50" y1="200" x2="350" y2="40" />
                <line x1="200" y1="0" x2="100" y2="300" />
                <circle cx="210" cy="115" r="45" stroke="#47e246" strokeDasharray="4 4" />
              </svg>

              {/* Glowing Red Pin Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-60"></span>
                  <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.9)] border-2 border-white">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-0.5 rounded bg-black/80 border border-white/20 text-[10px] font-bold text-white tracking-wide shadow-md whitespace-nowrap">
                  NUFA Turf, Siruseri
                </div>
              </div>

              {/* Map External Click Anchor */}
              <a
                href="https://maps.google.com/?q=Siruseri,+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open location in Google Maps"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
