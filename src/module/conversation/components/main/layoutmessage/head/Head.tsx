import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

function Head() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Avatar className={styles.avatar} icon={<UserOutlined />} />
                <Text className={styles.name}>Kelvin Ward</Text>
            </div>
        </div>
    )
}

export default Head