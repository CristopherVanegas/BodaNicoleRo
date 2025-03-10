import 'react'
import styles from "./story.module.css";
import Countdown from "../Countdown/Countdown";
import nuevo_viaje from "../../assets/images/texts/nuevo_viaje.png";
import Balloon from "../Extras/Balloon/Balloon";
import brujula from "../../assets/images/brujula31.png";
import heart_stamp_icon from "../../assets/images/icons/heart_stamp_icon.png";

const Story = () => {
    return (
        <div className={styles.storyContainer}>
            <div className={styles.sliderBackground2} />

            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <p className={styles.text1}>Después de</p>
                    <p className={styles.text2}>14 años juntos</p>
                </div>
                <div className={styles.balloonContainer}>
                    <Balloon className={styles.ballonSection} />
                    <img className={styles.brujula} src={brujula} alt="Brujula" />
                    <img className={styles.heart_stamp} src={heart_stamp_icon} alt="Heart Stamp Icon" />
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.nuevo_viaje} src={nuevo_viaje} alt="Nuevo Viaje" />
                </div>
                <p className={styles.invitationText}>
                    prepara tus maletas y acompáñanos en este viaje
                </p>
                <Countdown />
            </div>
        </div>
    )
}
export default Story;
