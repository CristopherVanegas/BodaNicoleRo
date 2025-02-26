import 'react';
import styles from './GiftSection.module.css';
import bancoIcon from '../../assets/images/icons/banco-icon.png';
import giftIcon from '../../assets/images/gift.png';

const GiftSection = () => {
  return (
    <section className={styles.giftContainer}>
      <img className={styles.giftIcon} src={giftIcon} alt="Icono Regalo" />
      <h2 className={styles.title}>Regalo en Sobre Sellado</h2>
      <p className={styles.text}>
        Lo más importante es su presencia, pero si deseas hacernos un regalo, aquí dejamos nuestro número de cuenta.
      </p>
      <div className={styles.accountsContainer}>
        <div className={styles.accountBox}>
          <a className={styles.confirmButton} onClick={console.log("Copiado!")}>
            <img className={styles.bancoIcon} src={bancoIcon} alt="Icono Banco" />
          </a>
          <h3>Banco Pichincha</h3>
          <p><strong>Cuenta de Ahorros:</strong> 4227865200</p>
          <p><strong>Titular:</strong>Lorena Álava</p>
        </div>
      </div>

      <div className={styles.envelope}></div>
    </section>
  );
};

export default GiftSection;
