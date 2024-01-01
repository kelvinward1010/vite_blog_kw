import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

function Infoconversation() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    <Text className={styles.name}>Kelvin Ward</Text>
                </div>
                <div className={styles.goto_profile}>
                    <Text className={styles.fersonal_page_text}>Personal page</Text>
                </div>
            </div>
        </div>
    )
}

export default Infoconversation