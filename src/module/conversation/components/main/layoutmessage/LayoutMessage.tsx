import Footer from "./footer/Footer";
import Head from "./head/Head";
import Message from "./message/Message";
import styles from "./style.module.scss";

function LayoutMessage() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Head />
            </div>
            <div className={styles.center}>
                <Message />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default LayoutMessage