import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props {
    dataUser?: any;
}

function Infoconversation(props: Props) {
    const data = props.dataUser;
    const navigate = useNavigate();



    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    <Text className={styles.name}>{data?.name}</Text>
                </div>
                <div className={styles.goto_profile} onClick={() => navigate(`/home/profile/${data?.id}`)}>
                    <Text className={styles.fersonal_page_text}>Personal page</Text>
                </div>
            </div>
        </div>
    )
}

export default Infoconversation