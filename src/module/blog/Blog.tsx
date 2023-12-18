
import { useEffect, useState } from "react";
import { getBlogsService } from "./api/get_blogs";
import FormBlog from "./components/formblog/FormBlog";
import FormCreate from "./components/formcreate/FormCreate";
import styles from "./style.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { refeshBlog } from "./state/state";
import { refeshBlogState } from "./state/atom";
import { Spin } from "antd";


export function Blog() {

    const [data, setData] = useState<any[]>([]);
    const isRefeshBlog = useRecoilValue(refeshBlog);
    const [, setIsRefesh] = useRecoilState(refeshBlogState);
    const [countBlog, setCountBlog] = useState(3);
    
    useEffect(() => {
        getBlogsService().then((res) => setData(res));
    },[])

    const handleSettimetoRefesh = () => setIsRefesh(false);

    useEffect(() => {
        getBlogsService().then((res) => setData(res));
        setTimeout(handleSettimetoRefesh, 5000)
    },[isRefeshBlog == true])

    const configdata = data?.slice(-countBlog)?.reverse();

    const handleplusblog = () => setCountBlog(countBlog + 1)
    const handleminusblog = () => setCountBlog(countBlog - 1)

    return (
        <div className={styles.container}>
            <div className={styles.formcreate}>
                <FormCreate />
            </div>
            <div className={styles.blog}>
                <div className={styles.blog_center}>
                    {data.length == 0 ? <Spin className={styles.spin} size={'large'}/> : null}
                    {configdata?.map((item) => (
                        <FormBlog key={item?.id} blog={item}/>
                    ))}
                  
                    <div className={styles.datacount}>
                        <div className={styles.moredata} onClick={handleplusblog}>
                            <p>More Blog</p> 
                        </div>
                        <div className={styles.lessdata} onClick={handleminusblog}>
                            <p>Less Blog</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}