import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaVk, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import styles from "./PagesHayra.module.css"

export const PagesHayra = () => {
  return (
    <>
    <div className={styles.PagesHayra}>
      <div className={styles.number}>
        <p>6</p>
        <span>Акции</span>
      </div>
      <h2>Страницы Хайра в социальных сетях</h2>
      <p>Подпишитесь на обновления наших страниц</p>
      <div className={styles.pagesContainer}>
        <button>
          <div className={styles.btnTop}>
            <FaVk />
            <FiArrowRight />
          </div>
          Вконтакте
        </button>
        <button>
          <div className={styles.btnTop}>
            <FaTelegramPlane />
            <FiArrowRight />
          </div>
          Телеграм
        </button>
        <button>
          <div className={styles.btnTop}>
            <FaInstagram />
            <FiArrowRight />
          </div>
          Инстаграмм
        </button>
      </div>
    </div>
    </>
  );
};
