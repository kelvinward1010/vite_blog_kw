import FormUser from "./formuser/FormUser";
import styles from "./style.module.scss";

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.users}>
                <FormUser />
                <FormUser />
                <FormUser />
                <FormUser />
                <FormUser />
                <FormUser />
                <FormUser />
                <FormUser />
                <FormUser />
            </div>
        </div>
    )
}

export default Navbar