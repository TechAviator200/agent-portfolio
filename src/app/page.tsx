import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e] font-sans">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Music notes */}
            <path
              d="M20 30 Q25 25 25 35 M25 35 L25 20 M25 20 Q30 18 30 22"
              stroke="#3dd9d9"
              strokeWidth="1"
              fill="none"
            />
            {/* Arrow */}
            <path
              d="M60 50 Q70 45 80 50 M75 45 L80 50 L75 55"
              stroke="#3dd9d9"
              strokeWidth="1"
              fill="none"
            />
            {/* Lightbulb */}
            <circle cx="140" cy="40" r="8" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M136 50 L144 50 M137 53 L143 53" stroke="#3dd9d9" strokeWidth="1" />
            {/* Envelope */}
            <rect x="10" y="100" width="20" height="14" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M10 100 L20 110 L30 100" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Calculator */}
            <rect x="160" y="90" width="16" height="22" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="163" y="93" width="10" height="5" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Clock */}
            <circle cx="100" cy="150" r="10" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M100 150 L100 144 M100 150 L105 150" stroke="#3dd9d9" strokeWidth="1" />
            {/* Laptop */}
            <path d="M50 160 L50 145 L75 145 L75 160 M45 160 L80 160 L78 165 L47 165 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Gear */}
            <circle cx="180" cy="170" r="6" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="180" cy="170" r="3" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodles)" />
      </svg>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-end gap-8 px-8 py-6">
        <Link href="/" className="text-sm text-zinc-300 transition-colors hover:text-white">
          Home
        </Link>
        <Link href="#about" className="text-sm text-zinc-300 transition-colors hover:text-white">
          About Me
        </Link>
        <Link href="/projects#contact" className="text-sm text-zinc-300 transition-colors hover:text-white">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-8 lg:flex-row lg:justify-between animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Left side - Text content */}
        <div className="mb-12 lg:mb-0 lg:max-w-xl">
          {/* Decorative arrow */}
          <svg
            className="mb-4 h-12 w-12 text-[#3dd9d9]/50"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 40 Q15 20 40 25" strokeLinecap="round" />
            <path d="M35 20 L40 25 L35 30" strokeLinecap="round" />
          </svg>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-white">APPLIED AI</span>
            <br />
            <span className="text-[#3dd9d9]">ENGINEER</span>
          </h1>

          <p className="mb-6 text-xl text-zinc-200">I build worlds and everything in between</p>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-[#3dd9d9] px-6 py-3 text-sm font-semibold text-[#1a1f2e] transition-all hover:bg-[#2bc4c4] hover:shadow-lg hover:shadow-[#3dd9d9]/25 active:scale-[0.98]"
          >
            SEE My Work
          </Link>
        </div>

        {/* Right side - Illustration */}
        <div className="relative flex items-center justify-center lg:w-1/2">
          {/* Person with monitors illustration */}
          <svg
            className="h-80 w-80 md:h-96 md:w-96"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background decorative elements */}
            <path d="M50 100 Q60 90 70 100" stroke="#3dd9d9" strokeWidth="1" opacity="0.3" />
            <path d="M350 80 L360 90 L350 100" stroke="#3dd9d9" strokeWidth="1" opacity="0.3" />

            {/* Monitor 1 - Top left */}
            <rect x="80" y="80" width="70" height="50" rx="4" fill="white" />
            <rect x="85" y="85" width="60" height="35" rx="2" fill="#e8f5f5" />
            <rect x="90" y="90" width="25" height="3" fill="#3dd9d9" />
            <rect x="90" y="96" width="40" height="2" fill="#ccc" />
            <rect x="90" y="101" width="35" height="2" fill="#ccc" />
            <rect x="90" y="106" width="20" height="8" fill="#ff9f43" opacity="0.6" />
            <rect x="108" y="130" width="14" height="15" fill="#ddd" />
            <ellipse cx="115" cy="148" rx="20" ry="3" fill="#bbb" />

            {/* Monitor 2 - Top center */}
            <rect x="165" y="60" width="70" height="50" rx="4" fill="white" />
            <rect x="170" y="65" width="60" height="35" rx="2" fill="#e8f5f5" />
            <circle cx="185" cy="80" r="10" fill="none" stroke="#3dd9d9" strokeWidth="2" />
            <path d="M182 80 L185 77 L188 83 L191 75" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
            <rect x="200" y="75" width="25" height="2" fill="#ccc" />
            <rect x="200" y="80" width="20" height="2" fill="#ccc" />
            <rect x="200" y="85" width="22" height="2" fill="#ccc" />
            <rect x="193" y="110" width="14" height="15" fill="#ddd" />
            <ellipse cx="200" cy="128" rx="20" ry="3" fill="#bbb" />

            {/* Monitor 3 - Top right */}
            <rect x="250" y="80" width="70" height="50" rx="4" fill="white" />
            <rect x="255" y="85" width="60" height="35" rx="2" fill="#e8f5f5" />
            <path d="M265 100 L275 95 L285 105 L295 90 L305 100" stroke="#3dd9d9" strokeWidth="2" fill="none" />
            <rect x="278" y="130" width="14" height="15" fill="#ddd" />
            <ellipse cx="285" cy="148" rx="20" ry="3" fill="#bbb" />

            {/* Monitor 4 - Bottom right */}
            <rect x="280" y="180" width="70" height="50" rx="4" fill="white" />
            <rect x="285" y="185" width="60" height="35" rx="2" fill="#e8f5f5" />
            <rect x="290" y="190" width="15" height="10" fill="#3dd9d9" opacity="0.3" />
            <rect x="308" y="190" width="15" height="10" fill="#ff9f43" opacity="0.3" />
            <rect x="326" y="190" width="15" height="10" fill="#3dd9d9" opacity="0.5" />
            <path d="M295 210 L305 205 L315 212 L325 200 L335 208" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
            <rect x="308" y="230" width="14" height="15" fill="#ddd" />
            <ellipse cx="315" cy="248" rx="20" ry="3" fill="#bbb" />

            {/* Person */}
            {/* Hair */}
            <ellipse cx="180" cy="210" rx="22" ry="20" fill="#3dd9d9" />
            <path d="M158 215 Q165 195 180 190 Q195 195 202 215" fill="#3dd9d9" />

            {/* Face */}
            <ellipse cx="180" cy="220" rx="18" ry="16" fill="#fbd5c8" />

            {/* Body */}
            <path d="M160 240 Q155 280 160 320 L200 320 Q205 280 200 240 Q180 250 160 240" fill="white" />

            {/* Arms */}
            <path d="M158 250 Q140 260 130 280 Q125 290 135 295" fill="#fbd5c8" />
            <path d="M202 250 Q220 260 235 270" fill="white" />
            <ellipse cx="235" cy="275" rx="8" ry="6" fill="#fbd5c8" />

            {/* Legs */}
            <path d="M165 320 Q160 350 165 380" stroke="#3dd9d9" strokeWidth="20" strokeLinecap="round" />
            <path d="M195 320 Q200 350 195 380" stroke="#3dd9d9" strokeWidth="20" strokeLinecap="round" />

            {/* Shoes */}
            <ellipse cx="165" cy="385" rx="15" ry="6" fill="white" />
            <ellipse cx="195" cy="385" rx="15" ry="6" fill="white" />

            {/* Tablet in hand */}
            <rect x="120" y="285" width="30" height="40" rx="3" fill="#2a3142" />
            <rect x="123" y="288" width="24" height="32" rx="2" fill="#3dd9d9" opacity="0.3" />

            {/* Globe icon */}
            <circle cx="60" cy="280" r="20" fill="#3dd9d9" opacity="0.2" />
            <circle cx="60" cy="280" r="15" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
            <ellipse cx="60" cy="280" rx="6" ry="15" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M45 280 L75 280" stroke="#3dd9d9" strokeWidth="1" />
            <path d="M48 272 L72 272" stroke="#3dd9d9" strokeWidth="0.5" />
            <path d="M48 288 L72 288" stroke="#3dd9d9" strokeWidth="0.5" />
          </svg>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <Link href="#about" className="flex h-12 w-8 items-center justify-center rounded-full border border-zinc-600 transition-colors hover:border-[#3dd9d9]">
          <svg className="h-5 w-5 animate-bounce text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>

      {/* About Me Section */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-8 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        {/* Decorative music note */}
        <svg className="mb-6 h-8 w-8 text-[#3dd9d9]/40" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 22 Q4 22 4 18 Q4 14 8 14 Q12 14 12 18 L12 6 Q18 4 22 6" />
          <circle cx="22" cy="10" r="4" />
        </svg>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left side - Text */}
          <div className="lg:max-w-md">
            <h2 className="mb-6 text-4xl font-bold">
              <span className="text-white">About </span>
              <span className="text-[#3dd9d9]">me</span>
            </h2>

            {/* Decorative curved arrow */}
            <svg className="mb-4 h-8 w-16 text-[#3dd9d9]/50" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 25 Q30 5 55 15" strokeLinecap="round" />
            </svg>

            <p className="mb-4 leading-relaxed text-zinc-300">
              I build intelligent AI agents that solve real-world problems across media, enterprise, and healthcare domains. With expertise in applied machine learning and software engineering, I create systems that augment human capabilities and automate complex workflows.
            </p>
            <p className="mb-6 leading-relaxed text-zinc-300">
              My focus is on practical AI solutions—agents that understand context, learn from interactions, and deliver measurable value...
            </p>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#3dd9d9] active:scale-[0.98]"
            >
              Read more
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right side - Illustration */}
          <div className="flex justify-center lg:w-1/2">
            <svg
              className="h-72 w-72 md:h-80 md:w-80"
              viewBox="0 0 300 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Chair */}
              <ellipse cx="150" cy="320" rx="60" ry="8" fill="#3dd9d9" opacity="0.3" />
              <path d="M100 280 Q90 300 95 320 L205 320 Q210 300 200 280" fill="#3dd9d9" />
              <path d="M95 320 L85 340 M205 320 L215 340" stroke="#3dd9d9" strokeWidth="4" />

              {/* Person sitting */}
              {/* Legs */}
              <path d="M120 280 Q100 300 90 330" stroke="#3dd9d9" strokeWidth="18" strokeLinecap="round" />
              <path d="M180 280 Q200 300 210 330" stroke="#3dd9d9" strokeWidth="18" strokeLinecap="round" />

              {/* Shoes */}
              <ellipse cx="90" cy="335" rx="14" ry="6" fill="white" />
              <ellipse cx="210" cy="335" rx="14" ry="6" fill="white" />

              {/* Body */}
              <path d="M115 200 Q110 240 120 280 L180 280 Q190 240 185 200 Q150 210 115 200" fill="white" />

              {/* Head */}
              <ellipse cx="150" cy="170" rx="25" ry="22" fill="#fbd5c8" />

              {/* Hair */}
              <ellipse cx="150" cy="155" rx="28" ry="20" fill="#3dd9d9" />
              <path d="M122 165 Q135 145 150 140 Q165 145 178 165" fill="#3dd9d9" />

              {/* Arms */}
              <path d="M115 210 Q90 230 80 250" stroke="#fbd5c8" strokeWidth="12" strokeLinecap="round" />
              <path d="M185 210 Q210 230 220 250" stroke="#fbd5c8" strokeWidth="12" strokeLinecap="round" />

              {/* Laptop */}
              <rect x="70" y="245" width="80" height="50" rx="4" fill="#2a3142" />
              <rect x="75" y="250" width="70" height="40" rx="2" fill="#3dd9d9" opacity="0.3" />
              <path d="M60 295 L160 295 L165 305 L55 305 Z" fill="#2a3142" />

              {/* Star decoration */}
              <path d="M250 300 L255 285 L260 300 L275 295 L260 305 L265 320 L250 310 L235 320 L240 305 L225 295 Z" fill="#3dd9d9" opacity="0.4" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
