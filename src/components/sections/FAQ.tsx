'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { faqs } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQItem from '@/components/ui/FAQItem'
import { fadeUp } from '@/lib/animations'

export default function FAQ() {
  const listRef = useRef(null)
  const inView = useInView(listRef, { once: true, amount: 0.1 })

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-[var(--section-y)] px-[var(--section-x)] max-w-[1440px] mx-auto"
    >
      {/* Heading */}
      <div className="mb-16">
        <SectionHeading
          tag="FAQ"
          heading="Common Questions."
          description="No confusion. Just clear answers."
        />
      </div>

      {/* FAQ list */}
      <div
        ref={listRef}
        className="flex flex-col gap-3 max-w-[760px]"
      >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
              delay: Math.min(i, 3) * 0.1,
            }}
          >
            <FAQItem
              question={faq.q}
              answer={faq.a}
              defaultOpen={i === 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
