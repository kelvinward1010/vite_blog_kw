import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    title: string;
    content: string;
}

export const createBlogService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}posts/create/`, data)
    return res.data
}