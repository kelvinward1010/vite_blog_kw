import { Avatar, Typography } from "antd"
import styles from "./style.module.scss"
import { UserOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import { searchUsersService } from "../../api/search_users";
import FormSearch from "../formsearch/FormSearch";

const { Text } = Typography;

function FormUsers() {

    const [dataSearch, setDataSearch] = useState<any[]>([]);
    const [text, setText] = useState('');

    useEffect(() => {
        searchUsersService({ search: text}).then((res) => setDataSearch(res));
    },[text != ''])
    console.log(dataSearch)
    return (
        <div className={styles.container}>
            <div className={styles.users}>
                <FormSearch
                    placeholder="Search user..." 
                    setInputValue={setText}
                />
                {dataSearch?.map((data) => (
                    <div className={styles.user} key={data?.id}>
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                        <Text className={styles.name}>{data?.email}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormUsers