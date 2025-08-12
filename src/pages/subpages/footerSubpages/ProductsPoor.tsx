import React from "react";
import styles from "../Pages.module.css"
import { Footer } from "../../../widgets/footer/Footer";
import { ScrollToTop } from "../../../share/components/ScrollToTop";
import { HeroSection } from "../../../widgets/HeroSection/HeroSection";

export const ProductsPoor = () => {
  return (
    <>
    <ScrollToTop />
      <HeroSection />
    <div className={styles.pageBlock}>
      <h2>Продукты малоимущим</h2>
      <h5>О проекте:</h5>
      <p>Программа по поддержке малообеспеченных семей продуктами</p>
    </div>
    <Footer />
    </>
  );
};
