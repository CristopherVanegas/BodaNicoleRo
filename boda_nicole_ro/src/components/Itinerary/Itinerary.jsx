import 'react';
import styles from './Itinerary.module.css';
import itineraryImage from '../../assets/images/itinerario/Itinerario.jpg'; // Ruta de la imagen en PNG

const Itinerary = () => {
  return (
    <section className={styles.itineraryContainer}>
      <div className={styles.sliderBackground} />
      <div className={styles.content}>
        <h2 className={styles.title}>Itinerario</h2>
        <p className={styles.text}>Aquí tienes el plan de nuestro gran día. ¡Esperamos que lo disfrutes!</p>

        <div className={styles.imageContainer}>
          <img src={itineraryImage} alt="Itinerario de la boda" className={styles.itineraryImage} />
        </div>
      </div>

    </section>
  );
};

export default Itinerary;
