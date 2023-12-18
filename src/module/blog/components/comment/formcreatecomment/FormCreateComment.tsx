import { Button, Form, Input, notification } from "antd"
import styles from "./style.module.scss";
import { CheckCircleOutlined, SendOutlined, WarningOutlined } from "@ant-design/icons";
import { createCommentService } from "../api/create_comment";
import { useRecoilState } from "recoil";
import { refeshBlogState } from "../../../state/atom";

interface Props {
    blog?: any;
}

function FormCreateComment(props: Props){

    //const current_user = storageService.getStorage().current_user;
    const [, setIsRefesh] = useRecoilState(refeshBlogState);
    const id_blog = props.blog?.id

    const onFinish = (values: any) => {
        const data = {
            content: values.content
        }

        createCommentService(id_blog,data).then(() => {
            notification.success({
                message: "You have been create comment successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            setIsRefesh(true);
        }).catch((res) => {
            notification.error({
                message: `Could not create comment. Please try again!`,
                description: ` ${res?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning' />
                )
            })
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not create comment. Please try again!`,
            description: ` ${errorInfo}`,
            icon: (
                <WarningOutlined className='warning' />
            )
        })
    };

    return (
        <div className={styles.container}>
            <Form
                name="formcreatecomment"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className={styles.space_cmt}>
                    <div className={styles.input_cmt}>
                        <Form.Item
                            name="content" 
                            className={styles.input_cmt_in}
                        >
                            <Input.TextArea 
                                autoSize 
                                rows={1} 
                                placeholder="write your thinking!"
                            />
                        </Form.Item>
                    </div>
                    <Button className={styles.button} htmlType="submit">
                        <SendOutlined />
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default FormCreateComment