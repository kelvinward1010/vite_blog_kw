import { useEffect, useState } from "react";
import FormUser from "./formuser/FormUser";
import styles from "./style.module.scss";
import { useGetConversationsService } from "../../../../apis/conversations/get_conversation_token";
import { Spin } from "antd";

function Navbar() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() =>{
        useGetConversationsService().then((res) => setData(res?.data));
    },[])


    return (
        <div className={styles.container}>
            {data?.length == 0 ? <Spin fullscreen /> : null}
            <div className={styles.users}>
                {data.map((conversation: any) => (
                    <FormUser key={conversation?.id} conversation={conversation}/>
                ))}
            </div>
        </div>
    )
}

export default Navbar