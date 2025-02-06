import 'react';
import styles from './PassportSection.module.css';

const PassportSection = () => {
  return (
    <section className={styles.passportContainer}>
      <div className={styles.imageContainer}> {/* Aquí irá la imagen circular */} </div>
      <h1 className={styles.title}>Pasaporte a nuestra boda</h1>
      <h2 className={styles.subtitle}>Novia x Novio</h2>
      <p className={styles.text}>Después de [num de años] juntos</p>
      <p className={styles.invitationText}>&quot;Frase para invitar a la boda&quot;</p>
    </section>
  );
};

export default PassportSection;
