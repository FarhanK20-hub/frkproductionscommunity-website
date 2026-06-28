import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'gold' | 'ghost' | 'text'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  ariaLabel?: string
}

const sizeMap = {
  sm: 'text-sm px-[18px] py-2',
  md: 'text-[15px] px-5 py-[10px]',
  lg: 'text-base px-6 py-3',
}

export default function Button({
  variant = 'gold',
  href,
  onClick,
  children,
  className,
  size = 'md',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-[6px] font-sans font-semibold transition-all duration-200 cursor-pointer'

  const variants = {
    gold: 'bg-[#c9a84c] text-[#0a0a0a] shadow-[0_8px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)]',
    ghost:
      'bg-transparent text-[#e8e8e8] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]',
    text: 'bg-transparent text-[#c9a84c] underline underline-offset-[3px] p-0 rounded-none text-[15px]',
  }

  const classes = cn(base, variants[variant], variant !== 'text' ? sizeMap[size] : '', className)

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
