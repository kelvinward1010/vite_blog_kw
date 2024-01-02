
import Footer from "./footer/Footer";
import Head from "./head/Head";
import Message from "./message/Message";
import styles from "./style.module.scss";

interface Props {
    conversation?: any;
    dataUser?: any;
    current_user?: any;
    setRefeshData?: any;
}

function LayoutMessage(props: Props) {
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Head user={props.dataUser}/>
            </div>
            <div className={styles.center}>
                <Message conversation={props.conversation} current_user={props.current_user}/>
            </div>
            <div className={styles.footer}>
                <Footer setRefeshData={props.setRefeshData} conversation={props.conversation}/>
            </div>
        </div>
    )
}

export default LayoutMessage