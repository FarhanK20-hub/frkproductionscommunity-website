import { MembershipTier } from '@/data'

export default function MembershipCard({ tier }: { tier: MembershipTier }) {
  return (
    <div
      className={`bg-[#111111] border rounded-[16px] p-7 flex flex-col gap-5 flex-1 max-w-[320px] transition-all duration-200 ${
        tier.highlighted
          ? 'border-[#c9a84c] shadow-[0_0_40px_rgba(201,168,76,0.12)]'
          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)]'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="text-[28px]">{tier.badge}</div>
        <div className="text-[22px] font-serif font-semibold text-[#e8e8e8]">{tier.name}</div>
        {tier.label && (
          <div className="text-[11px] font-bold text-[#c9a84c] tracking-[0.1em] uppercase">
            {tier.label}
          </div>
        )}
      </div>

      {/* How to earn */}
      <div className="flex flex-col gap-1">
        <div className="text-[12px] text-[rgba(232,232,232,0.5)] uppercase tracking-[0.06em] font-semibold">
          How to earn
        </div>
        <div className="text-[14px] text-[#e8e8e8]">{tier.earn}</div>
      </div>

      {/* Perks */}
      <div className="flex flex-col gap-2">
        {tier.perks.map((perk) => (
          <div key={perk} className="flex gap-2 items-start text-[14px] text-[rgba(232,232,232,0.5)]">
            <span className="text-[#c9a84c] font-bold flex-shrink-0">✓</span>
            <span>{perk}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
