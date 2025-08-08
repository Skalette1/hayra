import React from 'react';
import styles from './Weekdays.module.css';
import bg1 from '../../../public/67b4600802e8bd6949017c1c.jpg'
import bg2 from '../../../public/i.webp';
import bg3 from '../../../public/i.webp';

const cardData = [
  {
    id: 1,
    title: 'Помощь в Газе',
    bg: bg1
  },
  {
    id: 2,
    title: 'Ночь в горах',
    bg: bg2
  },
  {
    id: 3,
    title: 'Йога в горах',
    bg: bg3
  }
];

export const Weekdays = () => {
  return (
    <div className={styles.wrapper}>
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`${styles.card} ${styles[`card${card.id}`]}`}
          style={{ backgroundImage: `url(${card.bg})` }}
        >
          <div className={styles.infoCard}>
            <div className={styles.cardTextTop}>
              <div className={styles.levo}>
                <span>{card.title}</span>
              </div>
            </div>
            <div className={styles.hiddenText}>
              <p>
                Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух
                тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, «consectetur» и занялся
                его поисками в классической латинской литературе.
              </p>
              <button>Программа тура</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

