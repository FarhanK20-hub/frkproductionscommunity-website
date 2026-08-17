import { navLinks } from '@/data'

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="px-[var(--section-x)] pt-20 pb-10 max-w-[1440px] mx-auto">
      <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[16px] px-12 py-[60px] flex flex-col md:flex-row justify-between items-center gap-10 max-md:text-center max-md:px-6 max-md:py-10 max-md:gap-7">
        {/* Left */}
        <div className="flex flex-col gap-5 max-md:items-center">
          <div>
            <a href="#home" className="inline-block mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Frk_Productions_Community_logo-removebg-preview.png" alt="FRK Productions" className="h-16 w-auto object-contain" />
            </a>
            <div className="font-serif italic text-[#c9a84c] text-[18px]">
              Stop Creating Alone.
            </div>
          </div>

          <nav className="flex gap-6 flex-wrap max-md:justify-center" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#e8e8e8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex gap-4 flex-wrap max-md:justify-center mt-2" aria-label="Social links">
            <a href="https://www.instagram.com/_farhan.who_/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">Instagram</a>
            <a href="https://www.linkedin.com/company/frkproductions" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">LinkedIn</a>
            <a href="https://discord.gg/HcHXWY8Rkw" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[rgba(232,232,232,0.5)] transition-colors duration-200 hover:text-[#c9a84c]">Discord</a>
          </nav>

          <p className="text-[13px] text-[rgba(232,232,232,0.5)]">
            © 2024 FRK Productions. Founded by <a href="https://farhankhanstories.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors underline underline-offset-[2px]">Farhan Khan</a> (<a href="https://www.linkedin.com/in/farhan-khan-3aa5442b0/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors">LinkedIn</a>). Pan-India.
          </p>
        </div>

        {/* CTA */}
        <div>
          <a
            href="https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0a0a] rounded-[6px] text-base font-semibold px-6 py-3 shadow-[0_8px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all duration-200"
          >
            Join the Collective
          </a>
        </div>
      </div>
    </footer>
  )
}
