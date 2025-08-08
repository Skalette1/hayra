import { useState } from 'react'
import { HeroSection } from '../widgets/HeroSection/HeroSection'
import { HeroSectionContainer } from '../widgets/heroContainer/HeroContainer'
import { SectionWrap } from '../widgets/SectionWrap/SectionWrap'
import { Footer } from '../widgets/footer/Footer'
import { PagesHayra } from '../widgets/PagesHayra/PagesHayra'
import { Interesting } from '../widgets/Interesting/Interesting'
import { ReportBlock } from '../widgets/Report/ReportBlock'
import { Support } from '../widgets/Support/Support'
import { Weekdays } from '../widgets/Weekdays/Weekdays'
import Map from '../widgets/Map/Map'

export const MainPage = () => {
  
  return (
    <>
    <HeroSection />
    <HeroSectionContainer />
    <SectionWrap />
    <Weekdays />
    <ReportBlock />
    <Interesting />
    <PagesHayra />
    <Support />
    <Map />
    <Footer />
    </>
  )
}


