import { Button, Col, Input, Row, Space } from "antd"
import styles from "./style.module.scss"
import { SendOutlined } from "@ant-design/icons"

function Footer() {
    return (
        <div className={styles.container}>
            <Row justify={'space-between'} align={'middle'} className={styles.main_send} >
                <Col push={1} span={24}>
                    <Space.Compact style={{ width: '90%' }}>
                        <Input placeholder="Write your message"/>
                        <Button className={styles.button_send} icon={<SendOutlined />}>Send</Button>
                    </Space.Compact>
                </Col>
            </Row>
        </div>
    )
}

export default Footer