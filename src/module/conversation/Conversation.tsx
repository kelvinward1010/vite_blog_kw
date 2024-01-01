import LayoutMain from "./components/main/LayoutMain"
import Navbar from "./components/nabar/Navbar"
import styles from "./style.module.scss"

export function Conversation() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Navbar />
            </div>
            <div className={styles.right}>
                <LayoutMain />
            </div>
        </div>
    )
}
