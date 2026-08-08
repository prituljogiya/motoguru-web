/** Digimedia-style soft illustrated background decorations (Motoguru palette). */
export function BackgroundDecor({
  variant = "page",
}: {
  variant?: "page" | "hero" | "section";
}) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#fff9f2_0%,#f7f3ee_38%,#f1ebe4_100%)]" />

        {/* Left Digimedia-style decorative panel */}
        <svg
          className="absolute left-0 top-0 h-full w-[200px] opacity-90 md:w-[280px]"
          viewBox="0 0 280 800"
          preserveAspectRatio="xMinYMin slice"
          fill="none"
        >
          <path
            d="M-40 0c90 70 130 140 70 230s-40 150 50 230 30 160-20 250 70 140 120 200"
            stroke="#f99b27"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          <path
            d="M10 40c100 90 60 170 0 250s40 170 90 250-10 150-50 220"
            stroke="#2d0000"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <path
            d="M55 0c70 110 20 200-30 280s60 180 100 280"
            stroke="#f99b27"
            strokeOpacity="0.18"
            strokeWidth="1.25"
            strokeDasharray="5 10"
          />
          <circle cx="72" cy="150" r="7" fill="#f99b27" fillOpacity="0.45" />
          <circle cx="42" cy="310" r="5" fill="#d97e0f" fillOpacity="0.4" />
          <circle cx="88" cy="470" r="8" fill="#f99b27" fillOpacity="0.28" />
          <circle cx="36" cy="610" r="4" fill="#2d0000" fillOpacity="0.12" />
          <rect
            x="28"
            y="200"
            width="18"
            height="18"
            rx="4"
            transform="rotate(18 37 209)"
            fill="#f99b27"
            fillOpacity="0.22"
          />
        </svg>

        {/* Right soft illustration cluster */}
        <svg
          className="decor-float absolute -right-20 -top-6 h-[460px] w-[460px] md:-right-4 md:h-[580px] md:w-[580px]"
          viewBox="0 0 580 580"
          fill="none"
        >
          <defs>
            <linearGradient id="mgBlobA" x1="60" y1="40" x2="500" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f99b27" stopOpacity="0.28" />
              <stop offset="1" stopColor="#ffc877" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="mgBlobB" x1="180" y1="80" x2="520" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffe0b5" stopOpacity="0.95" />
              <stop offset="1" stopColor="#f99b27" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="mgBlobC" x1="300" y1="300" x2="520" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f99b27" stopOpacity="0.18" />
              <stop offset="1" stopColor="#f99b27" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <ellipse cx="340" cy="280" rx="230" ry="210" fill="url(#mgBlobA)" />
          <path
            d="M170 320c50-140 190-190 290-130s120 190 40 250-230 40-280-50c-22-40-50-40-50-70Z"
            fill="url(#mgBlobB)"
          />
          <circle cx="430" cy="400" r="90" fill="url(#mgBlobC)" />
          <circle cx="390" cy="130" r="5" fill="#f99b27" opacity="0.65" />
          <circle cx="440" cy="165" r="3.5" fill="#d97e0f" opacity="0.55" />
          <circle cx="475" cy="210" r="3" fill="#f99b27" opacity="0.45" />
          <circle cx="490" cy="265" r="4" fill="#2d0000" opacity="0.12" />
          <circle cx="480" cy="320" r="3.5" fill="#f99b27" opacity="0.4" />
          <circle cx="450" cy="365" r="2.5" fill="#d97e0f" opacity="0.35" />
          <rect
            x="470"
            y="100"
            width="22"
            height="22"
            rx="5"
            transform="rotate(24 481 111)"
            fill="#fff"
            fillOpacity="0.7"
            stroke="#f99b27"
            strokeOpacity="0.45"
          />
        </svg>

        {/* Floating mid accents */}
        <span className="decor-float-slow absolute left-[18%] top-[16%] hidden h-3.5 w-3.5 rotate-12 rounded-[4px] bg-accent/55 md:block" />
        <span className="decor-float absolute bottom-[18%] left-[6%] hidden h-12 w-12 rounded-2xl border border-accent/25 bg-white/60 shadow-[0_10px_28px_rgba(45,0,0,0.06)] md:block" />
        <span className="decor-float-slow absolute right-[46%] top-[10%] h-3 w-3 rounded-full bg-accent-dark/45" />
        <span className="decor-float absolute bottom-[28%] right-[48%] hidden h-2.5 w-2.5 rounded-full bg-accent/50 lg:block" />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-accent/[0.09] blur-3xl" />
        <div className="absolute -right-12 bottom-4 h-72 w-72 rounded-full bg-[rgba(45,0,0,0.035)] blur-3xl" />
        <svg
          className="absolute right-4 top-1/2 hidden h-44 w-44 -translate-y-1/2 opacity-60 md:block"
          viewBox="0 0 180 180"
          fill="none"
        >
          <circle cx="130" cy="90" r="58" stroke="rgba(249,155,39,0.4)" strokeWidth="1.25" strokeDasharray="5 9" />
          <circle cx="130" cy="90" r="8" fill="rgba(249,155,39,0.35)" />
          <circle cx="70" cy="40" r="4" fill="rgba(217,126,15,0.35)" />
        </svg>
        <svg className="absolute left-2 top-10 hidden h-28 w-20 opacity-50 md:block" viewBox="0 0 80 120" fill="none">
          <path d="M10 10c40 30 20 50-5 80s25 40 45 60" stroke="rgba(249,155,39,0.35)" strokeWidth="1.25" />
        </svg>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#f3f1ed]" />
      <div className="absolute -left-40 top-[-12%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(249,155,39,0.18),transparent_68%)]" />
      <div className="absolute -right-28 top-[16%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(249,155,39,0.12),transparent_70%)]" />
      <div className="absolute bottom-[-10%] left-[18%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(45,0,0,0.045),transparent_70%)]" />
      <svg className="absolute left-0 top-[36%] h-[320px] w-[140px] opacity-60" viewBox="0 0 140 320" fill="none">
        <path
          d="M18 12c55 45 35 100-8 150s20 100 55 150"
          stroke="rgba(249,155,39,0.28)"
          strokeWidth="1.5"
        />
        <circle cx="40" cy="90" r="4" fill="rgba(249,155,39,0.35)" />
      </svg>
    </div>
  );
}
