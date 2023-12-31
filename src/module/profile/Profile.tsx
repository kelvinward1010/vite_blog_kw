import styles from "./style.module.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { userService } from "../../apis/api_user/get_user";
import Blog from "./blogs/Blog";

export function Profile() {

    const location = useLocation()?.pathname;
    const id_user = location.split("/")[3];
    const [user, setUser] = useState<any>();

    useEffect(() => {
        userService({ id: id_user}).then((res) => setUser(res?.data));
    },[])
    
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Blog user={user} user_id={id_user}/>
            </div>
        </div>
    )
}
