import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalForm.module.css';

const ModalForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    asistencia: 'sí',
    alergias: '',
    cancion: '',
    comentarios: ''
  });

  const googleScriptURL = "https://script.google.com/macros/s/AKfycbzQLbCZcFiWckRFwL6ZhaBu65VdPB-bkgEWrYXb_yFIMU5lGDWtxYMq5fQSKnllPD7_/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      onClose();
      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      alert("Confirmación enviada con éxito!");
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Hubo un problema al enviar la confirmación.");
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modalContent}>
        <h3>Confirma tu asistencia</h3>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input className={styles.inputs} type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label>¿Asistirás?</label>
          <select className={styles.inputs} name="asistencia" value={formData.asistencia} onChange={handleChange} required>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>

          <label>Alergias</label>
          <input className={styles.inputs} type="text" name="alergias" value={formData.alergias} onChange={handleChange} placeholder="Opcional" />

          <label>Proponer una canción</label>
          <input className={styles.inputs} type="text" name="cancion" value={formData.cancion} onChange={handleChange} placeholder="Opcional" />

          <label>Comentarios</label>
          <textarea className={styles.inputs} name="comentarios" value={formData.comentarios} onChange={handleChange} rows="3" placeholder="Opcional"></textarea>

          <div className={styles.buttonGroup}>
            <button type="submit">Enviar</button>
            <button type="button" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
