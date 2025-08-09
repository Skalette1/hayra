import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from "../../../widgets/HeroSection/HeroSection"
import styles from "../Pages.module.css"
export const YourTime = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.pageBlock}>
        <h3 style={{ fontSize: "2rem" }}>ЕСТЬ ОТЗЫВЧИВЫЕ ЛЮДИ

          ТВОЁ ВРЕМЯ — ЧЬЯ-ТО НАДЕЖДА</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquam cum eum porro temporibus consequatur maiores, quibusdam neque ad eaque assumenda ex placeat nisi sint omnis dolorem dolore facere possimus.
          Quis harum eius voluptatum sequi vitae. Impedit eaque mollitia reiciendis quod modi vero numquam, sint inventore eum perferendis dolor praesentium quis doloribus nemo qui officia nihil enim. Tempore, debitis iusto!
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


