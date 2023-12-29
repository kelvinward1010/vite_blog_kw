import { Blog } from ".."
import LeftBlog from "./leftblog/LeftBlog"
import RightBlog from "./rightblog/RightBlog"
import styles from "./style.module.scss"



export function LayoutBlog(){

    return(
        <div className={styles.container}>
            <LeftBlog />
            <Blog />
            <RightBlog />
        </div>
    )
}