import { useEffect } from 'react'
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
  useEffect(() => {
    const restore = () => {
      const saved = sessionStorage.getItem('mainScrollY');
      if (saved) {
        const y = Number(saved);
        if (!Number.isNaN(y)) {
          window.scrollTo({ top: y, behavior: 'auto' });
        }
      }
    };

    // Несколько попыток восстановления из-за ленивой загрузки контента
    restore();
    const rafId = requestAnimationFrame(restore);
    const t1 = window.setTimeout(restore, 80);
    const t2 = window.setTimeout(restore, 200);

    const images = Array.from(document.images).filter(img => !img.complete);
    const onImg = () => restore();
    images.forEach(img => img.addEventListener('load', onImg, { once: true }));

    return () => {
      sessionStorage.setItem('mainScrollY', String(window.scrollY));
      cancelAnimationFrame(rafId);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      images.forEach(img => img.removeEventListener('load', onImg));
    };
  }, []);

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


