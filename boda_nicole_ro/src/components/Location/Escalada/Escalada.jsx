import "react";
import styles from "./Escalada.module.css";
import iconoMaps from "../../../assets/images/icons/google-maps-icon.png";

const Escalada = () => {
  return (
    <div className={styles.content}>
      <div className={styles.locationBox}>
        <h3 className={styles.title}>Primera Escalada</h3>
        <p>Iglesia Católica del Sagrado Corazón de Jesús</p>
        <p>Manta</p>
        <a
          href="https://www.google.com/maps/place/Iglesia+Cat%C3%B3lica+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs+%7C+Manta/@-0.9646243,-80.7620473,17z/data=!3m1!4b1!4m6!3m5!1s0x902be149c2dd307d:0xc81c02728b946620!8m2!3d-0.9646297!4d-80.7594724!16s%2Fg%2F11fph32wq4?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
        >
          <p>Google Maps link</p>
          <img
            src={iconoMaps}
            alt="Icono Google Maps"
            className={styles.mapIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default Escalada;
