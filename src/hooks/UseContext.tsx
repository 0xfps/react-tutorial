import { useContext } from "react"
import { MyContext } from "../App"

const UseContext = () => {
    const user = useContext(MyContext)
    return (
        <>
            <div>{user}</div>
        </>
    )
}

export default UseContext