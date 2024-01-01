import Infoconversation from "./infoconversation/Infoconversation";
import LayoutMessage from "./layoutmessage/LayoutMessage";
import styles from "./style.module.scss";

function LayoutMain() {
    return (
        <div className={styles.container}>
            <div className={styles.right_converss}>
                <LayoutMessage />
            </div>
            <div className={styles.left_converss}>
                <Infoconversation />
            </div>
        </div>
    )
}

export default LayoutMain