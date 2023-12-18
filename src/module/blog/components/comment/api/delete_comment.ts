import { BASE_URL } from "../../../../../constant/config";
import { apiClient } from "../../../../../lib/api";


export const deleteCommentService = async (id: string): Promise<any> => {
    const res = await apiClient?.delete(`${BASE_URL}comments/delete_follow_token/${id}`)
    return res.data
}