import axios from "axios";
import { BASE_URL } from "../../../constant/config";


export const getBlogsService = async (): Promise<any[]> => {
    const res = await axios?.get(`${BASE_URL}posts/posts_with_everthing`)
    return res.data
}