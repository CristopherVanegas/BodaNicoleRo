import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MusicPrompt.module.css"; // Asegúrate de crear el archivo de estilos

const MusicPrompt = ({ onMusicStart }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleYes = () => {
        onMusicStart(true); // Llama a la función que activa la música
        setIsVisible(false); // Desvanece el prompt
    };

    const handleNo = () => {
        onMusicStart(false); // No se reproduce la música
        setIsVisible(false); // Desvanece el prompt
    };

    return (
        <div className={`${styles.overlay} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            <div className={styles.musicPrompt}>
                <div className={styles.promptContent}>
                    <p>¿Quieres escuchar música de fondo?</p>
                    <button onClick={handleYes}>Sí</button>
                    <button onClick={handleNo}>No</button>
                </div>
            </div>
        </div>
    );
};

// Validación de las props
MusicPrompt.propTypes = {
    onMusicStart: PropTypes.func.isRequired, // onMusicStart debe ser una función y es requerida
};

export default MusicPrompt;
