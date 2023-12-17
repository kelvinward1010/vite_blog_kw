
import { useEffect, useState } from "react";
import { getBlogsService } from "./api/get_blogs";
import FormBlog from "./components/formblog/FormBlog";
import FormCreate from "./components/formcreate/FormCreate";
import styles from "./style.module.scss";


export function Blog() {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getBlogsService().then((res) => setData(res));
    },[])
    
    return (
        <div className={styles.container}>
            <div className={styles.formcreate}>
                <FormCreate />
            </div>
            <div className={styles.blog}>
                <div className={styles.blog_center}>
                    {data?.reverse()?.map((item) => (
                        <FormBlog key={item?.id} blog={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}