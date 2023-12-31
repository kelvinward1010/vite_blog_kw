import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    search: string;
}

export const searchBlogService = async ( data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}posts/search?search=${data.search}`,)
    return res.data
}