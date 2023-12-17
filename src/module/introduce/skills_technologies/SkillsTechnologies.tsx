
import { List, Typography } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const {Text} = Typography;

function SkillsTechnologies() {

    const data = [
        {
            title: 'Languages',
            content: "Python, Javascript, Typescript"
        },
        {
            title: 'Front End',
            content: "ReactJS, NextJS, Vite, HTML/CSS, SCSS"
        },
        {
            title: 'Back End',
            content: "NodeJS (Express), FastAPI (PostgresSQL, MongoDB)",
        },
    ];

    return (
        <div className={styles.container}>
            <List
                itemLayout="horizontal"
                className="tabs_config"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<CheckCircleOutlined />}
                            title={<Text> {item.title}</Text>}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default SkillsTechnologies