import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


export const useGetConversationsService = async (): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}conversation/get_all_conversations_token`)
    return res.data
}