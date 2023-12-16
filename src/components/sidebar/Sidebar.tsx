
import { useNavigate } from "react-router-dom";
import ButtonConfig from "../button/ButtonConfig";
import styles from "./style.module.scss";


function Sidebar() {

    const navigate = useNavigate()

    const handleComeHome = () => navigate("/home/introduce")
    const handleComePost = () => navigate("/home/post")

    const configURLs = [
        {
            name: "Introducation",
            pathCome: handleComeHome
        },
        {
            name: "Post",
            pathCome: handleComePost
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                {configURLs.map((configURL) =>(
                    <div className={styles.configURL} key={configURL.name}>
                        <ButtonConfig name={configURL.name} onClick={configURL.pathCome}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar