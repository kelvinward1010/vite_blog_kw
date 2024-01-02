import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { storageService } from "../../../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { handleConfigDataUserConversation } from "../../../config";

const { Text } = Typography;

interface Props {
    conversation?: any;
}

function FormUser(props: Props) {
    const nagative = useNavigate();
    const current_user = storageService.getStorage().current_user;

    const dataUser = handleConfigDataUserConversation(props?.conversation, current_user);
    const handleGoInConversation = () => nagative(`${props?.conversation?.id}`);

    return (
        <div className={styles.conatiner} onClick={handleGoInConversation}>
            <Avatar className={styles.avatar} icon={<UserOutlined />} />
            <Text className={styles.name}>{dataUser?.name}</Text>
        </div>
    )
}

export default FormUser