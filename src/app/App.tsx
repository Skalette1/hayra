import { useState } from 'react'
import { HeroSection } from '../pages/HeroSection/HeroSection'
import { HeroSectionContainer } from '../widgets/heroContainer/HeroContainer'
import { SectionWrap } from '../pages/SectionWrap/SectionWrap'
import { Footer } from '../widgets/footer/Footer'
// import { PagesHayra } from '../widgets/PagesHayra/PagesHayra'

function App() {
  
  return (
    <>
    <HeroSection />
    <HeroSectionContainer />
    <SectionWrap />
    {/* <NewsBlock/> */}
    {/* <PagesHayra /> */}
    <Footer />
    </>
  )
}

export default App
