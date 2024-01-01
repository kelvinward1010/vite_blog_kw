import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

function FormUser() {
    return (
        <div className={styles.conatiner}>
            <Avatar className={styles.avatar} icon={<UserOutlined />} />
            <Text className={styles.name}>Kelvin Ward</Text>
        </div>
    )
}

export default FormUser