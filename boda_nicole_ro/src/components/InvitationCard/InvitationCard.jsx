import 'react';
import styles from './InvitationCard.module.css';

const InvitationCard = () => {
  return (
    <section className={styles.invitationContainer}>
      <div className={styles.invitationBox}>
        <h2 className={styles.title}>Invitación</h2>
        <p><strong>Fecha:</strong> [Fecha]</p>
        <p><strong>Hora:</strong> [Hora]</p>
        <p><strong>Destino:</strong> [Lugar]</p>
        <p><strong>Iglesia:</strong> [Iglesia]</p>
        <p><strong>Banquete:</strong> [Empresa del Banquete]</p>
        <footer className={styles.footer}>[Footer de la invitación]</footer>
      </div>
    </section>
  );
};

export default InvitationCard;
