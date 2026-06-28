'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'
import { tickerItems } from '@/data'

const WHATSAPP_URL = 'https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub'

// Doubled for seamless loop
const tickerDoubled = [...tickerItems, ...tickerItems]

export default function Hero() {
  const [scope, animate] = useAnimate()
  const headlineRef = useRef<HTMLHeadingElement>(null)

  // Trigger word reveal after mount
  useEffect(() => {
    if (!headlineRef.current) return
    const words = headlineRef.current.querySelectorAll<HTMLSpanElement>('.hero-word')
    animate(
      words,
      { opacity: 1, y: 0, filter: 'blur(0px)' },
      {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        delay: stagger(0.12, { startDelay: 0.3 }),
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero"
      ref={scope}
      className="min-h-screen flex flex-col justify-center pt-[140px] pb-20 px-[var(--section-x)] max-w-[1440px] mx-auto gap-12 max-md:pt-[120px] max-md:pb-[60px] max-md:gap-10"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full flex-1">
        
        {/* Left Column (Text & CTAs) */}
        <div className="flex flex-col gap-8 max-md:gap-7">
          <div className="flex flex-col gap-6 max-md:gap-5">
            {/* Tag */}
            <span className="hero-tag-enter inline-flex items-center self-start bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.3)] px-4 py-[6px] rounded-[999px] font-sans text-[13px] font-semibold">
              Pan-India Creative Collective
            </span>

            {/* Headline — word-by-word blur reveal */}
            <h1
              ref={headlineRef}
              className="hero-headline"
              style={{ opacity: 1 }}
            >
              {['Stop', 'Creating', 'Alone.'].map((word, i) => (
                <span key={i}>
                  <span
                    className="hero-word inline-block"
                    style={{
                      opacity: 0,
                      transform: 'translateY(12px)',
                      filter: 'blur(10px)',
                    }}
                  >
                    {word}
                  </span>
                  {i < 2 && <>&nbsp;</>}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            <p className="hero-sub-enter text-[rgba(232,232,232,0.5)] text-[clamp(17px,1.4vw,21px)] leading-[1.5] tracking-[-0.01em] max-w-[680px]">
              FRK Productions is India&apos;s creative collective, where filmmakers, actors,
              photographers, designers, writers, musicians, and storytellers find their people, their
              collaborators, and their next project.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-ctas-enter flex gap-4 flex-wrap items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0a0a] rounded-[6px] text-base font-semibold px-6 py-3 shadow-[0_8px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all duration-200"
            >
              Join Free on WhatsApp
            </a>
            <a
              href="#why-join"
              className="inline-flex items-center justify-center bg-transparent text-[#e8e8e8] border border-[rgba(255,255,255,0.08)] rounded-[6px] text-base font-semibold px-6 py-3 hover:border-[rgba(255,255,255,0.2)] transition-all duration-200"
            >
              Explore the Community
            </a>
          </div>

          {/* Socials & Note */}
          <div className="hero-note-enter flex flex-col gap-3 mt-2">
            <p className="text-[14px] text-[rgba(232,232,232,0.5)]">
              Free to join. Always. Follow the FRK Productions Community on <a href="https://www.linkedin.com/company/frkproductions" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline">LinkedIn</a>.
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <a href="https://www.instagram.com/_farhan.who_/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">Instagram</a>
              <a href="https://discord.gg/HcHXWY8Rkw" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">Discord</a>
              <a href="https://farhankhanstories.me" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">Website</a>
              <a href="mailto:devrevolutionx@gmail.com" className="text-[13px] font-medium text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">devrevolutionx@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right Column (Floating Cards Graphic) */}
        <div className="hidden lg:flex relative w-full h-[500px] justify-center items-center perspective-1000">
          
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateZ: -10 }}
            animate={{ opacity: 1, y: 0, rotateZ: -6 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="absolute z-10 w-[240px] h-[320px] bg-[#111] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl p-6 flex flex-col justify-between left-[10%]"
          >
            <div className="text-5xl">🎬</div>
            <div>
              <div className="text-[#e8e8e8] font-bold text-lg">Filmmakers</div>
              <div className="text-[rgba(232,232,232,0.5)] text-sm mt-1">Looking for crew</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, rotateZ: 10 }}
            animate={{ opacity: 1, y: 0, rotateZ: 8 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
            className="absolute z-20 w-[240px] h-[320px] bg-[#141414] border border-[rgba(201,168,76,0.3)] rounded-2xl shadow-2xl p-6 flex flex-col justify-between top-[10%] right-[10%]"
          >
            <div className="text-5xl">🎭</div>
            <div>
              <div className="text-[#c9a84c] font-bold text-lg">Actors</div>
              <div className="text-[rgba(232,232,232,0.5)] text-sm mt-1">Seeking roles</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, rotateZ: -5 }}
            animate={{ opacity: 1, y: 0, rotateZ: -2 }}
            transition={{ duration: 1, delay: 0.6, type: 'spring' }}
            className="absolute z-30 w-[240px] h-[320px] bg-[#0a0a0a] border border-[rgba(255,255,255,0.12)] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-between bottom-0 right-[25%]"
          >
            <div className="text-5xl">📷</div>
            <div>
              <div className="text-[#e8e8e8] font-bold text-lg">Photographers</div>
              <div className="text-[rgba(232,232,232,0.5)] text-sm mt-1">Building portfolio</div>
            </div>
          </motion.div>

          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c9a84c] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        </div>
      </div>

      {/* Ticker */}
      <div
        className="hero-ticker-enter w-full overflow-hidden mt-auto"
        aria-hidden="true"
      >
        <div className="ticker-track">
          {tickerDoubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-10 pr-10 font-serif italic text-[28px] text-[#c9a84c] whitespace-nowrap"
            >
              {item}
              <span className="text-[rgba(232,232,232,0.5)]">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
