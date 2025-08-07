import { useState } from 'react'
import { HeroSection } from '../pages/HeroSection/HeroSection'
import { HeroSectionContainer } from '../widgets/heroContainer/HeroContainer'
import { SectionWrap } from '../pages/SectionWrap/SectionWrap'
import { Footer } from '../widgets/footer/Footer'
import { PagesHayra } from '../widgets/PagesHayra/PagesHayra'
import { Interesting } from '../widgets/Interesting/Interesting'
import { ReportBlock } from '../widgets/Report/ReportBlock'
import { Support } from '../widgets/Support/Support'

function App() {
  
  return (
    <>
    <HeroSection />
    <HeroSectionContainer />
    <SectionWrap />
    {/* <NewsBlock/> */}
    <ReportBlock />
    <Interesting />
    <PagesHayra />
    <Support />
    <Footer />
    </>
  )
}

export default App
