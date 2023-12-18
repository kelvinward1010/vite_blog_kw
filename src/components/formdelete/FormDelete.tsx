
import { Button, Modal, Typography } from "antd";
import styles from "./style.module.scss";

interface Props {
    isOpen?: boolean;
    setIsOpen?: any;
    onDelete?: () => void;
    title?: string;
    name?: string;
}

const { Text } = Typography;

function FormDelete(props: Props) {
    return (
        <Modal
            title={props.title}
            open={props.isOpen}
            onCancel={() =>props.setIsOpen(false)}
            width={500}
            className="ant_modal_delete"
            footer={null}
        >
            <div className={styles.container}>
                <div className={styles.title}>
                    <Text className={styles.title1}>Are you sure to delete this {props.name}?</Text>
                </div>
                <div className={styles.footer}>
                    <Button className={styles.button} onClick={props.onDelete} htmlType="submit">
                        Delete
                    </Button>
                    <Button className={styles.button_reset} onClick={() => props.setIsOpen(false)}>Cancel</Button>
                </div>
            </div>
        </Modal>
    )
}

export default FormDelete