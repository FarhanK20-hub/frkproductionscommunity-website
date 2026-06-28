import { Testimonial } from '@/data'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[300px] min-h-[280px] bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-6 flex flex-col justify-between gap-5 flex-shrink-0 transition-colors duration-200 hover:border-[rgba(201,168,76,0.25)]">
      {/* Quote */}
      <div className="text-[15px] text-[#e8e8e8] leading-[1.7] italic">
        <span className="text-[#c9a84c] text-xl font-serif not-italic">&ldquo;</span>
        {testimonial.quote}&rdquo;
      </div>

      {/* Author */}
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-base flex-shrink-0">
          {testimonial.emoji}
        </div>
        <div>
          <div className="text-[14px] font-semibold text-[#e8e8e8]">{testimonial.name}</div>
          <div className="text-[13px] text-[rgba(232,232,232,0.5)]">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
