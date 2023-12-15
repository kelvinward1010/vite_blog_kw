import { BASE_URL } from "../../../constant/config";
import { apiClient } from "../../../lib/api";



interface Props {
    email: string;
    password: string;
}

export const signinService = async (data: Props): Promise<any> => {
    const res = await apiClient?.post(`${BASE_URL}auth/login`, data)
    return res.data
}