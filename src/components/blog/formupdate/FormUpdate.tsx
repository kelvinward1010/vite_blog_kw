
import { Button, Form, Input, Modal, notification } from "antd";
import styles from "./style.module.scss";
import { useState } from "react";
import { updateBlogService } from "../../../apis/api_post/update_blog";
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";

interface Props {
    isOpen?: boolean;
    setIsOpen?: any;
    blog?: any;
    setIsRefesh?: any;
}


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
    },
};

interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
}

interface CustomizedFormProps {
    onChange: (fields: FieldData[]) => void;
    fields: FieldData[];
    onSubmit: (data: any) => void;
    onFailure: (data: any) => void;
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields, onFailure, onSubmit }) => (
    <Form
        name="formupdateblog"
        {...formItemLayout}
        fields={fields}
        onFieldsChange={(_, allFields) => {
            onChange(allFields);
        }}
        onFinish={onSubmit}
        onFinishFailed={onFailure}
        initialValues={{
            "title": fields.find(value => value?.value != null)?.value,
            "content": fields.find(value => value?.value != null)?.value,
        }}
    >
        <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Title is required!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: 'Content is required!' }]}
        >
            <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5, span: 14 }}>
            <Button className={styles.button} htmlType="submit">
                Update Blog
            </Button>
            <Button className={styles.button_reset} htmlType="reset">Reset</Button>
        </Form.Item>
    </Form>
);


function FormUpdate(props: Props) {

    const [fields, setFields] = useState<FieldData[]>([
        {
            name: ['title'],
            value: props.blog?.title,
        },
        {
            name: ['content'],
            value: props.blog?.content,
        },
    ]);

    const onFinish = (values: any) => {
        const data = {
            title: values?.title,
            content: values?.content,
        }

        updateBlogService(props.blog?.id, data).then(() => {
            notification.success({
                message: "You have been update your blog successfully!",
                icon: (
                    <CheckCircleOutlined className="done"/>
                )
            })
            props.setIsRefesh(true)
            props.setIsOpen(false)
        }).catch((res) => {
            notification.error({
                message: `Could not update your blog. Please try again!`,
                description: ` ${res?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning'/>
                )
            })
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not update your blog. Please try again!`,
            description: ` ${errorInfo}`,
            icon: (
                <WarningOutlined className='warning'/>
            )
        })
    };

    return (
        <Modal
            title={`Update for post of ${props.blog?.title}`}
            open={props.isOpen}
            onCancel={() =>props.setIsOpen(false)}
            width={700}
            className="ant_modal"
            footer={null}
        >
            <div className={styles.container}>
                <CustomizedForm
                    fields={fields}
                    onChange={(newFields) => {
                        setFields(newFields);
                    }}
                    onFailure={(error: any) => onFinishFailed(error)}
                    onSubmit={(values: any) => onFinish(values)}
                />
            </div>
        </Modal>
    )
}

export default FormUpdate