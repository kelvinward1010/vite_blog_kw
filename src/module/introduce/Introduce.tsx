
import styles from './style.module.scss';
import kelvinimage from '../../assets/image/kel.jpg'


export function Introduce() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <img src={kelvinimage} alt='Me'className={styles.imgmain}/>
                <h2>My name's Kelvin Ward</h2>
                <h3>I had been created this application!</h3>
            </div>
        </div>
    )
}