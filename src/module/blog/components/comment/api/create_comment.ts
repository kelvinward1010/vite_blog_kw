import { BASE_URL } from "../../../../../constant/config";
import { apiClient } from "../../../../../lib/api";


interface Props {
    content: string;
}

export const createCommentService = async (id: string, data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}comments/create/${id}`, data)
    return res.data
}