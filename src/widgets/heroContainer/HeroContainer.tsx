import React from "react";
import styles from "./HeroContainer.module.css"
import phone from "../../../public/phone.png"
import video from "../../../public/IMG_1411.MP4"
import { Link } from "react-router-dom";
export const HeroSectionContainer = () => {
  return (
    <>
    <div className={styles.HeroSectionContainer}>
    <div className={styles.heroSectionLeft}>
      <p>Cообщество активистов, занимающихся общественно-полезным делом</p>
      <div className={styles.heroSectionLeftBottom}>
        <h3>SOCIAL ORGANIZATION</h3>
        <h1>Hayra</h1>
      </div>
    </div>
    <div className={styles.heroSectionRight}>
      <div className="">
      <h3 style={{fontSize: "4rem"}}>#доброрядом</h3>
      <div className={styles.heroSectionRightBtnCont}>
  <button className={styles.supportBtn}><Link to={"/HelpProject"}>Поддержать проект</Link></button>
  <button className={styles.helpBtn}><Link to="/getHelp">Получить помощь</Link></button>
</div>
      </div>
<img src={phone} alt="phone" className={styles.heroPhone}/>
    </div>
    </div>
  <video
  src={video}
  autoPlay
  loop
  muted
  playsInline
/>
    </>
  );
};
