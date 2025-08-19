import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>© 2025 hayra.ru</p>
      </div>
      <div>
        <ul>
          <p>Кто мы</p>
          <li><Link to="/support/BeDonor">Стать донором</Link></li>
          <li><Link to="/support/tree">Проект «Дерево в раю»</Link></li>
        </ul>
      </div>

      <div>
        <ul>
          <p>Проекты</p>
          <li><Link to="/footer/ourchild">Наши дети</Link></li>
          <li><Link to="/footer/productspoor">Продукты малоимущим</Link></li>
        </ul>
      </div>

      <div>
        <ul>
          <p>О нас</p>
          <li><Link to="/footer/read">Читай</Link></li>
          <li><Link to="/footer/historyproject">История проекта</Link></li>
        </ul>
      </div>

      <div>
        <ul>
          <p>Контакты</p>
          <div className={styles.emojiBlock}>
            <li style={{ fontWeight: "600" }}>
              <FiPhone /> +7 (923) 297-77-83  
            </li>
            <li>
              <FiMail /> info@hayra.ru
            </li>
            <li>
              <FiMapPin /> г. Грозный, ул. Сайханова 53
            </li>
          </div>
        </ul>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.storeBtn}>
          <FaApple /> Загрузите в App Store
        </button>
        <button className={styles.storeBtn}>
          <FaGooglePlay /> Загрузите в Google Play
        </button>
      </div>
    </footer>
  );
};
