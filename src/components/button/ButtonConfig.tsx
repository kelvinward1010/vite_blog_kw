
import styles from "./style.module.scss";

interface Props{
    name?: string;
    onClick?: () => void;
}


function ButtonConfig(props: Props):JSX.Element {

    return (
        <button onClick={props.onClick} className={styles.buttonconfig}>
            {props.name}
        </button>
    )
}

export default ButtonConfig