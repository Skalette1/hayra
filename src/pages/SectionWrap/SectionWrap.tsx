import React from "react";
import styles from "./SectionWrap.module.css"
import volunteers from "../../../public/stock.png"
import apple from "../../../public/dbTYauJAAy2qpgArT1Aonlg8aKxdOvOY-DjTNjeQsyl6DkoWxCrRnuK3aS-jTcKSbRT6uGfu.jpg"

export const SectionWrap = () => {
  return (
    <>
    <div className={styles.sectionWrap}>
      <div className={styles.top}>
        <h2>109 800</h2>
      </div>
      <div className={styles.number}>
        <p>1</p>
        <span>Акции</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.imgContainer}>
        <img src={volunteers} alt="volunteers" className={styles.volunteers}/>
        <img src={apple} alt="hand with apple" className={styles.appleHand}/>
        </div>
        <div className={styles.bottomRight}>
          <h3>деревьев посажено</h3>
          <p>В рамках проекта Дерево в Раю</p>
          <button>Подробнее про акцию</button>
        </div>
      </div>
    </div>
    </>
  );
};
