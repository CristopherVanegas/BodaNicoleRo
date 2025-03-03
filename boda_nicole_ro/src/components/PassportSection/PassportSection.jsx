import "react";
import styles from "./PassportSection.module.css";
import logoNovios from "../../assets/images/logo/logo-circle.png";
import brujula from "../../assets/images/brujula31.png";
import Balloon from "../Extras/Balloon/Balloon";
// import Rope from "../Extras/Rope/Rope";

const PassportSection = () => {
  return (
    <section className={styles.passportContainer} id="PassportSection">
      <div className={styles.sliderBackground} />
      <h1 className={styles.title}>Pasaporte</h1>
      <div className={styles.ballonSection}>
        <Balloon className={styles.ballonSection} />
        <img className={styles.brujula} src={brujula} alt="Brujula" />
      </div>
      <div className={styles.content}>
        <img
          className={styles.imageContainer}
          src={logoNovios}
          alt="Logo Novios"
        />
        <h2 className={styles.h3}>A la boda de</h2>
        <h2 className={styles.subtitle}>Nicole & Diego</h2>
      </div>
    </section>
  );
};

export default PassportSection;
