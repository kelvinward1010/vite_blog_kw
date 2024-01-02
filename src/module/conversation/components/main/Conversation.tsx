import { useLocation } from "react-router-dom";
import Infoconversation from "./infoconversation/Infoconversation";
import LayoutMessage from "./layoutmessage/LayoutMessage";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useGetConversationIdService } from "../../../../apis/conversations/get_conversation_id";
import { storageService } from "../../../../utils/storage";
import { handleConfigDataUserConversation } from "../../config";
import { useRecoilState, useRecoilValue } from "recoil";
import { refeshConversation } from "../../../../store/state/state";
import { refeshConversationState } from "../../../../store/state/atom";

export function Conversation() {
    const location = useLocation()?.pathname;
    const id_conversation = location.split("/")[3];
    const [data, setData] = useState<any[]>([]);
    const isRefeshConversation = useRecoilValue(refeshConversation);
    const [, setIsRefeshConversation] = useRecoilState(refeshConversationState);

    useEffect(() =>{
        useGetConversationIdService({id: id_conversation}).then((res) => setData(res?.data));
    },[id_conversation])

    const handleSettimetoRefesh = () => setIsRefeshConversation(false);

    useEffect(() => {
        useGetConversationIdService({id: id_conversation}).then((res) => setData(res?.data));
        setTimeout(handleSettimetoRefesh, 5000)
    },[isRefeshConversation == true])

    const current_user = storageService.getStorage().current_user;
    const dataUser = handleConfigDataUserConversation(data, current_user);

    return (
        <div className={styles.container}>
            <div className={styles.right_converss}>
                <LayoutMessage setRefeshData={setIsRefeshConversation} conversation={data} dataUser={dataUser} current_user={current_user}/>
            </div>
            <div className={styles.left_converss}>
                <Infoconversation dataUser={dataUser}/>
            </div>
        </div>
    )
}