import { selector } from "recoil";
import { refeshBlogState, refeshConversationState } from "./atom";




export const refeshBlog: any = selector({
    key: "refeshBG",
    get: ({ get }) => {
        const refeshbg = get(refeshBlogState);
        return refeshbg;
    },
});

export const refeshConversation: any = selector({
    key: "refeshConverss",
    get: ({ get }) => {
        const refeshConversation = get(refeshConversationState);
        return refeshConversation;
    },
});