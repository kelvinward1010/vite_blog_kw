import MessageLeftItem from "./messageitem/MessageLeftItem";
import MessageRightItem from "./messageitem/MessageRightItem";
import styles from "./style.module.scss";

const datafake = [
    {
        id: "1",
        user: "kelvin",
        content: "Hello world 1"
    },
    {
        id: "2",
        user: "ward",
        content: "Hello world 2"
    },
    {
        id: "3",
        user: "kelvin",
        content: "Hello world 3"
    },
    {
        id: "4",
        user: "kelvin",
        content: "Hello world 4"
    },
    {
        id: "5",
        user: "ward",
        content: "Hello world 5"
    },
    {
        id: "6",
        user: "kelvin",
        content: "Hello world 6"
    },
    {
        id: "7",
        user: "ward",
        content: "Hello world 8"
    },
    {
        id: "8",
        user: "kelvin",
        content: "An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable."
    },
    {
        id: "9",
        user: "ward",
        content: "Hello world 9"
    },
    {
        id: "10",
        user: "kelvin",
        content: "Hello world 10"
    },
    {
        id: "11",
        user: "ward",
        content: "Hello world 11"
    },
    {
        id: "12",
        user: "ward",
        content: "Hello world 12"
    },
    {
        id: "13",
        user: "kelvin",
        content: "Hello world 13"
    },
    {
        id: "14",
        user: "ward",
        content: "Hello world 14"
    },
]


function Message() {
    return (
        <div className={styles.container_messages}>
            <div className={styles.messages}>
                {datafake?.map((item) => {
                    const styleMessage = () => {
                        return item?.user == "kelvin" ? "end" : "start"
                    }
                    return(
                        <div 
                            style={{
                                width: "100%", 
                                height: "fit-content",
                                display: "flex",
                                justifyContent: `${styleMessage()}`
                            }}
                            key={item.id}
                        >
                            {item?.user == "kelvin" 
                                ? <MessageRightItem message={item}/>
                                : <MessageLeftItem message={item}/>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Message