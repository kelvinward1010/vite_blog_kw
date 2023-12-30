import { Avatar, Button, Image, Typography } from "antd";
import styles from "./style.module.scss";
import HinhNenProfileDefault from "../../assets/image/hinh-nen-profile-default.jpg";
import ReactLogo from "../../assets/image/react_logo.png";
import { MessageOutlined, UserAddOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { userService } from "./api/get_user";

const { Title } = Typography;

export function Profile() {

    const location = useLocation()?.pathname;
    const id_user = location.split("/")[3];

    const [user, setUser] = useState<any>()

    useEffect(() => {
        userService({ id: id_user}).then((res) => setUser(res?.data));
    },[])
    
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.head_img}>
                    <Image 
                        width={'100%'} 
                        alt="profile-img"
                        height={200}  
                        src={HinhNenProfileDefault}
                    />
                    <Avatar className={styles.avatar_private} size={64} src={ReactLogo} />
                </div>
                <div className={styles.head_info}>
                    <Title level={4}>{user?.email}</Title>
                    <div className={styles.head_info_actions}>
                        <Button icon={<MessageOutlined />} className={styles.button}>Message</Button>
                        <Button icon={<UserAddOutlined />} className={styles.button}>Follow</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
