'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp } from '@/lib/animations'

const WHATSAPP_URL = 'https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub'

// ── SVG Visuals ───────────────────────────────────────────────────────────────

function NetworkVisual() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="150" r="80" fill="url(#glow)" />
        <circle cx="200" cy="150" r="12" fill="#c9a84c" opacity="0.9" />
        <circle cx="100" cy="80" r="8" fill="#c9a84c" opacity="0.6" />
        <circle cx="300" cy="80" r="8" fill="#c9a84c" opacity="0.6" />
        <circle cx="80" cy="200" r="8" fill="#c9a84c" opacity="0.6" />
        <circle cx="320" cy="200" r="8" fill="#c9a84c" opacity="0.6" />
        <circle cx="200" cy="260" r="8" fill="#c9a84c" opacity="0.6" />
        <circle cx="150" cy="50" r="5" fill="rgba(201,168,76,0.4)" />
        <circle cx="340" cy="150" r="5" fill="rgba(201,168,76,0.4)" />
        <line x1="200" y1="150" x2="100" y2="80" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />
        <line x1="200" y1="150" x2="300" y2="80" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />
        <line x1="200" y1="150" x2="80" y2="200" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />
        <line x1="200" y1="150" x2="320" y2="200" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />
        <line x1="200" y1="150" x2="200" y2="260" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />
        <line x1="100" y1="80" x2="150" y2="50" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" />
        <line x1="300" y1="80" x2="340" y2="150" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  )
}

function PortfolioVisual() {
  return (
    <div className="flex gap-4 p-5 w-full h-full items-stretch">
      {/* Empty side */}
      <div className="flex-1 rounded-[8px] border border-[rgba(255,255,255,0.08)] flex flex-col gap-2 p-4 justify-center opacity-30">
        <div className="h-2 rounded bg-[rgba(255,255,255,0.1)] w-full" />
        <div className="h-2 rounded bg-[rgba(255,255,255,0.1)] w-[70%] mt-2" />
        <div className="h-2 rounded bg-[rgba(255,255,255,0.1)] w-[45%] mt-2" />
        <div className="h-10 rounded-[6px] bg-[rgba(255,255,255,0.1)] mt-3" />
        <p className="text-[11px] text-[rgba(232,232,232,0.5)] text-center mt-2">Empty Portfolio</p>
      </div>
      {/* Arrow */}
      <div className="flex items-center text-[#c9a84c] text-xl">→</div>
      {/* Full side */}
      <div className="flex-1 rounded-[8px] border border-[rgba(201,168,76,0.3)] flex flex-col gap-2 p-4 justify-center">
        <div className="h-2 rounded bg-[#c9a84c] w-full" />
        <div className="h-2 rounded bg-[#c9a84c] w-[70%] mt-2" />
        <div className="h-2 rounded bg-[#c9a84c] w-[45%] mt-2" />
        <div className="h-10 rounded-[6px] bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] mt-3" />
        <p className="text-[11px] text-[#c9a84c] text-center mt-2">FRK Portfolio ✓</p>
      </div>
    </div>
  )
}

function SpotlightVisual() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-[240px] border border-[#c9a84c] rounded-[12px] p-5 flex flex-col gap-3 animate-pulse-glow">
        <div className="text-[11px] font-bold text-[#c9a84c] tracking-[0.08em]">⭐ CREATOR SPOTLIGHT</div>
        <div className="flex gap-[10px] items-center">
          <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] border border-[#c9a84c] flex items-center justify-center text-[18px] flex-shrink-0">
            🎬
          </div>
          <div>
            <div className="text-[14px] font-semibold text-[#e8e8e8]">Aarav S.</div>
            <div className="text-[12px] text-[rgba(232,232,232,0.5)]">Director · FRK Member</div>
          </div>
        </div>
        <div className="text-[12px] text-[rgba(232,232,232,0.5)] leading-[1.5]">
          &ldquo;Short Film: After Dark&rdquo;
        </div>
        <div className="flex gap-[6px] flex-wrap">
          <span className="text-[11px] bg-[rgba(201,168,76,0.15)] text-[#c9a84c] px-2 py-[3px] rounded-[99px]">
            FRK Verified
          </span>
          <span className="text-[11px] bg-[rgba(255,255,255,0.04)] text-[rgba(232,232,232,0.5)] px-2 py-[3px] rounded-[99px]">
            Blaze 🔥🔥🔥
          </span>
        </div>
      </div>
    </div>
  )
}

function MosaicVisual() {
  const cells = [
    { emoji: '🎬', gold: true },
    { emoji: '🎭', gold: false },
    { emoji: '📷', gold: true },
    { emoji: '🎵', gold: false },
    { emoji: '✍️', gold: true },
    { emoji: '🎨', gold: false },
  ]

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 p-5 w-full h-full">
      {cells.map((cell, i) => (
        <div
          key={i}
          className={`rounded-[8px] border flex items-center justify-center text-xl ${
            cell.gold
              ? 'border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.15)]'
              : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]'
          }`}
        >
          {cell.emoji}
        </div>
      ))}
    </div>
  )
}

// ── Feature card data ─────────────────────────────────────────────────────────
const features = [
  {
    title: 'Find Your Collaborators',
    body: 'Stop waiting for the right person to show up. Post your project, browse the member directory, and connect with your future crew, cast, or creative partner, across India.',
    visual: <NetworkVisual />,
  },
  {
    title: 'Build Your Portfolio',
    body: "Every challenge, every collab, every project adds to your reel. FRK Productions gives you the real work experience that builds the portfolio you've been putting off.",
    visual: <PortfolioVisual />,
  },
  {
    title: 'Get Discovered',
    body: 'Creator spotlights. Brand collab opportunities. Featured showcases. Stop being invisible. Let FRK Productions put your work in front of the people who matter.',
    visual: <SpotlightVisual />,
  },
  {
    title: 'Grow Together',
    body: 'Monthly workshops, portfolio reviews, live events, and mentorship from the Blaze-tier and Founder Circle. No gatekeeping. Just real, useful growth.',
    visual: <MosaicVisual />,
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function WhyJoin() {
  return (
    <section
      id="why-join"
      aria-label="Why join FRK Productions"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div className="mb-20">
        <SectionHeading
          tag="Why Join"
          heading="What FRK Productions Gives You."
          description="Not another LinkedIn group. Not a job board. India's creative operating system, built by a creator, for creators."
        />
      </div>

      {/* Sticky cards wrapper */}
      <div className="flex flex-col gap-[160px] max-md:gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; body: string; visual: React.ReactNode }
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
      className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-10 flex gap-16 items-center min-h-[400px] transition-colors duration-200 hover:border-[rgba(255,255,255,0.12)] md:sticky md:top-[120px] max-md:flex-col max-md:p-6 max-md:gap-7 max-md:min-h-0"
      style={{ zIndex: 10 + index }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Text */}
      <div className="flex-1 flex flex-col gap-6">
        <h3 className="text-[#e8e8e8]">{feature.title}</h3>
        <p className="text-[rgba(232,232,232,0.5)] text-[clamp(16px,1.2vw,19px)] leading-[1.7]">
          {feature.body}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank" rel="noopener noreferrer"
          className="text-[#c9a84c] text-[15px] font-semibold inline-flex items-center gap-1 hover:underline"
        >
          Learn More →
        </a>
      </div>

      {/* Visual */}
      <div className="flex-1 h-[300px] rounded-[12px] bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] flex items-center justify-center relative overflow-hidden max-md:h-[200px] max-md:w-full">
        {feature.visual}
      </div>
    </motion.div>
  )
}
