'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { creatorTypes } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp } from '@/lib/animations'

export default function CreatorTypes() {
  const gridRef = useRef(null)
  const inView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <section
      id="creator-types"
      aria-label="Creator types"
      className="py-[120px] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div className="mb-16">
        <SectionHeading
          tag="Who Joins"
          heading="Every Creator Has a Home Here."
          description="From behind the lens to behind the mic, FRK Productions is built for every creative discipline."
        />
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-4 gap-5 md:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2"
      >
        {creatorTypes.map((creator, i) => (
          <motion.div
            key={creator.title}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
              delay: Math.min(i, 4) * 0.1,
            }}
            className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-5 flex flex-col gap-4 min-h-[180px] transition-colors duration-200 hover:border-[rgba(201,168,76,0.3)] max-md:min-h-[160px]"
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-[28px]">{creator.emoji}</div>
            <h3 className="text-[20px]">{creator.title}</h3>
            <p className="text-[14px] text-[rgba(232,232,232,0.5)] leading-[1.4]">
              {creator.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
