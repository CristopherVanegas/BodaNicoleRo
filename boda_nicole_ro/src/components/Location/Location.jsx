import 'react';
import styles from './Location.module.css';
import compassImage from '../../assets/images/brujula31.png';
import Escalada from './Escalada/Escalada';
import Destino from './Destino/Destino';

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      <section className={styles.section}>
        <div className={styles.sliderBackground} />
        <Escalada />
      </section >
      <img className={styles.compassImage} src={compassImage} alt="Compass Icon" />

      <section className={styles.section}>
        <div className={styles.sliderBackground} />
        <Destino />
      </section >
    </div>
  );
};

export default Location;
