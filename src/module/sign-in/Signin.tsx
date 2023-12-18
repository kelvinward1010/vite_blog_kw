
import { Button, Form, Input, Typography, notification } from 'antd';
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';
import { signinService } from './api/signin';
import storage, { storageService } from '../../utils/storage';
import { useEffect } from 'react';
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';


const { Title, Text } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

export function Signin(): JSX.Element {

  const navigate = useNavigate();

  const onFinish = (values: any) => {

    const data = {
      email: values.email,
      password: values.password
    }

    signinService(data).then((res) => {

      storage.setToken(res.access_token)
      storageService.setStorage(JSON.stringify(res));
      notification.success({
        message: "You have been sign in successfully!",
        icon: (
          <CheckCircleOutlined className="done" />
        )
      })
      navigate('/home/introduce')
    }).catch((res) => {
      notification.error({
        message: `Could not sign in. Please try again!`,
        description: ` ${res?.response?.data?.detail}`,
        icon: (
          <WarningOutlined className='warning' />
        )
      })
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    notification.error({
      message: `Could not sign in. Please try again!`,
      description: ` ${errorInfo}`,
      icon: (
        <WarningOutlined className='warning' />
      )
    })
  };

  useEffect(() => {
    if (storage.getToken()) navigate("/home/introduce")
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.center}>

        <Title level={3} className={styles.title}>SIGN IN</Title>

        <Form
          name="signin"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className={styles.button} htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.have_account}>
          <Text>Don't have a account!</Text>
          <Text onClick={() => navigate('/sign_up')} className={styles.fix_text}>Sign Up</Text>
        </div>
      </div>
    </div>
  )
}