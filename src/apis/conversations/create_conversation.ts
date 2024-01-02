import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    userId_1?: string;
}

export const useCreateConversationService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}conversation/create/`, data)
    return res.data
}