
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import storage, { storageService } from "../../utils/storage";
import { Avatar, Dropdown, Modal, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ButtonConfig from "../button/ButtonConfig";
import { useState } from "react";
import Profile from "./profile/Profile";


const { Text } = Typography;

function Header() {

    const navigate = useNavigate();

    const [isOpenProfile, setIsOpenProfile] = useState(false);

    const handleLogout = () => {
        storage.clearToken();
        storageService.clearStorage();
        navigate('/sign_in')
    }

    const current_user = storageService.getStorage().current_user;
    
    const items = [
        {
          label: <>
            <ButtonConfig onClick={() => setIsOpenProfile(true)} name="Profile"/>
          </>,
          key: '0',
        },
        {
            label: <>
              <ButtonConfig onClick={handleLogout} name="Sign Out"/>
            </>,
            key: '1',
        },
    ]
    return (
        <>
            <Modal
                title={`Profile of ${current_user?.email}`}
                open={isOpenProfile} 
                onCancel={() => setIsOpenProfile(false)}
                width={700}
                className="ant_modal"
            >
                <Profile current_user={current_user}/>
            </Modal>
            <div className={styles.container}>
                <div className={styles.header_left}>
                    Kelvin Ward
                </div>
                <div className={styles.header_right}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    </Dropdown>
                    <Text className={styles.nameaccount}>{current_user?.email}</Text>
                </div>
            </div>
        </>
    )
}

export default Header