import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { refeshBlog } from "../../../store/state/state";
import { refeshBlogState } from "../../../store/state/atom";
import { usePostsUserService } from "../../../apis/api_post/get_posts_user";
import FormBlog from "../../../components/blog/formblog/FormBlog";
import { Avatar, Button, Image, Typography, notification } from "antd";
import { CheckCircleOutlined, MessageOutlined, UserAddOutlined, WarningOutlined } from "@ant-design/icons";
import HinhNenProfileDefault from "../../../assets/image/hinh-nen-profile-default.jpg";
import ReactLogo from "../../../assets/image/react_logo.png";
import { useCreateConversationService } from "../../../apis/conversations/create_conversation";
import { useGetConversationsService } from "../../../apis/conversations/get_conversation_token";
import { storageService } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

interface Props{
    user?: any;
    user_id?: string;
}

function Blog(props: Props) {

    const negative = useNavigate();
    const [data, setData] = useState<any[]>([]);
    const [dataConverss, setDataConverss] = useState<any[]>([]);
    const isRefeshBlog = useRecoilValue(refeshBlog);
    const [, setIsRefesh] = useRecoilState(refeshBlogState);
    const current_user = storageService.getStorage().current_user;
    
    useEffect(() => {
        usePostsUserService({ id: props?.user_id as string}).then((res) => setData(res?.data));
    },[])

    const handleSettimetoRefesh = () => setIsRefesh(false);

    useEffect(() => {
        usePostsUserService({ id: props?.user_id as string}).then((res) => setData(res?.data));
        setTimeout(handleSettimetoRefesh, 5000)
    },[isRefeshBlog == true])

    const configdata = data?.reverse();

    useEffect(() =>{
        useGetConversationsService().then((res) => setDataConverss(res?.data));
    },[])

    // const handleConfigCreateAndGoConversation = () => {
    //     for (const i in dataConverss){
    //         if( )
    //     }
    // }
    const checkrange = []
    for (const i in dataConverss){
        if(dataConverss[i]?.user_1?.id == props.user_id && dataConverss[i]?.user_2?.id == current_user?.id || dataConverss[i]?.user_1?.id == current_user?.id && dataConverss[i]?.user_2?.id == props.user_id){
            checkrange.push(dataConverss[i])
        }
    }

    const handleCreateAndGoConversation = () => {
        if(checkrange?.length != 0){
            negative(`/home/conversation/${props.user_id}`)
        }else{
            const data = {
                userId_1: props.user_id,
            }

            useCreateConversationService(data).then(() => {
                notification.success({
                    message: "You have been create conversation successfully!",
                    icon: (
                        <CheckCircleOutlined className="done" />
                    )
                })
            }).catch((res) => {
                notification.error({
                    message: `Could not create conversation. Please try again!`,
                    description: ` ${res?.response?.data?.detail}`,
                    icon: (
                        <WarningOutlined className='warning' />
                    )
                })
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.head_img}>
                    <Image
                        width={'100%'} 
                        alt="profile-img"
                        height={200}  
                        src={HinhNenProfileDefault}
                    />
                </div>
                <div className={styles.head_info}>
                    <div className={styles.head_info_first}>
                        <Avatar className={styles.avatar_private} size={64} src={ReactLogo} />
                        <Title level={4}>{props.user?.name}</Title>
                    </div>
                    <div className={styles.head_info_actions}>
                        <Button onClick={handleCreateAndGoConversation} icon={<MessageOutlined />} className={styles.button}>Message</Button>
                        <Button icon={<UserAddOutlined />} className={styles.button}>Follow</Button>
                    </div>
                </div>
            </div>
            <div className={styles.blog}>
                <div className={styles.blog_center}>
                    {configdata?.map((item) => (
                        <FormBlog key={item?.id} setIsRefesh={setIsRefesh} blog={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog