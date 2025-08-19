import { ScrollToTop } from '../../../share/components/ScrollToTop'
import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from '../../../widgets/HeroSection/HeroSection'
import styles from "../Pages.module.css"
export const Contacts = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        <h2>Контакты</h2>
        <p>Полное наименование: Автономная некоммерческая организация Центр развития общества «Хайра»

          Краткое наименование: АНО ЦРО «Хайра»

          Время работы: c 9:00 до 18:00

          Рабочие дни: понедельник-пятница

          Адреса пунктов обслуживания:
          г.Грозный, ул. Сайханова, 53

          г. Урус-Мартан, ул. Кадырова, 97

          г. Гудермес, ул. Шоссейная, 33

          Email: info@hayra.ru

          Телефон: +7 (928) 645-55-39</p>
      </div>
      <Footer />
    </>
  )
}


