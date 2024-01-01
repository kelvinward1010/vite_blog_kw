import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { storageService } from "../../../../../utils/storage";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props {
    conversation?: any;
}

function FormUser(props: Props) {
    const nagative = useNavigate();
    const current_user = storageService.getStorage().current_user;
    const handleConfigData = () => {
        if(props?.conversation?.user_1?.id == current_user?.id){
            return props.conversation?.user_2;
        }else if(props?.conversation?.user_2?.id == current_user?.id){
            return props.conversation?.user_1;
        }
    }

    const dataUser = handleConfigData();
    const handleGoInConversation = () => nagative(`${props?.conversation?.id}`);

    return (
        <div className={styles.conatiner} onClick={handleGoInConversation}>
            <Avatar className={styles.avatar} icon={<UserOutlined />} />
            <Text className={styles.name}>{dataUser?.name}</Text>
        </div>
    )
}

export default FormUser