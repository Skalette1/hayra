import React from 'react';
import styles from './Weekdays.module.css';
import bg1 from '../../../public/67b4600802e8bd6949017c1c.jpg'
import bg2 from '../../../public/5848.jpg';
import bg3 from '../../../public/i.webp';

const cardData = [
  {
    id: 1,
    title: 'Помощь в Газе',
    text: `Газа — это не просто место на карте. Это крик боли, разрывающий сердца. 
Дети засыпают среди руин, матери сжимают губы, чтобы не кричать, старики смотрят в пустоту без надежды.

Ты можешь остаться в стороне. А можешь выбрать путь милосердия — путь, ведущий к довольству Всевышнего.`,
    bg: bg1
  },
  {
    id: 2,
    title: 'Поддержка',
    text: `Каждый день тысячи семей живут в условиях, где даже стакан чистой воды — роскошь. 
Мы доставляем еду, воду, одежду тем, кто лишён самого необходимого.

Твоя поддержка — это не просто помощь. Это надежда, обретённая заново.`,
    bg: bg2
  },
  {
    id: 3,
    title: 'Сила волонтёров',
    text: `Они не носят плащей, но совершают подвиги каждый день. Волонтёры — сердце нашей миссии. 
Они идут туда, где боль и тьма, чтобы зажечь свет сострадания и заботы.

Присоединяйся — измени чью-то жизнь, начав с малого.`,
    bg: bg3
  }
];


export const Weekdays = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wr}>  
      <aside className={styles.sidebar}>
        <div className={styles.numberCircle}>2</div>
        <div className={styles.numberText}>Будни</div>
      </aside>
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
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

