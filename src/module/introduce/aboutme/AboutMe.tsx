
import { List, Typography } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const {Text} = Typography;


function AboutMe() {

    const data = [
        {
            title: 'Name',
            content: "Đào Văn Duy"
        },
        {
            title: 'Date of Birth',
            content: "20/09/2001"
        },
        {
            title: 'Other name',
            content: "Kelvin Ward, Tyler Locke"
        },
        {
            title: 'Hometown',
            content: "Hai Duong - Viet Nam",
        },
        {
            title: 'Current residence',
            content: "Ha Noi - Viet Nam",
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

export default AboutMe