'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cities } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'
import CityCard from '@/components/ui/CityCard'
import { fadeUp } from '@/lib/animations'

export default function CityChapters() {
  const gridRef = useRef(null)
  const ctaRef = useRef(null)
  const inView = useInView(gridRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <section
      id="chapters"
      aria-label="City chapters"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div className="mb-16">
        <SectionHeading
          tag="City Chapters"
          heading="FRK is Expanding Pan-India."
          description="We're building offline chapters across India, so creators can meet, shoot, and collaborate in real life."
        />
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-3 gap-5 mb-10 max-lg:grid-cols-2 max-md:grid-cols-1"
      >
        {cities.map((city, i) => (
          <motion.div
            key={city.name}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
              delay: Math.min(i, 3) * 0.1,
            }}
          >
            <CityCard city={city} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        ref={ctaRef}
        variants={fadeUp}
        initial="hidden"
        animate={ctaInView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-[rgba(232,232,232,0.5)] text-[15px] mb-3">
          Want to be your city&apos;s ambassador?
        </p>
        <a
          href="https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub"
          target="_blank" rel="noopener noreferrer"
          className="text-[#c9a84c] text-base font-semibold underline underline-offset-[4px] hover:opacity-80 transition-opacity"
        >
          Apply as Ambassador →
        </a>
      </motion.div>
    </section>
  )
}
