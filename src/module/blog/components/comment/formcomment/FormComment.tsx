
import { Avatar, Dropdown, Typography, notification } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";
import ButtonConfig from "../../../../../components/button/ButtonConfig";
import FormUpdate from "../formupdatecomment/FormUpdate";
import { useState } from "react";
import { deleteCommentService } from "../api/delete_comment";
import { refeshBlogState } from "../../../state/atom";
import { useRecoilState } from "recoil";
import FormDelete from "../../../../../components/formdelete/FormDelete";
import { storageService } from "../../../../../utils/storage";

interface Props{
    comment?: any;
}
const {Text} = Typography;

function FormComment(props: Props) {

    const user_comment = props.comment?.user;
    const current_user = storageService.getStorage().current_user;
    const [, setIsRefesh] = useRecoilState(refeshBlogState);
    const [openUpdateCmt, setOpenUpdateCmt] = useState(false);
    const [openDeleteCmt, setOpenDeleteCmt] = useState(false);
    
    
    const items = [
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={() => setOpenUpdateCmt(true)} 
                    name="Update"
                />
            </>,
            key: '0',
        },
        {
            label: <>
                <ButtonConfig
                    type={'delete'}
                    onClick={() => setOpenDeleteCmt(true)} 
                    name="Delete"
                />
            </>,
            key: '1',
        },
    ]

    const handleDeleteComment = () => {
        const data = {
            id: props?.comment?.id,
        }

        deleteCommentService(data?.id).then(() => {
            notification.success({
                message: "You have been delete comment successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            setIsRefesh(true);
            setOpenDeleteCmt(false);
        }).catch((res) => {
            notification.error({
                message: `Could not delete comment. Please try again!`,
                description: ` ${res?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning' />
                )
            })
        })
    }

    return (
        <>
            <FormUpdate 
                isOpen={openUpdateCmt}
                setIsOpen={setOpenUpdateCmt}
                comment={props.comment}
            />
            <FormDelete
                isOpen={openDeleteCmt}
                setIsOpen={setOpenDeleteCmt}
                onDelete={handleDeleteComment}
                title={"Delete Comment"}
                name={"comment"}
            />
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.top}>
                        <div className={styles.top_head}>
                            <Avatar className={styles.avatar} icon={<UserOutlined />} />
                            <Text className={styles.name}>{user_comment?.name}</Text>
                        </div>
                        {current_user?.email == user_comment?.email ?  <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                            placement={'bottomRight'}
                        >
                            <span className={styles.action}>&sdot;&sdot;&sdot;</span>
                        </Dropdown>: null}
                    </div>
                    <div className={styles.content}>
                        <Text>{props?.comment?.content}</Text>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormComment