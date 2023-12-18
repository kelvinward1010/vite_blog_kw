import { BASE_URL } from "../../../constant/config";
import { apiClient } from "../../../lib/api";





interface Props {
    like: number;
}

export const createBlogService = async (id: string, data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}like/${id}`, data)
    return res.data
}