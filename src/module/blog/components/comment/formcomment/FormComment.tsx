
import { Avatar, Dropdown, Typography } from "antd";
import styles from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";
import ButtonConfig from "../../../../../components/button/ButtonConfig";

interface Props{
    comment?: any;
}
const {Text} = Typography;

function FormComment(props: Props) {

    const user_comment = props.comment?.user;
    
    const items = [
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={() => {}} 
                    name="Update"
                />
            </>,
            key: '0',
        },
        {
            label: <>
                <ButtonConfig
                    type={'delete'}
                    onClick={() => {}} 
                    name="Delete"
                />
            </>,
            key: '1',
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.top}>
                    <div className={styles.top_head}>
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                        <Text className={styles.name}>{user_comment?.email}</Text>
                    </div>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                        placement={'bottomRight'}
                    >
                        <span className={styles.action}>&sdot;&sdot;&sdot;</span>
                    </Dropdown>
                </div>
                <div className={styles.content}>
                    <Text>{props?.comment?.content}</Text>
                </div>
            </div>
        </div>
    )
}

export default FormComment