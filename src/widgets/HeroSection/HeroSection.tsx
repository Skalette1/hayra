import { useState, useEffect } from "react";
import logo from "../../../public/logo (1).svg";
import styles from "./HeroSection.module.css";

const LampIcon = ({ on }: { on: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.lampIcon}
  >
    {/* hook/loop */}
    <path d="M12 2c1.5 0 2.5 1.2 2.5 2.2 0 .6-.3 1.1-.7 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* short ring */}
    <path d="M12 5.7v2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* cap */}
    <path d="M9.5 8.2h5a.8.8 0 0 1 .8.8v.6H8.7V9a.8.8 0 0 1 .8-.8Z" fill="currentColor" />
    {/* shade */}
    <path d="M7 10h10l-2 5H9l-2-5Z" fill="currentColor" />
    {/* bulb */}
    <circle cx="12" cy="15.3" r="1.4" fill={on ? "#FFD54D" : "none"} stroke={on ? "#FFD54D" : "currentColor"} strokeWidth="1.2" />
    {/* subtle glow when on */}
    {on && (
      <g opacity="0.5">
        <path d="M6 16.5h12" stroke="#FFD54D" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7.5 18.2h9" stroke="#FFD54D" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    )}
  </svg>
);

export const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );
  const [isSwinging, setIsSwinging] = useState(false);

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

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    const root = document.documentElement;
    if (nextDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // trigger swing animation
    setIsSwinging(true);
    window.setTimeout(() => setIsSwinging(false), 650);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />

      <div className={styles.controls}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={isDark ? "Светлая тема" : "Темная тема"}
          title={isDark ? "Светлая тема" : "Темная тема"}
        >
          <span className={`${styles.lampWrap} ${isSwinging ? styles.swing : ''}`}>
            <LampIcon on={isDark} />
          </span>
        </button>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>


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
