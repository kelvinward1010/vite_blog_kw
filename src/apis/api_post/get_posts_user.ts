import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    id: string;
}

export const usePostsUserService = async ( data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}posts/posts_follow_user/${data.id}`,)
    return res.data
}