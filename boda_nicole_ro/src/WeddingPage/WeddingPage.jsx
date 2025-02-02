import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./WeddingPage.module.css";

export const WeddingPage = () => {
  const [name, setName] = useState("");
  const [allergy, setAllergy] = useState("");
  const phoneNumber = "5930939500816"; // Reemplaza con tu número de WhatsApp
  const webhookUrl = "https://script.google.com/macros/s/AKfycbwGuMoai50VTyf9WiLOrv2RL5CynfBZwwnKl2lHAFpnOYwjwkVSWq52Wc1poedVEAo/exec"; // Tu URL de Google Apps Script

  const sendToGoogleSheets = async (name, allergy) => {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, allergy }),
    });
  };

  const handleConfirmAttendance = async () => {
    const message = `Hola, soy ${name}. Confirmo mi asistencia a la boda.`;
    await sendToGoogleSheets(name, "");
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSendAllergy = async () => {
    const message = `Hola, soy ${name}. Tengo alergia a: ${allergy}`;
    await sendToGoogleSheets(name, allergy);
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestra Boda</h1>
      
      <Card title="Confirmar Asistencia">
        <Input placeholder="Tu nombre" value={name} onChange={setName} />
        <Button onClick={handleConfirmAttendance} className={styles.buttonGreen}>
          Confirmar por WhatsApp
        </Button>
      </Card>

      <Card title="Registro de Alergias">
        <Input placeholder="Tu nombre" value={name} onChange={setName} />
        <Input placeholder="Escribe aquí tus alergias" value={allergy} onChange={setAllergy} />
        <Button onClick={handleSendAllergy} className={styles.buttonRed}>
          Enviar por WhatsApp
        </Button>
      </Card>
    </div>
  );
};

const Card = ({ title, children }) => (
  <div className={styles.card}>
    <h2 className={styles.subtitle}>{title}</h2>
    {children}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={styles.input}
    style={{ color: "#000" }}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WeddingPage;
