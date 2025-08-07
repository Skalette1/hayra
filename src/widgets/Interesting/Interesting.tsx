import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FiGlobe } from "react-icons/fi";
import styles from "./Interesting.module.css";
import { ArrowInSquare } from "../../share/components/NextArrow";
import { ArrowLeftInSquare } from "../../share/components/PrevArrow";

const items = [
  "ДОБРО — ЭТО СИЛА, КОТОРУЮ МЫ СОЗДАЁМ ВМЕСТЕ",
  "КАК ОДИН ПОСТ МОЖЕТ ИЗМЕНИТЬ ЧЬЮ-ТО СУДЬБУ",
  "СТАНЬ ГЕРОЕМ — ПРИСОЕДИНЯЙСЯ К «ХАЙРУ»",
  "МАЛЕНЬКОЕ ДЕЛО — БОЛЬШОЙ РЕЗУЛЬТАТ",
  "ТВОЁ ВРЕМЯ — ЧЬЯ-ТО НАДЕЖДА",
];

export const Interesting = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className={styles.interesting}>
      <aside className={styles.sidebar}>
        <div className={styles.numberCircle}>4</div>
        <div className={styles.numberText}>Интересно</div>
      </aside>

      <div className={styles.content}>
        <header className={styles.header}>
          <h2>Интересное о благотворительности</h2>
          <p>Факты о благотворительности, о которых вы могли не знали</p>
        </header>

        <Swiper
          modules={[Navigation, Pagination]}
          loop
          speed={700}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          className={styles.swiper}
        >
          {items.map((text, idx) => (
            <SwiperSlide key={idx}>
              <button className={styles.slideButton} type="button">
                <div className={styles.icons}>
                  <FiGlobe size={28} />
                </div>
                <h3>{text}</h3>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки под слайдером */}
        <div className={styles.navButtonsWrapper}>
          <button
            ref={prevRef}
            className={styles.navButton1}
            aria-label="Previous slide"
          >
            <ArrowLeftInSquare size={28} />
          </button>
          <button
            ref={nextRef}
            className={styles.navButton2}
            aria-label="Next slide"
          >
            <ArrowInSquare size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};
