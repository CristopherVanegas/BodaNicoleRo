import "react";
import PropTypes from "prop-types";
import styles from "./HeartCollage.module.css";

const HeartCollage = ({ images }) => {
    if (images.length !== 5) {
        console.error("Se necesitan exactamente 5 imágenes para el collage.");
        return null;
    }

    return (
        <div className={styles.collage}>
            <img src={images[0]} alt="Imagen 1" className={`${styles.img} ${styles.img1}`} />
            <img src={images[1]} alt="Imagen 2" className={`${styles.img} ${styles.img2}`} />
            <img src={images[2]} alt="Imagen 3" className={`${styles.img} ${styles.img3}`} />
            <img src={images[3]} alt="Imagen 4" className={`${styles.img} ${styles.img4}`} />
            <img src={images[4]} alt="Imagen 5" className={`${styles.img} ${styles.img5}`} />
        </div>
    );
};

// ✅ Validación de las props
HeartCollage.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HeartCollage;
