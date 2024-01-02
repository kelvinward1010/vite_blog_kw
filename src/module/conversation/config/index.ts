

export const handleConfigDataUserConversation = (conversation: any, current_user: any) => {
    if(conversation?.user_1?.id == current_user?.id){
        return conversation?.user_2;
    }else if(conversation?.user_2?.id == current_user?.id){
        return conversation?.user_1;
    }
}