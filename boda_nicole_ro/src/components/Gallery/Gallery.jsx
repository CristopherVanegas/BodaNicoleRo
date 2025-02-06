import 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const googleDriveLink = "https://drive.google.com/drive/folders/TU_CARPETA_ID"; // Reemplaza con tu enlace real

  return (
    <section className={styles.galleryContainer}>
      <h2 className={styles.title}>Comparte tus recuerdos</h2>
      <p className={styles.text}>
        Ayúdanos a revivir los mejores momentos de nuestra boda subiendo tus fotos y videos a nuestra carpeta especial. ¡Gracias por ser parte de este día inolvidable!
      </p>
      
      <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className={styles.uploadButton}>
        📸 Subir Fotos y Videos
      </a>
    </section>
  );
};

export default Gallery;
