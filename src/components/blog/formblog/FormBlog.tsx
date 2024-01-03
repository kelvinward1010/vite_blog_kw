
import { Avatar, Dropdown, Typography, notification } from "antd";
import styles from "./style.module.scss";
import { CheckCircleOutlined, LikeFilled, LikeOutlined, MessageOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";
import ButtonConfig from "../../button/ButtonConfig";
import { deleteBlogService } from "../../../apis/api_post/delete_blog";
import { useEffect, useState } from "react";
import FormUpdate from "../formupdate/FormUpdate";
import FormDelete from "../../formdelete/FormDelete";
import FormWatch from "../formwatch/FormWatch";
import { storageService } from "../../../utils/storage";
import { likeBlogService } from "../../../apis/api_post/like_blog";

const { Text, Title } = Typography;

interface Props {
    blog?: any
    setIsRefesh?: any
}

function FormBlog(props: Props) {

    const current_user = storageService.getStorage().current_user;
    const user_owner_blog = props?.blog?.user;
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openWatchBlog, setOpenWatchBlog] = useState(false);
    const [isLike, setIsLike] = useState(1);
    const [textActionLike, setTextActionLike] = useState('')


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
            props.setIsRefesh(true);
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

    const data_likes: any[] = props.blog?.likes;
    const check_like = data_likes.find(item => String(item) == String(current_user?.id))
    
    useEffect(() => {
        if(!check_like) {
            setIsLike(1)
            setTextActionLike('liked')
        }else{
            setIsLike(0)
            setTextActionLike('moved')
        }
    },[check_like, isLike, setIsLike])

    const handleLikeBlog = () => {

        const data = {
            isLike: isLike,
        }

        likeBlogService(props?.blog?.id, data).then(() => {
            notification.success({
                message: `You have been ${textActionLike} blog successfully!`,
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            props.setIsRefesh(true);
        }).catch((res) => {
            notification.error({
                message: `Could not ${textActionLike} blog. Please try again!`,
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

    const length_comment = props?.blog?.comments?.length;
    const length_like = props.blog?.likes?.length;

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
                onDelete={handleDeleteBlog}
                title={"Delete Blog"}
                name={"blog"}
            />
            <FormWatch
                isOpen={openWatchBlog}
                setIsOpen={setOpenWatchBlog}
                blog={props.blog}
                onLikeFunction={handleLikeBlog}
                checkliked={check_like}
            />
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.top}>
                        <div className={styles.top_head}>
                            <Avatar className={styles.avatar} icon={<UserOutlined />} />
                            <Text className={styles.name}>{user_owner_blog?.name}</Text>
                        </div>
                        {current_user?.email == props.blog?.user?.email ? <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                            placement={'bottomRight'}
                        >
                            <span className={styles.action}>&sdot;&sdot;&sdot;</span>
                        </Dropdown> : null}
                    </div>
                    <div className={styles.content} onClick={() => setOpenWatchBlog(true)}>
                        <Title className={styles.title} level={4}>{props.blog?.title}</Title>
                        <Text className={styles.content_detail}>{props.blog?.content}</Text>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.like}>
                            {!check_like ? 
                                <LikeOutlined className={styles.iconlike} onClick={handleLikeBlog}/> :
                                <LikeFilled className={styles.iconlike} onClick={handleLikeBlog}/>
                            }
                            <Text className={styles.titleLike}>Like ({length_like})</Text>
                        </div>
                        <div className={styles.comment}>
                            <MessageOutlined />
                            <Text className={styles.titleComment}>Comment ({length_comment})</Text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormBlog