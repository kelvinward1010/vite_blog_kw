import { selector } from "recoil";
import { refeshBlogState } from "./atom";




export const refeshBlog: any = selector({
    key: "refeshBG",
    get: ({ get }) => {
        const refeshbg = get(refeshBlogState);
        return refeshbg;
    },
});