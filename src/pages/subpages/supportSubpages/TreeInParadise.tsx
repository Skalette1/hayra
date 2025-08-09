import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from "../../../widgets/HeroSection/HeroSection"
import styles from "../Pages.module.css"
export const TreeInParadise = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.pageBlock}>
        <h3 style={{ fontSize: "2rem" }}>Дерево в Раю</h3>
        <p style={{textAlign: "left"}}>
        1 000 000 молодых плодовых деревьев посадим вместе с вами, чтобы наша земля цвела.
Программа «Дерево в раю» разработана с целью:
— улучшить климат региона;
— сделать республику привлекательной для туристов и инвестиций;
— обеспечить пропитанием людей и животных;
— обрести довольство Господа миров!
Ты тоже можешь принять участие в садака Джария — приобрести дерево или пожертвовать средства на закупку, а также можно посадить дерево в общественном месте.
109 800 деревьев уже посажено.
Одно дерево стоит 200₽
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


