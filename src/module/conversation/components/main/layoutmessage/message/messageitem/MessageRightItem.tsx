import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Props{
    message?: any;
}

function MessageRightItem(props: Props) {
    return (
        <div className={styles.containerright}>
            <Text className={styles.name}>{props?.message?.content}</Text>
            <Avatar className={styles.avatar} icon={<UserOutlined />} />
        </div>
    )
}

export default MessageRightItem