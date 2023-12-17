
import { useEffect, useState } from "react";
import { getBlogsService } from "./api/get_blogs";
import FormBlog from "./components/formblog/FormBlog";
import FormCreate from "./components/formcreate/FormCreate";
import styles from "./style.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { refeshBlog } from "./state/state";
import { refeshBlogState } from "./state/atom";


export function Blog() {

    const [data, setData] = useState<any[]>([]);
    const isRefeshBlog = useRecoilValue(refeshBlog)
    const [, setIsRefesh] = useRecoilState(refeshBlogState);
    
    useEffect(() => {
        getBlogsService().then((res) => setData(res));
    },[])

    const handleSettimetoRefesh = () => setIsRefesh(false);

    useEffect(() => {
        getBlogsService().then((res) => setData(res));
        setTimeout(handleSettimetoRefesh, 5000)
    },[isRefeshBlog == true])

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