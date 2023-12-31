import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    id: string;
}

export const deleteBlogService = async (data: Props): Promise<any> => {
    const res = await apiClient?.delete(`${BASE_URL}posts/delete_post_follow_token/${data?.id}`)
    return res.data
}