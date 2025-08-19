import { ScrollToTop } from '../../../share/components/ScrollToTop'
import { Footer } from '../../../widgets/footer/Footer'
import { HeroSection } from "../../../widgets/HeroSection/HeroSection"
import styles from "../Pages.module.css"
export const GetHelp = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        <h2>Получить помощь</h2>
        <p style={{ textAlign: "left" }}>
          Наша организация реализует 10 социальных программ: <br />
          — продуктовая помощь (Баракат);<br />
          — помощь в одежде (Бутик добра);<br />
          — выдача инвалидной атрибутики и помощь в лечении (Доктор Хайра);<br />
          — жилищная помощь (Свой дом);<br />
          — обеспечение донорской кровью (Я донор);<br />
          — финансовая помощь студентам из малоимущих семей (Студент);<br />
          — помощь учителям дополнительного образования (Читай);<br />
          — выделение денег на начало своего дела (Свое дело);
          — помощь сиротам (Наши дети);<br />
          — посадка деревьев (Дерево в Раю).<br />

          Если Вам нужна помощь, напишите нам. Диспетчер проинформирует Вас обо всем.
        </p>
        <a href="https://wa.me/79232977783" target="_blank">Написать в WhatsApp</a>

      </div>
      <Footer />
    </>
  )
}


