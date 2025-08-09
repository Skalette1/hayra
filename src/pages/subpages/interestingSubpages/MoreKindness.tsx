import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from "../../../widgets/HeroSection/HeroSection"
import styles from "../Pages.module.css"
export const MoreKindness = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.pageBlock}>
        <h3 style={{ fontSize: "2rem" }}>ТЕПЕРЬ ДОБРА <br />БУДЕТ ЕЩЕ БОЛЬШЕ</h3>
        <p>
          Мы сможем помогать людям в их беде если для этого потребуется большие деньги

          Наш народ всегда отзывался на чужую боль и готов помогать. Мы будем координировать добрых людей, чтобы решить проблемы неимущих

          Совместно с Департаментом по взаимодействию с религиозными и общественными организациями Администрации Главы и Правительства Чеченской Республики будем открывать срочные сборы, чтобы помогать тем, кто оказался в беде
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


