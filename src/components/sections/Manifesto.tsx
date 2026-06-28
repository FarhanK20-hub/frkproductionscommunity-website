'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const manifestoText = `We started FRK Productions because we were tired of creating alone. Tired of having ideas and no one to build them with. Tired of watching our best work sit in drafts because we couldn't find the right cinematographer, the right actor, the right editor.

So we built what we needed.

FRK Productions is not a platform. It's not a company. It's a collective. A movement of filmmakers, actors, photographers, designers, writers, musicians, and storytellers who believe that the best work is made together, and that geography, budget, and follower counts should never be the barrier.

This is your collective. Build something real.`

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="manifesto"
      aria-label="FRK Productions manifesto"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[900px] mx-auto text-center max-md:py-20 max-md:px-5"
    >
      <div ref={ref}>
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-[clamp(36px,4.5vw,72px)] leading-none tracking-[-0.04em] font-semibold mb-10"
        >
          We Built What We Needed.
        </motion.h2>

        {/* Body text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[rgba(232,232,232,0.5)] text-[clamp(16px,1.3vw,19px)] leading-[1.9] whitespace-pre-line mb-8"
        >
          {manifestoText}
        </motion.p>

        {/* Signature */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="font-serif italic text-[#c9a84c] text-[20px] text-right"
        >
          <a href="https://farhankhanstories.me" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity underline underline-offset-[4px]">Farhan Khan</a>, Founder, FRK Productions
        </motion.p>
      </div>
    </section>
  )
}
