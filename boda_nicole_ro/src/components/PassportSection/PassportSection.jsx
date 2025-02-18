import "react";
import styles from "./PassportSection.module.css";
import Countdown from "../Countdown/Countdown";
import logoNovios from '../../assets/images/logo/logo-circle.png';

const PassportSection = () => {
  console.log(logoNovios);
  return (
    <section className={styles.passportContainer}>
      <div className={styles.content1}>
        <div className={styles.sliderBackground} />
        <div className={styles.content}>
          <img className={styles.imageContainer} src={logoNovios} alt="Logo Novios" />
          <h1 className={styles.title}>Pasaporte</h1>
          <h2 className={styles.h3}>A la boda de</h2>
          <h2 className={styles.subtitle}>Nicole & Diego</h2>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.sliderBackground2} />
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.text1}>Después de</p>
            <p className={styles.text2}>14 años juntos</p>
          </div>
          <p className={styles.invitationText}>
            prepara tus maletas y acompáñanos en este viaje
          </p>
          <Countdown />
        </div>
      </div>
    </section>
  );
};

export default PassportSection;
