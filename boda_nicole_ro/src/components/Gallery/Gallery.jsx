import 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const googleDriveLink = "https://drive.google.com/drive/folders/TU_CARPETA_ID"; // Reemplaza con tu enlace real

  return (
    <section className={styles.galleryContainer}>
      <h2 className={styles.title}>Comparte tus recuerdos</h2>
      <p className={styles.text}>
        El día de la boda toma muchas fotos y déjanos un bonito y divertido recuerdo haciendo click en el ícono de la cámara de fotos!
      </p>

      <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className={styles.uploadButton}>
        📸 Subir Fotos y Videos
      </a>
    </section>
  );
};

export default Gallery;
