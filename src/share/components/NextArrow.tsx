import React from "react";
import styles from "./components.module.css"

export const ArrowInSquare = () => (
  <svg
  className={styles.arrow}
    width="50"
    height="50"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="50"
      height="50"
      rx="6"
      fill="#209550ff"  
    />
    <path
      d="M15 20H25"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 15L25 20L20 25"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
