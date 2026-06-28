'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={`bg-[#111111] border rounded-[10px] overflow-hidden transition-colors duration-200 ${
        open ? 'border-[rgba(201,168,76,0.25)]' : 'border-[rgba(255,255,255,0.08)]'
      }`}
    >
      {/* Question button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex justify-between items-center px-5 py-5 bg-transparent text-[#e8e8e8] text-base font-semibold text-left gap-4 cursor-pointer font-sans"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#c9a84c] text-xl font-light flex-shrink-0 leading-none select-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/* Answer with height animation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 text-[rgba(232,232,232,0.5)] text-[15px] leading-[1.7]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
