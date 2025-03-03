import "react";
import styles from "./Gallery.module.css";
import cameraIcon from "../../assets/images/gif/camera/camera1.gif";
import photo1 from "../../assets/images/novios/1.jpeg";
import photo2 from "../../assets/images/novios/2.jpeg";
import photo3 from "../../assets/images/novios/3.jpeg";
import photo4 from "../../assets/images/novios/4.jpeg";
import photo5 from "../../assets/images/novios/5.jpeg";

import HeartCollage from "../HeartCollage/HeartCollage";

const Gallery = () => {
  const googleDriveLink =
    "https://drive.google.com/drive/folders/TU_CARPETA_ID"; // Reemplaza con tu enlace real

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.sliderBackground} />
      <div className={styles.content}>
        <HeartCollage images={[photo1, photo2, photo3, photo4, photo5]} />
        <h2 className={styles.title}>Comparte tus recuerdos</h2>
        <p className={styles.text}>
          El día de la boda toma muchas fotos y déjanos un bonito y divertido
          recuerdo haciendo click en el ícono de la cámara de fotos!
        </p>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonBox}>
            <a
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.confirmButton}
              onClick={console.log("Copiado!")}
            >
              <img
                className={styles.cameraIcon}
                src={cameraIcon}
                alt="Icono Cámara"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
