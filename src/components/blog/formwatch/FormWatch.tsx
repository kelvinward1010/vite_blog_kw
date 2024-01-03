
import { Avatar, Modal, Typography } from "antd";
import styles from "./style.module.scss";
import { LikeFilled, LikeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";
import FormCreateComment from "../comment/formcreatecomment/FormCreateComment";
import FormComment from "../comment/formcomment/FormComment";


const { Text, Title } = Typography;

interface Props{
    isOpen?: boolean;
    setIsOpen?: any;
    blog?: any;
    onLikeFunction?: () => void;
    checkliked?: any;
}

function FormWatch(props: Props) {

    const user_owner_blog = props?.blog?.user;

    const title = () => {
        return(
            <div className={styles.top}>
                <div className={styles.top_head}>
                    <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    <Text className={styles.name}>{user_owner_blog?.name}</Text>
                </div>
            </div>
        )
    }

    const comments: any[] = props?.blog?.comments?.reverse()
    const length_comment = props?.blog?.comments?.length;
    const length_like = props.blog?.likes?.length;

    return (
        <Modal
            title={title()}
            open={props.isOpen}
            onCancel={() =>props.setIsOpen(false)}
            width={700}
            className="ant_modal"
            footer={null}
        >
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.content}>
                        <Title className={styles.title} level={4}>{props.blog?.title}</Title>
                        <Text className={styles.content}>{props.blog?.content}</Text>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footer_action}>
                            <div className={styles.like}>
                                {!props.checkliked ? 
                                    <LikeOutlined className={styles.iconlike} onClick={props.onLikeFunction}/> :
                                    <LikeFilled className={styles.iconlike} onClick={props.onLikeFunction}/>
                                }
                                <Text className={styles.titleLike}>Like ({length_like})</Text>
                            </div>
                            <div className={styles.comment}>
                                <MessageOutlined />
                                <Text className={styles.titleComment}>Comment ({length_comment})</Text>
                            </div>
                        </div>
                        <div className={styles.content_comment}>
                            <div className={styles.form_cmt}>
                                <FormCreateComment blog={props.blog} />
                            </div>
                            <div className={styles.comments}>
                                {comments?.map((comment: any) =>(
                                    <FormComment comment={comment} key={comment?.id}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default FormWatch