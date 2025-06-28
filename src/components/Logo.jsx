export function Logo() {
  return (
    <svg 
      width="120" 
      height="40" 
      viewBox="0 0 120 40"
      className="hover:scale-105 transition-transform"
      aria-label="Naeem"
    >
      {/* Gradient */}
      <defs>
        <linearGradient id="compactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" /> {/* Tailwind indigo */}
          <stop offset="100%" stopColor="#EC4899" /> {/* Tailwind pink for contrast */}
        </linearGradient>
      </defs>

      {/* Minimalist Code Symbol (</>) */}
      <path d="M10 20 L15 10 L20 20 L15 30 Z" fill="url(#compactGradient)"/>
      <path d="M30 20 L25 10 L20 20 L25 30 Z" fill="url(#compactGradient)"/>

      {/* Name with tight letter-spacing */}
      <text
        x="50"
        y="25"
        fontFamily="'Inter', sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="url(#compactGradient)"
        className="tracking-tighter"
      >
        Naeem
      </text>
    </svg>
  )
}