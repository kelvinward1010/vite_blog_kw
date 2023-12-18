import { BASE_URL } from "../../../constant/config";
import { apiClient } from "../../../lib/api";


interface Props {
    isLike: number;
}

export const likeBlogService = async (id: string, data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}like/${id}`, data)
    return res.data
}