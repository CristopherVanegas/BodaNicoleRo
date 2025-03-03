import 'react'
import styles from "./story.module.css";
import Countdown from "../Countdown/Countdown";
import brujula from "../../assets/images/brujula31.png";

const Story = () => {
    return (
        <div className={styles.storyContainer}>
            <div className={styles.sliderBackground2} />
            <div className={styles.imageContainer}>
                <img className={styles.brujula} src={brujula} alt="Brujula" />
            </div>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <p className={styles.text1}>Después de</p>
                    <p className={styles.text2}>14 años juntos</p>
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
