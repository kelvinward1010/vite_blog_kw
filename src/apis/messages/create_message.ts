import { BASE_URL } from "../../constant/config";
import { apiClient } from "../../lib/api";


interface Props {
    content: string;
}

export const useCreateMessageService = async (id: string, data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}message/create/${id}`, data)
    return res.data
}