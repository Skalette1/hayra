import React, { useState, useEffect } from "react";
import logo from "../../../public/logo (1).svg";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />

 <button
  className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Menu"
>
  <span className={styles.burgerLine}></span>
  <span className={styles.burgerLine}></span>
  <span className={styles.burgerLine}></span>
</button>


      <nav className={menuOpen ? `${styles.open}` : ""}>
        <ul>
          <li>Кто мы</li>
          <li>Чем мы занимаемся</li>
          <li>Контакты</li>
          {isMobile && (
            <>
              <li>Финансовый отчет</li>
              <li>Официальные документы</li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
