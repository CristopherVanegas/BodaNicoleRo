import "react";
import { usePage } from "../../context/PageContext";

import styles from "./Summary.module.css";
import equip from "./../../assets/images/gif/equip1.gif";
import brujula from "../../assets/images/brujula31.png";

const Summary = () => {
  const { novio_name, novia_name } = usePage();
  return (
    <section className={styles.summaryContainer}>
      <div className={styles.sliderBackground} />
      <div className={styles.brujula}>
        <img className={styles.imageContainer} src={brujula} alt="Brujula" />
      </div>
      <div className={styles.summaryBox}>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>{novio_name}</p>
            <p>&</p>
            <p>{novia_name}</p>
          </div>

          <p className={styles.linea}></p>
          <div className={styles.detailSection}>
            <p className={styles.detail}>
              <strong>📅 Fecha</strong>06 / 09 / 2025
            </p>
            <p className={styles.detail}>
              <strong>⏰ Hora</strong>4:00 PM
            </p>
            <p className={styles.detail}>
              <strong>📍 Lugar</strong>Manta
            </p>
          </div>
          <p className={styles.linea}></p>

          <footer>
            <p className={styles.finalMessage}>
              El único equipaje que necesitas son las ganas de pasarlo bien
            </p>
            <a href="#PassportSection">
              <img src={equip} className={styles.equipaje} alt="Gif equipaje" />
            </a>
            <p className={styles.finalMessage}>¡Te esperamos!</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Summary;
