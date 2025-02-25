import "react";
import styles from "./PassportSection.module.css";
import logoNovios from '../../assets/images/logo/logo-circle.png';

const PassportSection = () => {
  return (
    <section className={styles.passportContainer} id="PassportSection">
      <div className={styles.sliderBackground} />
      <div className={styles.content}>
        <img className={styles.imageContainer} src={logoNovios} alt="Logo Novios" />
        <h1 className={styles.title}>Pasaporte</h1>
        <h2 className={styles.h3}>A la boda de</h2>
        <h2 className={styles.subtitle}>Nicole & Diego</h2>
      </div>
    </section>
  );
};

export default PassportSection;
