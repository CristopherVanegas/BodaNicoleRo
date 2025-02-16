import 'react';
import styles from './InvitationCard.module.css';
import imagenNovios1Circle from '../../assets/images/novios/1.jpeg';

const InvitationCard = () => {
  return (
    <section className={styles.invitationContainer}>
      <div className={styles.invitationBox}>
        <img className={styles.imageNovios1Container} src={imagenNovios1Circle} alt="Logo Novios 1" />
        <h2 className={styles.title}>Invitación</h2>
        <p><strong>Fecha:</strong> Septiembre 6 de 2025</p>
        <p><strong>Hora:</strong>11AM</p>
        <p><strong>Destino:</strong>La Quinta</p>
        <p><strong>Iglesia:</strong>Iglesia católica del sagrado corazón - Manta</p>
        <p><strong>Banquete:</strong> [Empresa del Banquete]</p>
        <footer className={styles.footer}>Nicole & Diego</footer>
      </div>
    </section>
  );
};

export default InvitationCard;
