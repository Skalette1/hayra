import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from "../../../widgets/HeroSection/HeroSection"
import styles from "../Pages.module.css"
export const BeVolonteur = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.pageBlock}>
        <h3 style={{ fontSize: "2rem" }}>БУДЬ ВОЛОНТЕРОМ «ХАЙРА»</h3>
        <p>
          Хасайн Магомадов один из активных волонтеров, который с самого начала поддерживают благотворительные акции всеми возможными способами

          Можно помогать не только финансами, но и физически принимать участие в различных акциях, например, в раздаче продуктов, саженцев, проводить досуг детей-сирот, распространять видео- и фото-материал и многое другое

          Вступай в ряды волонтеров прямо сейчас и мы обязательно сделаем мир лучше
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


