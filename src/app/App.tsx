import { useState } from 'react'
import { HeroSection } from '../pages/HeroSection'
import { HeroSectionContainer } from '../widgets/heroContainer/HeroContainer'
import { SectionWrap } from '../pages/SectionWrap/SectionWrap'

function App() {
  
  return (
    <>
    <HeroSection />
    <HeroSectionContainer />
    <SectionWrap />
    </>
  )
}

export default App
