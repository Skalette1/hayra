import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from "../../../widgets/HeroSection/HeroSection"
import styles from "../Pages.module.css"
export const WhoInterferes = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.pageBlock}>
        <h3 style={{ fontSize: "2rem" }}>КТО МЕШАЕТ СДЕЛАТЬ ДОБРОЕ ДЕЛО?</h3>
        <p>
          Между твоим намерением и действием иногда только несколько кликов

          Конечно, в последнее время немного усложнился процесс с переводами денег, карты то и дело блокируют

          Но самый верный способ перевод на благотворительность по Qr-код

          Не позволяйте этим изменениям встать между вами и благим делом, потому, как Всевышний обещал лучший удел тем, кто жертвует во благо неимущих
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


