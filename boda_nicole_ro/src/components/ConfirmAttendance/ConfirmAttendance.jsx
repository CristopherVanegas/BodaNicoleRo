import  { useState } from 'react';
import styles from './ConfirmAttendance.module.css';
import ModalForm from './ModalForm/ModalForm';

const ConfirmAttendance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.attendanceContainer}>
      <h2 className={styles.title}>Confirmar Asistencia</h2>
      <button className={styles.confirmButton} onClick={() => setIsOpen(true)}>
        Confirmar Asistencia
      </button>
      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default ConfirmAttendance;
