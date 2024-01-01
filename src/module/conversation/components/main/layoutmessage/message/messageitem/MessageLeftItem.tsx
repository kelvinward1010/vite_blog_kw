import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Props{
    message?: any;
}

function MessageLeftItem(props: Props) {
    return (
        <div className={styles.containerleft}>
            <Avatar className={styles.avatar} icon={<UserOutlined />} />
            <Text className={styles.name}>{props?.message?.content}</Text>
        </div>
    )
}

export default MessageLeftItem