import { Variants } from 'framer-motion'

// ── Fade-up for general scroll reveals ──────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Hero word-by-word blur reveal ────────────────────────────────────────────
export const heroWordReveal: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Stagger container ─────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

// ── Section heading staggered delays ─────────────────────────────────────────
// tag: 0s  heading: 0.2s  description: 0.4s  button: 0.8s
export function withDelay(variants: Variants, delay: number): Variants {
  return {
    hidden: variants.hidden,
    visible: {
      ...(typeof variants.visible === 'object' && !Array.isArray(variants.visible)
        ? variants.visible
        : {}),
      transition: {
        ...(typeof variants.visible === 'object' &&
        !Array.isArray(variants.visible) &&
        variants.visible.transition
          ? (variants.visible.transition as object)
          : {}),
        delay,
      },
    },
  }
}

export const fadeUpTag = withDelay(fadeUp, 0)
export const fadeUpHeading = withDelay(fadeUp, 0.2)
export const fadeUpDesc = withDelay(fadeUp, 0.4)
export const fadeUpButton = withDelay(fadeUp, 0.8)
