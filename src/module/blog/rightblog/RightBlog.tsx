import { Image } from "antd";
import FormUsers from "../components/formusers/FormUsers";
import styles from "./style.module.scss";
import HinhNenDefault from "../../../assets/image/hinh-nen-may-tinh-anime-1.jpg"

function RightBlog() {
    return (
        <div className={styles.container}>
            <div className={styles.head_right}>
                <Image
                    width={'100%'} 
                    alt="profile-img"
                    height={200}  
                    src={HinhNenDefault}
                    className={styles.img}
                />
            </div>
            <div className={styles.users}>
                <FormUsers />
            </div>
        </div>
    )
}

export default RightBlog