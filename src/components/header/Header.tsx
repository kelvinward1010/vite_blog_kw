
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import storage from "../../utils/storage";


function Header() {

    const handleLogout = () => {
        storage.clearToken();
    }

    return (
        <div className={styles.container}>
            Header
            <Link to={'/sign_in'}>
                <button onClick={handleLogout}>Logout</button>
            </Link>
        </div>
    )
}

export default Header