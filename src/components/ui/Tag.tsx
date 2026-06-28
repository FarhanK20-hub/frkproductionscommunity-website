import { ReactNode } from 'react'

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.3)] px-4 py-[6px] rounded-[999px] font-sans text-[13px] font-semibold">
      {children}
    </span>
  )
}
