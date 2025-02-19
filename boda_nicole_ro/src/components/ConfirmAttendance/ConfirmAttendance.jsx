import { useState } from 'react';
import styles from './ConfirmAttendance.module.css';
import ModalForm from './ModalForm/ModalForm';
import logoNovios from '../../assets/images/logo/logo-circle.png';
import passportIcon from '../../assets/images/icons/passport-icon2.png';

const ConfirmAttendance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.attendanceContainer}>
      <div className={styles.sliderBackground} />
      <div className={styles.content}>
        <img className={styles.imageContainer} src={logoNovios} alt="Logo Novios" />
        <h2 className={styles.title}>Asistencia</h2>
        <p className={styles.invitationText}>Haz click sobre la imagen de pasaporte para confirmar tu presencia</p>
        <a className={styles.confirmButton} onClick={() => setIsOpen(true)}>
          <img className={styles.passportIcon} src={passportIcon} alt="Icono Pasaporte" />
        </a>
      </div>
      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default ConfirmAttendance;
