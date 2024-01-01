import { Outlet } from "react-router-dom"
import Navbar from "./components/nabar/Navbar"
import styles from "./style.module.scss"

export function LayoutConversation() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Navbar />
            </div>
            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    )
}
