import "react";
import styles from "./PassportSection.module.css";
import Countdown from "../Countdown/Countdown";
import logoNovios from '../../assets/images/logo/logo-circle.png';

const PassportSection = () => {
  console.log(logoNovios);
  return (
    <section className={styles.passportContainer}>
      <img className={styles.imageContainer} src={logoNovios} alt="Logo Novios" />
      <h1 className={styles.title}>Pasaporte</h1>
      <h2 className={styles.h3}>A la boda de</h2>
      <h2 className={styles.subtitle}>Nicole & Diego</h2>
      <div className={styles.textContainer}>
        <p className={styles.text1}>Después de</p>
        <p className={styles.text2}>14 años juntos</p>
      </div>

      <svg width="400" height="300" viewBox="0 0 500 300">
        <defs>
          <path id="curve" d="M 50,150 A 100,100 0 1,1 450,150 A 100,100 0 1,1 50,150" />
        </defs>

        <text fontFamily="Arial" fontSize="30" fill="black">
          <textPath href="#curve" className={styles.h3}>
            comenzamos un nuevo viaje
          </textPath>
        </text>
      </svg>


      {/* <div className={styles.curvedTextContainer}>
        <p className={styles.textCurve}>comenzamos un nuevo viaje</p>
      </div> */}
      <p className={styles.invitationText}>
        prepara tus maletas y acompáñanos en este viaje
      </p>
      <Countdown />
    </section>
  );
};

export default PassportSection;
