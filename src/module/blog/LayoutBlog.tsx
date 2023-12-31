import { Blog } from ".."
import LeftBlog from "./components/leftblog/LeftBlog"
import RightBlog from "./components/rightblog/RightBlog"
import styles from "./style.module.scss"



export function LayoutBlog(){

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <LeftBlog />
            </div>
            <div className={styles.center}>
                <Blog />
            </div>
            <div className={styles.right}>
                <RightBlog />
            </div>
        </div>
    )
}