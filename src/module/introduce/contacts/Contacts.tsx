
import { List, Typography } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const {Text} = Typography;

function Contacts() {

    const data = [
        {
            title: 'Email',
            content: "kelvinward1010@gmail.com"
        },
        {
            title: 'Phone',
            content: "10001001"
        },
    ];

    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default Contacts