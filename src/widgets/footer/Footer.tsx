import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>© 2025 hayra.ru</p>
      </div>
      <div>
        <ul>
          <p>Кто мы</p>
          <li>Стать донором</li>
          <li>Проект «Дерево в раю»</li>
        </ul>
      </div>

      <div>
        <ul>
          <p>Наши акции</p>
          <li>Благотворительные сборы</li>
          <li>Мероприятия</li>
        </ul>
      </div>

      <div>
        <ul>
          <p>О нас</p>
          <li>Новости</li>
          <li>История проекта</li>
        </ul>
      </div>

      <div>
        <ul>
          <p>Контакты</p>
          <div className={styles.emojiBlock}>
            <li style={{ fontWeight: "600" }}>
              <FiPhone /> +7 (928) 645-55-39
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
