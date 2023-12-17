
import { Avatar, Typography } from "antd";
import styles from "./style.module.scss";
import { LikeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface Props {
    blog?: any
}

function FormBlog(props: Props) {

    //const current_user = storageService.getStorage().current_user;
    const user_owner_blog = props?.blog?.user

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.top}>
                    <div className={styles.top_head}>
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                        <Text className={styles.name}>{user_owner_blog?.email}</Text>
                    </div>
                    <span className={styles.action}>&sdot;&sdot;&sdot;</span>
                </div>
                <div className={styles.content}>
                    <Title className={styles.title} level={4}>{props.blog?.title}</Title>
                    <Text className={styles.content}>{props.blog?.content}</Text>
                </div>
                <div className={styles.footer}>
                    <div className={styles.like}>
                        <LikeOutlined />
                        <Text className={styles.titleLike}>Like</Text>
                    </div>
                    <div className={styles.comment}>
                        <MessageOutlined />
                        <Text className={styles.titleComment}>Comment</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBlog