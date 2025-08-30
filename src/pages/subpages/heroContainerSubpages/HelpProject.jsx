import { ScrollToTop } from "../../../share/components/ScrollToTop";
import { Footer } from "../../../widgets/footer/Footer";
import { HeroSection } from "../../../widgets/HeroSection/HeroSection";
import styles from "../Pages.module.css";

export const HelpProject = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        <h2 className={styles.title}>Поддержите наш проект</h2>
        <p className={styles.description}>
          Каждое ваше пожертвование помогает нам продолжать работу и оказывать
          помощь тем, кто в этом нуждается. В скором времени здесь появится
          интеграция с безопасной оплатой через Stripe.
        </p>

        <div className={styles.donateCard}>
          <button
            className={styles.donateButton}
            onClick={() => alert("Stripe интеграция скоро будет доступна!")}
          >
            💳 Поддержать через Stripe
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
