import axios from "axios";
import { BASE_URL } from "../../../constant/config";

interface Props {
    search: string;
}

export const searchUsersService = async (data: Props): Promise<any[]> => {
    const res = await axios?.get(`${BASE_URL}users/search?search=${data?.search}`)
    return res.data
}