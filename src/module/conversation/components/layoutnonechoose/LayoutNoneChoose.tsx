import { Typography } from "antd";
import styles from "./style.module.scss";

const { Title } = Typography;

export function LayoutNoneChoose() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Title level={3} className={styles.title}>
                    Choose a person to talk!
                </Title>
            </div>
        </div>
    )
}