import 'react';
import styles from './PassportSection.module.css';
import Countdown from '../Countdown/Countdown';

const PassportSection = () => {
  return (
    <section className={styles.passportContainer}>
      <div className={styles.imageContainer}> {/* Aquí irá la imagen circular */} </div>
      <h1 className={styles.title}>Pasaporte</h1>
      <h2 className={styles.h3}>A la boda de</h2>
      <h2 className={styles.subtitle}>Nicole & Diego</h2>
      <p className={styles.text}>Después de [num de años] juntos</p>
      <p className={styles.invitationText}>&quot;Frase para invitar a la boda&quot;</p>
      <Countdown />
    </section>
  );
};

export default PassportSection;
