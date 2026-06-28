'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useCallback } from 'react'
import { testimonials } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { fadeUp } from '@/lib/animations'

// Doubled for seamless ticker loop
const tickerDoubled = [...testimonials, ...testimonials]

export default function Testimonials() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, amount: 0.15 })

  return (
    <section
      id="testimonials"
      aria-label="Creator testimonials"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div ref={headingRef} className="mb-16">
        <SectionHeading
          tag="Creators Say"
          heading="Real Creators. Real Results."
          description="From their first collab to their first brand deal, FRK Productions members are building."
        />
      </div>

      {/* Desktop ticker — hidden on mobile */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="hidden md:block overflow-hidden w-full"
        aria-hidden="true"
      >
        <div className="testimonials-ticker-track">
          {tickerDoubled.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </motion.div>

      {/* Mobile Embla carousel — hidden on desktop */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="md:hidden"
      >
        <MobileCarousel />
      </motion.div>
    </section>
  )
}

function MobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Register listener
  useCallback(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])()

  return (
    <div>
      {/* Embla container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-7 touch-pan-y">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[calc(100vw-80px)] flex-shrink-0"
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div
        className="flex justify-center gap-2 mt-6"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-label={`Go to testimonial ${i + 1}`}
            aria-selected={i === selectedIndex}
            onClick={() => {
              emblaApi?.scrollTo(i)
              setSelectedIndex(i)
            }}
            className={`w-2 h-2 rounded-full border-none transition-colors duration-200 cursor-pointer ${
              i === selectedIndex ? 'bg-[#c9a84c]' : 'bg-[rgba(255,255,255,0.08)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
