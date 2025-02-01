import React, { useState } from "react";
import styles from "./WeddingPage.module.css";

export const WeddingPage = () => {
  const [name, setName] = useState("");
  const [allergy, setAllergy] = useState("");
  const phoneNumber = "5930939500816"; // Reemplaza con tu número de WhatsApp

  const handleConfirmAttendance = () => {
    const message = `Hola, soy ${name}. Confirmo mi asistencia a la boda.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSendAllergy = () => {
    const message = `Hola, soy ${name}. Tengo alergia a: ${allergy}`;
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

const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={styles.input}
  />
);

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export default WeddingPage;
