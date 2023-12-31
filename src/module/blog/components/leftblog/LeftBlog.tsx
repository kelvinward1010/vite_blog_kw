import { Typography } from "antd";
import styles from "./style.module.scss";

const { Title } = Typography;

function LeftBlog() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Title level={3}>
                    I'm a software engineer
                </Title>
            </div>
        </div>
    )
}

export default LeftBlog