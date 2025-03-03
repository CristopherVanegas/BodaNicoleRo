import 'react'
import styles from "./story.module.css";
import Countdown from "../Countdown/Countdown";

const Story = () => {
    return (
        <div className={styles.storyContainer}>
            <div className={styles.sliderBackground2} />

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
