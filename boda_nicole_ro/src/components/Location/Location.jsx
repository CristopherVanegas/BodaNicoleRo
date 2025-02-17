import 'react';
import styles from './Location.module.css';
import iconoMaps from '../../assets/images/icons/maps-icon.png';

const Location = () => {
  return (
    <section className={styles.locationContainer}>
      {/* <h2 className={styles.title}>Destino e Iglesia</h2> */}

      <div className={styles.locationBox}>
        <h3 className={styles.title}>Escalada</h3>
        <p>Iglesia católica del sagrado corazón</p>
        <p>Manta</p>
        <a
          href="https://www.google.com/maps/place/Iglesia+Cat%C3%B3lica+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs+%7C+Manta/@-0.9646243,-80.7620473,17z/data=!3m1!4b1!4m6!3m5!1s0x902be149c2dd307d:0xc81c02728b946620!8m2!3d-0.9646297!4d-80.7594724!16s%2Fg%2F11fph32wq4?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
        >
          <img
            src={iconoMaps}
            alt="Icono Google Maps"
            className={styles.mapIcon}
          />
        </a>
      </div>

      <div className={styles.locationBox}>
        <h3 className={styles.title}>Destino</h3>
        <p>La Quinta de Any</p>
        <p>Portoviejo</p>
        <a
          href="https://www.google.com/maps/place/La+Quinta+de+Any/@-0.9863668,-80.4597083,17z/data=!3m1!4b1!4m6!3m5!1s0x902becb5dd079873:0x7eb5b1bd3ef2952a!8m2!3d-0.9863668!4d-80.4597083!16s%2Fg%2F11dzzlvq1c?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
        >
          <img
            src={iconoMaps}
            alt="Icono Google Maps"
            className={styles.mapIcon}
          />
        </a>
      </div>
    </section>
  );
};

export default Location;
