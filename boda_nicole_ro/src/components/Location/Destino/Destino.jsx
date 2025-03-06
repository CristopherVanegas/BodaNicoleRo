import 'react'
import styles from './Destino.module.css';
import iconoMaps from '../../../assets/images/icons/maps-icon.png';


const Destino = () => {
    return (
        <div className={styles.content}>
            <div className={styles.locationBox}>
                <h3 className={styles.title}>Destino</h3>
                <p>La Quinta de Any</p>
                <p>Portoviejo</p>
                <a
                    href="https://www.google.com/maps/place/La+Quinta+de+Any/@-0.9863668,-80.4597083,17z/data=!3m1!4b1!4m6!3m5!1s0x902becb5dd079873:0x7eb5b1bd3ef2952a!8m2!3d-0.9863668!4d-80.4597083!16s%2Fg%2F11dzzlvq1c?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapButton}
                >
                    <p>
                        Google Maps link
                    </p>
                    <img
                        src={iconoMaps}
                        alt="Icono Google Maps"
                        className={styles.mapIcon}
                    />
                </a>
            </div>
        </div>
    )
}

export default Destino