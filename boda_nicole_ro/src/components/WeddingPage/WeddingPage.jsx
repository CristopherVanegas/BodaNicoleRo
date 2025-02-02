import { useState } from "react";
import axios from "axios";
import styles from "./WeddingPage.module.css"; // Importar CSS Module

const WeddingPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    confirmaAsistencia: "",
    alergias: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbwo3Xoqeu_ZEYjT9wsQj1YupIToLFYWt2aRnuCwktkTzZB-6XcRXOXCmB1qRrx-D1gB/exec"; // Reemplaza con tu URL de Google Apps Script

    try {
      axios.post(scriptURL, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setMensaje("✅ Datos enviados correctamente.");
      setFormData({ nombre: "", confirmaAsistencia: "", alergias: "" });
    } catch (error) {
      console.error("Error al enviar los datos", error);
      setMensaje("❌ Hubo un error al enviar los datos.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Confirma tu Asistencia</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <label className={styles.label}>¿Confirmas tu asistencia?</label>
        <select name="confirmaAsistencia" value={formData.confirmaAsistencia} onChange={handleChange} required className={styles.input}>
          <option value="">Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>

        <label className={styles.label}>Alergias:</label>
        <input
          type="text"
          name="alergias"
          placeholder="Especifica si tienes alguna alergia"
          value={formData.alergias}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      {mensaje && <p className={styles.message}>{mensaje}</p>}
    </div>
  );
};

export default WeddingPage;
