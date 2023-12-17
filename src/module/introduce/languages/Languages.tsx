
import { List, Typography } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const {Text} = Typography;

function Languages() {

    const data = [
        {
            title: 'English',
            content: "Read, Write, Listen, Talk"
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

export default Languages