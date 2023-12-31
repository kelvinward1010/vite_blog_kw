import { Avatar, Typography } from "antd"
import styles from "./style.module.scss"
import { UserOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import { searchUsersService } from "../../../../apis/api_user/search_users";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

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
                <div className={styles.head}>
                    <Title level={5}>Contacts</Title>
                    {/* <FormSearch
                        placeholder="Search user..." 
                        setInputValue={setText}
                    /> */}
                </div>
                {dataSearch?.map((data) => (
                    <div className={styles.user} onClick={() => handleGoUser(data?.id)} key={data?.id}>
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                        <Text className={styles.name}>{data?.name}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormUsers