import styles from "./Balloon.module.css";
import globoImage from "../../../assets/images/globo.png";
const Balloon = () => {
  return <img className={styles.balloon} src={globoImage} alt="Globo Image" />;
};

export default Balloon;
