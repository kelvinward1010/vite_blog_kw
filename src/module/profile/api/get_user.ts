import { BASE_URL } from "../../../constant/config";
import { apiClient } from "../../../lib/api";


interface Props {
    id: string;
}

export const userService = async ( data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}users/find_user/${data.id}`,)
    return res.data
}