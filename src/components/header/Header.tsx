import { useLocation, useNavigate } from "react-router-dom";
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
    const location = useLocation().pathname
    const keynamelocation = location.split("/")[2]

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

    const navs = [
        {
            key: 'introduce',
            name: "Introduction",
            link: "/home/introduce"
        },
        {
            key: "blog",
            name: "Blog",
            link: "/home/blog"
        }
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
                <nav className={styles.header_center}>
                    {navs.map((nav) => (
                        <Text 
                            onClick={() => navigate(nav.link)} 
                            className={styles.nav_name} 
                            key={nav.key}
                            style={{
                                textDecoration: `${keynamelocation == nav.key ? "underline solid white 2px" : "none"}`,
                            }}
                        >{nav.name}</Text>
                    ))}
                    <div className={styles.animation}></div>
                </nav>
                <div className={styles.header_right}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Header