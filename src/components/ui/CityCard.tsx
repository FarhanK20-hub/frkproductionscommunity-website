import { City } from '@/data'

export default function CityCard({ city }: { city: City }) {
  return (
    <div
      className={`bg-[#111111] border rounded-[12px] p-6 flex flex-col gap-3 transition-colors duration-200 ${
        city.active
          ? 'border-[#c9a84c]'
          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-[20px] font-serif font-semibold text-[#e8e8e8]">{city.name}</div>
        {city.active && (
          <span className="text-[11px] font-bold text-[#c9a84c] border border-[#c9a84c] px-2 py-[3px] rounded-[999px] tracking-[0.06em]">
            ACTIVE
          </span>
        )}
      </div>

      {/* Status */}
      <div className="text-[13px] text-[rgba(232,232,232,0.5)]">{city.status}</div>

      {/* Lead or open note */}
      {city.lead && (
        <div className="text-[13px] text-[rgba(232,232,232,0.5)]">
          City Ambassador: <span className="text-[#c9a84c]">{city.lead}</span>
        </div>
      )}
      {city.time && (
        <div className="text-[13px] text-[rgba(232,232,232,0.5)]">{city.time}</div>
      )}
    </div>
  )
}
