'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Tag from './Tag'
import { fadeUpTag, fadeUpHeading, fadeUpDesc } from '@/lib/animations'
import { ReactNode } from 'react'

interface SectionHeadingProps {
  tag?: string
  heading: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

export default function SectionHeading({
  tag,
  heading,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const isCenter = align === 'center'

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : ''}`}
    >
      {tag && (
        <motion.div
          variants={fadeUpTag}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Tag>{tag}</Tag>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUpHeading}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {heading}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUpDesc}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`text-[rgba(232,232,232,0.5)] text-[clamp(17px,1.4vw,21px)] leading-[1.5] tracking-[-0.01em] max-w-[600px] ${isCenter ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
