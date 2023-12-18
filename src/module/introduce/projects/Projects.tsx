
import { List, Typography } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const {Text} = Typography;

function Projects() {

    const data = [
        {
            title: 'Dasuka',
            content: {
                link: "https://dasuka-co.aiacademy.edu.vn/",
                link_code: "https://gitlab.com/CanhhnaC/co-v2.git",
            }
        },
        {
            title: "My Blogs",
            content: {
                link: "https://vite-fastapi-fe.vercel.app/",
                link_code: "https://github.com/kelvinward1010/vite_fastapi_fe",
            }
        },
        {
            title: "Visualization",
            content: {
                link: "https://reactflow-two.vercel.app/",
                link_code: "https://github.com/kelvinward1010/reactflow",
            }
        },
    ];

    const config_description = (content: any) => {

        return(
            <div className={styles.description}>
                <div className={styles.description_item}>
                    <Text className={styles.description_item_text}>Link:</Text>
                    <a href={content.link} target={'_blank'}>{content.link}</a>
                </div>
                <div className={styles.description_item}>
                    <Text className={styles.description_item_text}>Link Git:</Text>
                    <a href={content.link_code} target={'_blank'}>{content.link_code}</a>
                </div>
            </div>
        )
    }

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
                            description={config_description(item.content)}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Projects