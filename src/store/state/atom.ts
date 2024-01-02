import { atom } from "recoil";


export const refeshBlogState = atom<any>({
    key: "refesh",
    default: false,
});

export const refeshConversationState = atom<any>({
    key: "refeshConversation",
    default: false,
});