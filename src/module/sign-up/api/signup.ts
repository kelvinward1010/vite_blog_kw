import { BASE_URL, LOCAL_USER } from "../../../constant/config";
import { apiClient } from "../../../lib/api";



interface Props {
    name: string;
    email: string;
    password: string;
}

export const signupService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}${LOCAL_USER}/create`, data)
    return res.data
}