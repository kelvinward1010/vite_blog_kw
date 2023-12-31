
import styles from './style.module.scss';
import kelvinimage from '../../assets/image/kel.jpg'
import { Tabs } from 'antd';
import { BulbOutlined, ContactsOutlined, FundProjectionScreenOutlined, GlobalOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import AboutMe from './aboutme/AboutMe';
import SkillsTechnologies from './skills_technologies/SkillsTechnologies';
import FatapiLogo from "../../assets/image/fastapi_logo.svg"
import PyhtonLogo from "../../assets/image/python_logo.png";
import ViteLogo from "../../assets/image/vite_logo.png";
import TypescriptLogo from "../../assets/image/typescript_logo.jpg"
import NextJSLogo from "../../assets/image/nextjs_logo.png"
import ReactJSLogo from "../../assets/image/react_logo.png"
import NodeJSLogo from "../../assets/image/nodejs_logo.png"
import JavaScriptLogo from "../../assets/image/JavaScript_logo.png"
import Languages from './languages/Languages';
import SocialMedia from './socialmedia/SocialMedia';
import Contacts from './contacts/Contacts';
import Projects from './projects/Projects';

export function Introduce() {

    const configTabs = [
        {
            key: "1",
            label: "About Me",
            children: <AboutMe />,
            icon: UserOutlined
        },
        {
            key: "2",
            label:"Social Media",
            children: <SocialMedia />,
            icon: GlobalOutlined
        },
        {
            key: "3",
            label:"Languages",
            children: <Languages />,
            icon: BulbOutlined
        },
        {
            key: "4",
            label:"Skills Technologies",
            children: <SkillsTechnologies />,
            icon: KeyOutlined
        },
        {
            key: "5",
            label:"Projects",
            children: <Projects />,
            icon: FundProjectionScreenOutlined
        },
        {
            key: "6",
            label:"Contacts",
            children: <Contacts />,
            icon: ContactsOutlined
        },
    ]

    const list_logos = [
        {
            src: ReactJSLogo,
        },
        {
            src: NextJSLogo,
        },
        {
            src: ViteLogo,
        },
        {
            src: JavaScriptLogo,
        },
        {
            src: TypescriptLogo,
        },
        {
            src: PyhtonLogo,
        },
        {
            src: FatapiLogo,
        },
        {
            src: NodeJSLogo,
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.top}>
                    <img src={kelvinimage} alt='Me'className={styles.imgmain}/>
                    <h3>Kelvin Ward had been created this application!</h3>
                    <h4>Technologies used</h4>
                    <div className={styles.list_logo}>
                        {list_logos.map((item, i) => (
                            <img className={styles.logo} src={item.src} key={i} alt='logo'/>
                        ))}
                    </div>
                </div>

                <div className={styles.main}>
                    <Tabs
                        defaultActiveKey="1"
                        items={configTabs.map((item) => {
                            return {
                                key: item.key,
                                label: item.label,
                                children: item.children,
                                icon: <item.icon />
                            }
                        })}
                    />
                </div>
            </div>
        </div>
    )
}