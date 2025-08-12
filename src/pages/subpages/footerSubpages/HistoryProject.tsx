import React from "react";
import styles from "../Pages.module.css"
import { ScrollToTop } from "../../../share/components/ScrollToTop";
import { HeroSection } from "../../../widgets/HeroSection/HeroSection";
import { Footer } from "../../../widgets/footer/Footer";

export const HistoryProject = () => {
  return (
    <>
    <ScrollToTop />
      <HeroSection />
    <div className={styles.pageBlock}>
      <h2>Наша история</h2>
      <h5>как все начиналось:</h5>
      <p>Программа по поддержке малообеспеченных семей продуктами</p>
    </div>
    <Footer />
    </>
  );
};
