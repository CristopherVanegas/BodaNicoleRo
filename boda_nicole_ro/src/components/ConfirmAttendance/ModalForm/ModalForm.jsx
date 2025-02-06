import 'react';
import PropTypes from 'prop-types';
import styles from './ModalForm.module.css';

const ModalForm = ({ onClose }) => {
  
  // Función que detecta clics en el overlay y cierra el modal
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Llama a la función para cerrar el modal
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <h3>Confirma tu asistencia</h3>
        <form>
          <label>Nombre Completo</label>
          <input type="text" required />

          <label>¿Asistirás?</label>
          <select required>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>

          <label>Alergias</label>
          <input type="text" placeholder="Opcional" />

          <label>Proponer una canción</label>
          <input type="text" placeholder="Opcional" />

          <label>Comentarios</label>
          <textarea rows="3" placeholder="Opcional"></textarea>

          <div className={styles.buttonGroup}>
            <button type="submit">Enviar</button>
            <button type="button" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Validación de props con PropTypes
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
