import "react";
import styles from "./InvitationCard.module.css";
import imagenNovios1Circle from "../../assets/images/novios/1-57.jpeg";
import brujula from "../../assets/images/brujula31.png";
import logo_novios from "../../assets/images/logo/logo-circle.png";
import { usePage } from "../../context/PageContext";

const InvitationCard = () => {
  const { novio_name, novia_name } = usePage();
  return (
    <section className={styles.invitationContainer}>
      <div className={styles.sliderBackground} />

      <div className={styles.invitationBox}>
        <img
          className={styles.imageNovios1Container}
          src={imagenNovios1Circle}
          alt="Logo Novios 1"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>Pasaporte a nuestra boda</h2>
          <p className={styles.linea}></p>
          <div className={styles.invitationContent}>
            <div className={styles.textContent}>
              <p>
                <strong>Fecha:</strong>
                <br /> Septiembre 6 de 2025
              </p>
              <p>
                <strong>Hora:</strong>
                <br />
                11AM
              </p>
              <p>
                <strong>Destino:</strong>
                <br />
                La Quinta de Any - Portoviejo
              </p>
              <p>
                <strong>Iglesia:</strong>
                <br />
                Iglesia Católica del Sagrado Corazón de Jesús - Manta
              </p>
            </div>
            <img
              className={styles.imageContainer}
              src={logo_novios}
              alt="Brujula"
            />
          </div>
          <p className={styles.linea}></p>
          <footer className={styles.footer}>
            <p>{novio_name}</p>
            <p>&</p>
            <p>{novia_name}</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;
