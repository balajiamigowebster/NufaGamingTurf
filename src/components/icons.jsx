import React from 'react'

export const SoccerBallIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="12 7 15.5 9.5 14 13.5 10 13.5 8.5 9.5 12 7" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 7V2" />
    <path d="M15.5 9.5L20 8" />
    <path d="M14 13.5L18 17.5" />
    <path d="M10 13.5L6 17.5" />
    <path d="M8.5 9.5L4 8" />
  </svg>
)

export const CricketIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Stumps & Bails */}
    <line x1="6" y1="5" x2="18" y2="5" strokeWidth="2.5" />
    <line x1="8" y1="5" x2="8" y2="21" strokeWidth="2" />
    <line x1="12" y1="5" x2="12" y2="21" strokeWidth="2" />
    <line x1="16" y1="5" x2="16" y2="21" strokeWidth="2" />
    <line x1="5" y1="21" x2="19" y2="21" strokeWidth="1.5" strokeOpacity="0.5" />
  </svg>
)

export const VolleyballIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 0-8.66 5M12 2a10 10 0 0 1 8.66 5" />
    <path d="M12 12L3.34 7" />
    <path d="M12 12l8.66-5" />
    <path d="M12 12v10" />
    <path d="M7 17.5a10 10 0 0 0 5 4.5" />
    <path d="M17 17.5a10 10 0 0 1-5 4.5" />
    <path d="M3.5 14.5a10 10 0 0 0 5-2.5" />
    <path d="M20.5 14.5a10 10 0 0 1-5-2.5" />
  </svg>
)

export const TurfGrassIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Stylized grass blades like in the image */}
    <path d="M12 3v17" />
    <path d="M12 20c-2-5-5-10-8-12 1 6 3 10 8 12z" />
    <path d="M12 20c2-5 5-10 8-12-1 6-3 10-8 12z" />
    <line x1="2" y1="21" x2="22" y2="21" strokeWidth="2" />
  </svg>
)

export const BrightLightingIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M19.07 4.93l-1.41 1.41" />
    <path d="M20 12h2" />
    <path d="M12 6a6 6 0 0 0-6 6c0 2.22 1.21 4.16 3 5.2V18h6v-.8c1.79-1.04 3-2.98 3-5.2a6 6 0 0 0-6-6z" />
  </svg>
)

export const SafeSecureIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" strokeWidth="2" />
  </svg>
)

export const CleanFacilitiesIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M19 21V11l-6-3" />
    <path d="M9 9h1" />
    <path d="M9 13h1" />
    <path d="M9 17h1" />
    <circle cx="17" cy="6" r="2" strokeWidth="1.5" />
    <path d="M17 2v1" />
    <path d="M20 5l-1 .5" />
  </svg>
)

export const ParkingIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 11l2-5h10l2 5" />
    <rect x="3" y="11" width="18" height="8" rx="2" />
    <circle cx="7.5" cy="15.5" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="15.5" r="1.5" fill="currentColor" />
  </svg>
)

export const WhatsAppIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.4C4.55 15.16 4.14 13.56 4.14 11.91C4.14 7.37 7.84 3.67 12.05 3.67M9.07 7.49C8.91 7.49 8.71 7.55 8.54 7.74C8.37 7.93 7.88 8.39 7.88 9.33C7.88 10.27 8.56 11.18 8.66 11.31C8.76 11.44 10 13.34 11.91 14.16C13.5 14.85 13.82 14.69 14.18 14.66C14.54 14.63 15.34 14.19 15.5 13.73C15.66 13.27 15.66 12.88 15.61 12.79C15.56 12.7 15.43 12.65 15.23 12.55C15.03 12.45 14.05 11.97 13.87 11.9C13.69 11.83 13.56 11.8 13.43 12C13.3 12.2 12.92 12.65 12.81 12.78C12.7 12.91 12.59 12.93 12.39 12.83C12.19 12.73 11.55 12.52 10.79 11.84C10.2 11.31 9.8 10.66 9.68 10.46C9.56 10.26 9.67 10.15 9.77 10.05C9.86 9.96 9.97 9.83 10.07 9.71C10.17 9.59 10.2 9.5 10.27 9.36C10.34 9.22 10.3 9.1 10.25 9C10.2 8.9 9.8 7.92 9.63 7.52C9.46 7.13 9.3 7.18 9.17 7.18C9.05 7.18 8.91 7.18 8.78 7.18L9.07 7.49Z" />
  </svg>
)
