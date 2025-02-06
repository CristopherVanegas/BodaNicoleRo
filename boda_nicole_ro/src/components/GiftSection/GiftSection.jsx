import 'react';
import styles from './GiftSection.module.css';

const GiftSection = () => {
  return (
    <section className={styles.giftContainer}>
      <h2 className={styles.title}>Regalo en Sobre Sellado</h2>
      <p className={styles.text}>
        Si deseas obsequiarnos un regalo, te agradecemos tu apoyo a través de un sobre sellado o una transferencia a las siguientes cuentas:
      </p>

      <div className={styles.accountsContainer}>
        <div className={styles.accountBox}>
          <h3>🏦 Banco XYZ</h3>
          <p><strong>Número de Cuenta:</strong> 1234567890</p>
          <p><strong>Titular:</strong> Nombre del Novio/a</p>
        </div>

        <div className={styles.accountBox}>
          <h3>🏦 Banco ABC</h3>
          <p><strong>Número de Cuenta:</strong> 0987654321</p>
          <p><strong>Titular:</strong> Nombre del Novio/a</p>
        </div>
      </div>

      <div className={styles.envelope}></div>
    </section>
  );
};

export default GiftSection;
