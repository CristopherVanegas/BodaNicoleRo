import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';
import globoFlotanteIcon from '../../assets/images/icons/globo-flotante-icon.png';

const Countdown = () => {
  const weddingDate = new Date('2025-09-06T11:00:00').getTime(); // Cambia la fecha al día de la boda
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.countdownContainer}>
      <a className={styles.buttonContainer}>
        <img className={styles.globoIcon} src={globoFlotanteIcon} alt="Icono Globo Flotante" />
      </a>
      <p className={styles.invitationText}>
        Cuenta regresiva para iniciar el embarque a la mejor fiesta
      </p>
      <div className={styles.timer}>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>Días</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>Horas</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>Minutos</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
