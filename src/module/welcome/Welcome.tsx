import { useEffect, useState } from 'react';
import styles from "./style.module.scss"
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import storage from '../../utils/storage';


const { Title } = Typography;


export function Welcome():JSX.Element {

    const navigate = useNavigate();

    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
            return navigate("/sign_in")
        }, 3000);
    };

    useEffect(() => {
        if (storage.getToken()) navigate("/home/introduce")
    }, [navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Title className={styles.welcome_title} level={2}>Welcome to my FASTAPI MongoDB</Title>
                <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                    Go in to my house!
                </Button>
            </div>
        </div>
    )
}
