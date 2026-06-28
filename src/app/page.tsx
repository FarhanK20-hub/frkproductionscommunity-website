import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/layout/FloatingCTA'
import Hero from '@/components/sections/Hero'
import CreatorTypes from '@/components/sections/CreatorTypes'
import WhyJoin from '@/components/sections/WhyJoin'
import HowItWorks from '@/components/sections/HowItWorks'
import Membership from '@/components/sections/Membership'
import CityChapters from '@/components/sections/CityChapters'
import Testimonials from '@/components/sections/Testimonials'
import Manifesto from '@/components/sections/Manifesto'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      {/* Fixed chrome */}
      <Navbar />
      <FloatingCTA />

      {/* Page sections — in source order */}
      <main>
        <Hero />
        <CreatorTypes />
        <WhyJoin />
        <HowItWorks />
        <Membership />
        <CityChapters />
        <Testimonials />
        <Manifesto />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
