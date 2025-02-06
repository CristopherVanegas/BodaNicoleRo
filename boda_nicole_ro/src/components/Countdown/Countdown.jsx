import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

const Countdown = () => {
  const weddingDate = new Date('2025-06-15T00:00:00').getTime(); // Cambia la fecha al día de la boda
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
