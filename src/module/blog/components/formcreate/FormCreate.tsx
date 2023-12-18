
import { Avatar, Button, Form, Input, Modal, Typography, notification } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";
import { useState } from "react";
import { storageService } from "../../../../utils/storage";
import { createBlogService } from "../../api/create_blog";
import { useRecoilState } from "recoil";
import { refeshBlogState } from "../../state/atom";

const { TextArea } = Input;
const { Text } = Typography;

type FieldType = {
    title?: string;
    content?: string;
};

function FormCreate() {

    const [open, setOpen] = useState(false);
    const current_user = storageService.getStorage().current_user;
    const [, setIsRefesh] = useRecoilState(refeshBlogState);

    const handleOpenForm = (e: any) => {
        e.preventDefault();
        setOpen(true);
    }

    const onFinish = (values: any) => {
        const data = {
            title: values.title,
            content: values.content
        }

        createBlogService(data).then(() => {
            notification.success({
                message: "You have been create blog successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            setOpen(false);
            setIsRefesh(true);
        }).catch((res) => {
            notification.error({
                message: `Could not create blog. Please try again!`,
                description: ` ${res?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning' />
                )
            })
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not create blog. Please try again!`,
            description: ` ${errorInfo}`,
            icon: (
                <WarningOutlined className='warning' />
            )
        })
    };

    return (
        <>
            <Modal
                title={`Create blog`}
                open={open}
                onCancel={() => setOpen(false)}
                width={700}
                className="ant_modal"
                onOk={() => setOpen(false)}
                footer={null}
            >
                <Form
                    name="formcreateblog"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 19 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Content"
                        name="content"
                        rules={[{ required: true, message: 'Please input your content!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
                        <Button className={styles.button} htmlType="submit">
                            Submit
                        </Button>
                        <Button className={styles.button_reset} htmlType="reset">Reset</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.top}>
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                        <Text className={styles.name}>{current_user?.email}</Text>
                    </div>
                    <div className={styles.form}>
                        <TextArea
                            placeholder="What's on your mind?"
                            className={styles.input}
                            onClick={(e) => handleOpenForm(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormCreate