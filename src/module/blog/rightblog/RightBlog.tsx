import FormUsers from "../components/formusers/FormUsers";
import styles from "./style.module.scss";

function RightBlog() {
    return (
        <div className={styles.container}>
            <div className={styles.users}>
                <FormUsers />
            </div>
        </div>
    )
}

export default RightBlog