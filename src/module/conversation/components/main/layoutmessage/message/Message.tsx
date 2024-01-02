import { Typography } from "antd";
import MessageLeftItem from "./messageitem/MessageLeftItem";
import MessageRightItem from "./messageitem/MessageRightItem";
import styles from "./style.module.scss";
import { handleConfigDataUserConversation } from "../../../../config";

interface Props {
    conversation?: any;
    current_user?: any;
}

const { Title } = Typography;


function Message(props: Props){

    const messages = props.conversation?.messages;
    const user_watch = props.current_user;
    const dataUser = handleConfigDataUserConversation(props.conversation, user_watch);
    
    return (
        <div className={styles.container_messages}>
            <div className={styles.messages}>
                {messages?.map((item: any) => {
                    const styleMessage = () => {
                        return item?.user?.name == user_watch?.name ? "end" : "start"
                    }
                    return(
                        <div 
                            style={{
                                width: "100%", 
                                height: "fit-content",
                                display: "flex",
                                justifyContent: `${styleMessage()}`
                            }}
                            key={item.id}
                        >
                            {item?.user?.name ==  user_watch?.name 
                                ? <MessageRightItem message={item}/>
                                : <MessageLeftItem message={item}/>
                            }
                        </div>
                    )
                })}
                {messages?.length == 0 && <div className={styles.nonemessage}>
                    <Title level={4} className={styles.title_nonemessage}>Send a first message to talk with {dataUser?.name}</Title>
                </div>}
            </div>
        </div>
    )
}

export default Message