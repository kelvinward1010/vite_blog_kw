import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    content: string;
}

export const updateCommentService = async (id: string, data: Props): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}comments/update_follow_token/${id}`, data)
    return res.data
}