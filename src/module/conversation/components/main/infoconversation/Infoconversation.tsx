import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Props {
    dataUser?: any;
}

function Infoconversation(props: Props) {
    const data = props.dataUser;
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    <Text className={styles.name}>{data?.name}</Text>
                </div>
                <div className={styles.goto_profile}>
                    <Text className={styles.fersonal_page_text}>Personal page</Text>
                </div>
            </div>
        </div>
    )
}

export default Infoconversation