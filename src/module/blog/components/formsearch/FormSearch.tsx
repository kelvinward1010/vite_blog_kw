import { Input } from "antd"
import styles from "./style.module.scss"

interface Props{
    setInputValue: any;
    placeholder: string;
}


function FormSearch(props: Props) {

    const onSearch = (input: any) => {
        props.setInputValue(input)
    }

    return (
        <div className={styles.container}>
            <Input 
                className={"input_search"}
                placeholder={props.placeholder}
                onChange={(e) => onSearch(e.currentTarget.value)}
            />
        </div>
    )
}

export default FormSearch