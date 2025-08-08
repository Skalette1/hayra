import React from "react";
import styles from "./Support.module.css";
import support1 from "../../../public/support-1.png";
import support2 from "../../../public/support-2.png";
import support4 from "../../../public/support-4.png";
import support5 from "../../../public/support-5.png";
import {
  FiDollarSign,
  FiUserPlus,
  FiUsers,
  FiArrowRight
} from "react-icons/fi";
import { GiTreeBranch } from "react-icons/gi";

export const Support = () => {
  const blocks = [
    {
      icon: <FiDollarSign />,
      title: "Финансовая поддержка",
      image: support1,
    },
    {
      icon: <FiUserPlus />,
      title: "Станьте донором",
      image: support2,
    },
    {
      icon: <GiTreeBranch />,
      title: `Проект "Дерево в Раю"`,
      image: support4,
    },
    {
      icon: <FiUsers />,
      title: `Стать волонтером`,
      image: support5,
    },
  ];

  return (
    <section className={styles.supportWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.numberCircle}>7</div>
        <div className={styles.numberText}>Поддержка</div>
      </aside>

      <div className={styles.intro}>
        <h2>Поддержите проект</h2>
        <p>Любая помощь — это вклад в лучшее будущее. Финансово, участием или добрым делом.</p>
      </div>

      <div className={styles.cards}>
        {blocks.map((block, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>
              {block.icon}
              <FiArrowRight className={styles.iconArrow} />
            </div>
            <img src={block.image} alt={block.title}/>
            <h3>{block.title}</h3>
            <button className={styles.cta}>
              Подробнее <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
