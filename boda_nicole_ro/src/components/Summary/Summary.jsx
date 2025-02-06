import 'react';
import styles from './Summary.module.css';

const Summary = () => {
  return (
    <section className={styles.summaryContainer}>
      <div className={styles.summaryBox}>
        <h2 className={styles.title}>¡Nos Casamos!</h2>
        
        <p className={styles.detail}><strong>📅 Fecha:</strong> 15 de Junio de 2025</p>
        <p className={styles.detail}><strong>⏰ Hora:</strong> 4:00 PM</p>
        <p className={styles.detail}><strong>📍 Lugar:</strong> Iglesia San Pedro, Quito</p>

        <p className={styles.finalMessage}>No te lo puedes perder. ¡Te esperamos con mucha emoción!</p>
      </div>
    </section>
  );
};

export default Summary;
