import { ScrollToTop } from '../../share/components/ScrollToTop'
import { Footer } from '../../widgets/footer/Footer'
import { HeroSection } from "../../widgets/HeroSection/HeroSection"
import styles from "./Pages.module.css"
export const HavingHope = () => {
  return (
    <>
    <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        <h3 style={{fontSize: "2rem"}}>
НАДЕЖДА ЕСТЬ ДО ТЕХ ПОР, ПОКА ЕСТЬ ОТЗЫВЧИВЫЕ ЛЮДИ</h3>
        <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste a dignissimos placeat, totam nobis minima ratione consectetur dolor velit quos debitis perspiciatis, delectus suscipit vel inventore esse, numquam explicabo.
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


