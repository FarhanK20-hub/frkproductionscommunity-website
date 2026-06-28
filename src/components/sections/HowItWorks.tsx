'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp } from '@/lib/animations'

const steps = [
  {
    icon: '🔥',
    num: '01',
    title: 'Join the Collective',
    body: "Hit 'Join Free', enter our WhatsApp Community, and fill your profile. Takes 90 seconds.",
  },
  {
    icon: '🔗',
    num: '02',
    title: 'Find Your People',
    body: "Browse the collab board, post your project, or just say hi in your discipline's channel.",
  },
  {
    icon: '🎬',
    num: '03',
    title: 'Make Something Real',
    body: "Connect, collaborate, create. Earn your Flame tier. Build the reel you're proud of.",
  },
]

export default function HowItWorks() {
  const cardsRef = useRef(null)
  const inView = useInView(cardsRef, { once: true, amount: 0.15 })

  return (
    <section
      id="how-it-works"
      aria-label="How FRK Productions works"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div className="mb-16">
        <SectionHeading
          tag="How It Works"
          heading="From Stranger to Creative Partner in 3 Steps."
          description="No forms, no interviews, no gatekeeping. Just join, connect, and create."
        />
      </div>

      {/* Step cards */}
      <div
        ref={cardsRef}
        className="flex gap-8 max-md:flex-col max-md:gap-4"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.2,
            }}
            className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-7 py-8 flex-1 flex flex-col gap-5 min-h-[220px] transition-colors duration-200 hover:border-[rgba(201,168,76,0.3)] cursor-default"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-[36px]">{step.icon}</div>
            <div className="text-[13px] font-bold text-[#c9a84c] tracking-[0.08em]">{step.num}</div>
            <h3 className="text-[clamp(20px,1.8vw,28px)]">{step.title}</h3>
            <p className="text-[rgba(232,232,232,0.5)] text-[15px] leading-[1.6]">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
