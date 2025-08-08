import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaVk, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import styles from "./PagesHayra.module.css"

export const PagesHayra = () => {
  return (
    <>
    <div className={styles.hayr}>
      <aside className={styles.sidebar}>
        <div className={styles.numberCircle}>5</div>
        <div className={styles.numberText}>Соцсети</div>
      </aside>
    <div className={styles.PagesHayra}>
      <div className={styles.str}>
      <h2>Страницы Хайра в социальных сетях</h2>
      <p>Подпишитесь на обновления наших страниц</p>
      </div>
      <div className={styles.pagesContainer}>
        <button>
          <div className={styles.btnTop}>
            <FaVk />
            <FiArrowRight />
          </div>
          <h3>Вконтакте</h3>
        </button>
        <button>
          <div className={styles.btnTop}>
            <FaTelegramPlane />
            <FiArrowRight />
          </div>
          <h3>Телеграм</h3>
        </button>
        <button>
          <div className={styles.btnTop}>
            <FaInstagram />
            <FiArrowRight />
          </div>
          <h3>Инстаграмм</h3>
        </button>
      </div>
    </div>
    </div>
    </>
  );
};
