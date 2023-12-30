import { Avatar, Typography } from "antd"
import styles from "./style.module.scss"
import { UserOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import { searchUsersService } from "../../api/search_users";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function FormUsers() {

    const negative = useNavigate();

    const [dataSearch, setDataSearch] = useState<any[]>([]);
    const [text,] = useState('');

    useEffect(() => {
        searchUsersService({ search: text}).then((res) => setDataSearch(res));
    },[text != ''])

    const handleGoUser = (id: string) => {
        negative(`/home/profile/${id}`)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.users}>
                {/* <FormSearch
                    placeholder="Search user..." 
                    setInputValue={setText}
                /> */}
                {dataSearch?.map((data) => (
                    <div className={styles.user} onClick={() => handleGoUser(data?.id)} key={data?.id}>
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                        <Text className={styles.name}>{data?.email}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormUsers