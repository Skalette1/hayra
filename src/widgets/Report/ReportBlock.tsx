import React from "react";
import report1 from "../../../public/reports-1.png"
import report2 from "../../../public/reports-2.png"
import report3 from "../../../public/reports-3.png"
import styles from "./ReportBlock.module.css"
import { ArrowInSquare } from "../../share/components/NextArrow";

export const ReportBlock = () => {
  return (
    <>
    <div className={styles.ReportContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.numberCircle}>3</div>
        <div className={styles.numberText}>Финансы</div>
      </aside>
      <div className={styles.reportInfo}>
        <h2>Отчеты о деятельност</h2>
      <p>Все поступления и расходы организации подлежат строгому учету</p>
      </div>
    <div className={styles.Report}>
    <div className={styles.reportBlock}>
    <img src={report1} alt="" />
    <div className={styles.reportBottom}>
      <div className={styles.reportMiniBlock}>
        <p>Отчет</p>
        <h5>2024</h5>
      </div>
        <svg
  className={styles.arrow}
    width="50"
    height="50"
    viewBox="0 0 40 40"
    fill="#AE9B31"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="50"
      height="50"
      rx="6"
      fill="#AE9B31"  
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
    </div>
    </div>
    <div className={styles.reportBlock}>
    <img src={report2} alt="" />
    <div className={styles.reportBottom}>
      <div className={styles.reportMiniBlock}>
        <p>Отчет</p>
        <h5>2023</h5>
      </div>
        <svg
  className={styles.arrow}
    width="50"
    height="50"
    viewBox="0 0 40 40"
    fill="#AE9B31"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="50"
      height="50"
      rx="6"
      fill="#AE9B31"  
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
    </div>
    </div>
    <div className={styles.reportBlock}>
    <img src={report3} alt="" />
    <div className={styles.reportBottom}>
      <div className={styles.reportMiniBlock}>
        <p>Отчет</p>
        <h5>2022</h5>
      </div>
        <svg
  className={styles.arrow}
    width="50"
    height="50"
    viewBox="0 0 40 40"
    fill="#AE9B31"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="50"
      height="50"
      rx="6"
      fill="#AE9B31"  
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
    </div>
    </div>
    </div>
    </div>
    </>
  );
};
