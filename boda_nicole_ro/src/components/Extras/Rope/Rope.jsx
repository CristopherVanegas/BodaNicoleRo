import { useState, useEffect } from "react";
import styles from "./Rope.module.css";

const Rope = () => {
  const [showRope, setShowRope] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRope(true), 2500); // Aparece después de 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.cuerda} ${showRope ? styles.mostrar : ""}`}></div>
  );
};

export default Rope;
