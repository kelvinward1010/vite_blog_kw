
import { Avatar, Dropdown, Typography, notification } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined, LikeOutlined, MessageOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";
import ButtonConfig from "../../../../components/button/ButtonConfig";
import { deleteBlogService } from "../../api/delete_blog";
import { useRecoilState } from "recoil";
import { refeshBlogState } from "../../state/atom";
import { useState } from "react";
import FormUpdate from "../formupdate/FormUpdate";
import FormDelete from "../../../../components/formdelete/FormDelete";
import FormWatch from "../formwatch/FormWatch";

const { Text, Title } = Typography;

interface Props {
    blog?: any
}

function FormBlog(props: Props) {

    //const current_user = storageService.getStorage().current_user;
    const user_owner_blog = props?.blog?.user;
    const [, setIsRefesh] = useRecoilState(refeshBlogState);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openWatchBlog, setOpenWatchBlog] = useState(false);


    const handleDeleteBlog = () => {
        const data = {
            id: props?.blog?.id,
        }

        deleteBlogService(data).then(() => {
            notification.success({
                message: "You have been delete blog successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            setIsRefesh(true);
            setOpenDelete(false);
        }).catch((res) => {
            notification.error({
                message: `Could not delete blog. Please try again!`,
                description: ` ${res?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning' />
                )
            })
        })
    }

    const items = [
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={() => setOpenUpdate(true)} 
                    name="Update"
                />
            </>,
            key: '0',
        },
        {
            label: <>
                <ButtonConfig
                    type={'delete'}
                    onClick={() => setOpenDelete(true)} 
                    name="Delete"
                />
            </>,
            key: '1',
        },
    ]

    return (
        <>
            <FormUpdate 
                isOpen={openUpdate}
                setIsOpen={setOpenUpdate}
                blog={props.blog}
            />
            <FormDelete 
                isOpen={openDelete}
                setIsOpen={setOpenDelete}
                blog={props.blog}
                onDelete={handleDeleteBlog}
            />
            <FormWatch
                isOpen={openWatchBlog}
                setIsOpen={setOpenWatchBlog}
                blog={props.blog}
            />
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.top}>
                        <div className={styles.top_head}>
                            <Avatar className={styles.avatar} icon={<UserOutlined />} />
                            <Text className={styles.name}>{user_owner_blog?.email}</Text>
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
                    <div className={styles.content} onClick={() => setOpenWatchBlog(true)}>
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
        </>
    )
}

export default FormBlog