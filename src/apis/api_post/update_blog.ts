import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    title: string;
    content: string;
}

export const updateBlogService = async (id: string , data: Props): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}posts/update_post_follow_token/${id}`, data)
    return res.data
}