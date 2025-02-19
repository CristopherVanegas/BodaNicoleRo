import 'react';
import styles from './Gallery.module.css';
import cameraIcon from '../../assets/images/icons/camera-icon.png';

const Gallery = () => {
  const googleDriveLink = "https://drive.google.com/drive/folders/TU_CARPETA_ID"; // Reemplaza con tu enlace real

  return (
    <section className={styles.galleryContainer}>
      <h2 className={styles.title}>Comparte tus recuerdos</h2>
      <p className={styles.text}>
        El día de la boda toma muchas fotos y déjanos un bonito y divertido recuerdo haciendo click en el ícono de la cámara de fotos!
      </p>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonBox}>
          <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className={styles.confirmButton} onClick={console.log("Copiado!")}>
            <img className={styles.cameraIcon} src={cameraIcon} alt="Icono Cámara" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
