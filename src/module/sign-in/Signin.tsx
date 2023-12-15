
import { Button, Form, Input, Typography } from 'antd';
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';


const { Title, Text } = Typography;

type FieldType = {
  username?: string;
  password?: string;
};

export function Signin(): JSX.Element {

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.center}>

        <Title level={3} className={styles.title}>SIGN IN</Title>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
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