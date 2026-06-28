'use client'

import { useEffect, useRef } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<unknown>(null)

  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null
    let rafId: number

    async function init() {
      const LenisModule = await import('lenis')
      const Lenis = LenisModule.default

      lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      }) as { raf: (time: number) => void; destroy: () => void }

      lenisRef.current = lenis

      function raf(time: number) {
        lenis!.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
