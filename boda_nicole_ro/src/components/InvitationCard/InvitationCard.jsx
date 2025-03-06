import 'react';
import styles from './InvitationCard.module.css';
import imagenNovios1Circle from '../../assets/images/novios/1-57.jpeg';
import brujula from '../../assets/images/brujula31.png';
import logo_novios from "../../assets/images/logo/logo-circle.png";

const InvitationCard = () => {
  return (
    <section className={styles.invitationContainer}>
      <div className={styles.sliderBackground} />

      <div className={styles.invitationBox}>
        <img className={styles.imageNovios1Container} src={imagenNovios1Circle} alt="Logo Novios 1" />
        <div className={styles.content}>
          <h2 className={styles.title}>Pasaporte a nuestra boda</h2>
          <p className={styles.linea}></p>
          <div className={styles.invitationContent}>
            <div className={styles.textContent}>
              <p><strong>Fecha:</strong><br /> Septiembre 6 de 2025</p>
              <p><strong>Hora:</strong><br />11AM</p>
              <p><strong>Destino:</strong><br />La Quinta</p>
              <p><strong>Iglesia:</strong><br />Iglesia católica del sagrado corazón - Manta</p>
              <p><strong>Banquete:</strong><br /> [Empresa del Banquete]</p>
            </div>
            <img className={styles.imageContainer} src={logo_novios} alt="Brujula" />
          </div>
          <p className={styles.linea}></p>
          <footer className={styles.footer}>
            <p>Nicole</p>
            <p>&</p>
            <p>Diego</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;
