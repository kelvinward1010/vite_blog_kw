import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";

interface Props {
    id: string;
}

export const useGetConversationIdService = async (data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}conversation/conversation_id/${data.id}`)
    return res.data
}