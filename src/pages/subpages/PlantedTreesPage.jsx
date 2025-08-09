import { Footer } from '../../widgets/footer/Footer'
import { HeroSection } from "../../widgets/HeroSection/HeroSection"
import styles from "./Pages.module.css"
export const PlantedTreesPage = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.pageBlock}>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Possimus repellat quis commodi debitis, exercitationem distinctio tenetur vero deleniti, architecto ab iusto? Ipsam tempore dolor similique odio? Consectetur nam aspernatur error.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolorum suscipit quae aliquid tempore molestias asperiores porro facilis eligendi, quo reiciendis alias dolorem assumenda pariatur omnis voluptate blanditiis, ducimus ea!
          Sit quibusdam nam delectus illo natus magni id sed quasi mollitia molestiae rem ipsam, aperiam sunt explicabo quia eos voluptatibus odio adipisci soluta maiores! Modi rerum ducimus alias dolorum esse?
          Pariatur consequatur reprehenderit assumenda quasi rem quos cum, sequi asperiores quidem dolore nostrum dignissimos voluptate tempora deleniti recusandae ut aliquid porro modi, omnis explicabo totam quo nesciunt praesentium rerum? Aut!
        </p>
      </div>
      <Footer />
    </>
  )
}


