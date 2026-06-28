'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { membershipTiers } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'
import MembershipCard from '@/components/ui/MembershipCard'
import { fadeUp } from '@/lib/animations'

export default function Membership() {
  const cardsRef = useRef(null)
  const ctaRef = useRef(null)
  const inView = useInView(cardsRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <section
      id="membership"
      aria-label="Membership tiers"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div className="mb-16">
        <SectionHeading
          tag="Membership"
          heading="Earn Your Rank. Lead Your Craft."
          description="Membership is free, forever. Your tier is earned through participation, not payment."
        />
      </div>

      {/* Cards */}
      <div
        ref={cardsRef}
        className="flex gap-6 justify-center flex-wrap max-md:flex-col max-md:items-center"
      >
        {membershipTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.15,
            }}
            className="max-md:w-full max-md:max-w-[360px] h-full flex"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MembershipCard tier={tier} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        ref={ctaRef}
        variants={fadeUp}
        initial="hidden"
        animate={ctaInView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
          href="https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0a0a] rounded-[6px] text-base font-semibold px-8 py-[14px] shadow-[0_8px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all duration-200"
        >
          Start as a Spark, Join Free
        </a>
      </motion.div>
    </section>
  )
}
