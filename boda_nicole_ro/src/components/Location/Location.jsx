import 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <section className={styles.locationContainer}>
      <h2 className={styles.title}>Destino e Iglesia</h2>
      
      <div className={styles.locationBox}>
        <h3>Iglesia</h3>
        <p>[Nombre de la Iglesia]</p>
        <p>[Dirección de la Iglesia]</p>
        <a 
          href="https://www.google.com/maps" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.mapButton}
        >
          Ver en Google Maps
        </a>
      </div>

      <div className={styles.locationBox}>
        <h3>Recepción</h3>
        <p>[Lugar de la Recepción]</p>
        <p>[Dirección de la Recepción]</p>
        <a 
          href="https://www.google.com/maps" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.mapButton}
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
};

export default Location;
