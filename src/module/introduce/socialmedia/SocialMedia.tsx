
import { List, Typography } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const {Text} = Typography;

function SocialMedia() {

    const data = [
        {
            title: 'Facebook',
            content: "https://www.facebook.com/duy.kelvinward"
        },
        {
            title: 'Github',
            content: "https://github.com/kelvinward1010"
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
                            description={<a href={item.content} target={'_blank'}>{item.content}</a>}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default SocialMedia