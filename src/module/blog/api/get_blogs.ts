import { BASE_URL } from "../../../constant/config";
import { apiClient } from "../../../lib/api";


export const getBlogsService = async (): Promise<any[]> => {
    const res = await apiClient?.get(`${BASE_URL}posts`)
    return res.data
}