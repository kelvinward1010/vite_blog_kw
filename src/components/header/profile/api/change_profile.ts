import { BASE_URL } from "../../../../constant/config";
import { apiClient } from "../../../../lib/api";




interface Props {
    email: string;
    old_password: string;
    password: string;
}

export const changeProfileService = async (id: any ,data: Props): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}users/update/${id}`, data)
    return res.data
}