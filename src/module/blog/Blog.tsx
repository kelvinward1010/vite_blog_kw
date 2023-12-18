
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

    const handleplusblog = () => {
        if(data?.length > countBlog){
            setCountBlog(countBlog + 1)
        }else{
            setCountBlog(data?.length)
        }
    }
    const handleminusblog = () => {
        if(countBlog > 1){
            setCountBlog(countBlog - 1)
        }
        if(countBlog == 1) {
            setCountBlog(1)
        }
    }
    
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
                        {countBlog != data?.length || configdata?.length == 0 ? (
                            <div className={styles.moredata} onClick={handleplusblog}>
                                <p>More Blog</p> 
                            </div>
                        ): null}
                        {configdata?.length != 1 ? (
                            <div className={styles.lessdata} onClick={handleminusblog}>
                                <p>Less Blog</p> 
                            </div>
                        ): null}
                    </div>
                </div>
            </div>
        </div>
    )
}