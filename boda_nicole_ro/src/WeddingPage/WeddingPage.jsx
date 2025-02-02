import React, { useState } from "react";
import styles from "./WeddingPage.module.css";

export const WeddingPage = () => {
  const [name, setName] = useState("");
  const [allergy, setAllergy] = useState("");

  const webhookUrl = "https://script.google.com/macros/s/AKfycbxOJnnOIMGGgkwe-ccNhlmnavRN01ydj60TDj8U79HlUhpWjdZ5IjuS9nATS4Z5DFPP/exec"; // Pega tu URL del webhook aquí

  const sendToGoogleSheets = async () => {
    if (!name || !allergy) {
      alert("Por favor ingresa tu nombre y alergias antes de enviar.");
      return;
    }
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",  // 🔹 Se añade esto para evitar el error CORS
        body: JSON.stringify({ name, allergy }),
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }
  
      alert("Datos enviados correctamente a Google Sheets.");
    } catch (error) {
      console.error("Error en la solicitud a Google Sheets:", error);
      alert(`Error al enviar datos: ${error.message}. Revisa la consola para más detalles.`);
    }
  };
  
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registro de Alergias</h1>
      
      <div className={styles.card}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Escribe aquí tus alergias"
          value={allergy}
          onChange={(e) => setAllergy(e.target.value)}
          className={styles.input}
        />
        <button onClick={sendToGoogleSheets} className={styles.button}>
          Enviar a Google Sheets
        </button>
      </div>
    </div>
  );
};

export default WeddingPage;
