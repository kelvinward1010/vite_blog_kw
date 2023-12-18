
import styles from "./style.module.scss";

interface Props{
    name?: string;
    onClick?: () => void;
    type?: "delete" | "normal" | "fullbg";
}


function ButtonConfig(props: Props):JSX.Element {

    return (
        <button 
            onClick={props.onClick} 
            className={
                props?.type === "delete" ? 
                styles.buttonconfigtodelete :
                props.type === "normal" ?
                styles.buttonconfignormal :
                styles.buttonconfigfullbg
            }
        >
            {props.name}
        </button>
    )
}

export default ButtonConfig