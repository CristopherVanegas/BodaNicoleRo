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
      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      alert("Confirmación enviada con éxito!");
      sendWhatsAppMessage(formData);
      onClose();
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Hubo un problema al enviar la confirmación.");
    }
  };

  const sendWhatsAppMessage = (data) => {
    const phoneNumber = "593939500816";
    const message = `🎉 Confirmación de asistencia 🎉\n\n📛 Nombre: ${data.nombre}\n✅ Asistirá: ${data.asistencia}\n⚠️ Alergias: ${data.alergias || 'Ninguna'}\n🎵 Canción: ${data.cancion || 'No especificada'}\n💬 Comentarios: ${data.comentarios || 'Sin comentarios'}\n\n¡Gracias por confirmar tu asistencia! Nos vemos en la boda. 💍✨`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modalContent}>
        <h3>Confirma tu asistencia</h3>
        <form onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label>¿Asistirás?</label>
          <select name="asistencia" value={formData.asistencia} onChange={handleChange} required>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>

          <label>Alergias</label>
          <input type="text" name="alergias" value={formData.alergias} onChange={handleChange} placeholder="Opcional" />

          <label>Proponer una canción</label>
          <input type="text" name="cancion" value={formData.cancion} onChange={handleChange} placeholder="Opcional" />

          <label>Comentarios</label>
          <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} rows="3" placeholder="Opcional"></textarea>

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
