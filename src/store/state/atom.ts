import { atom } from "recoil";


export const refeshBlogState = atom<any>({
    key: "refesh",
    default: false,
});