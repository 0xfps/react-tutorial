// @ts-nocheck
import { useContext } from "react"
import { MyContext } from "../App"

const UseContext = () => {
    const user = useContext(MyContext)
    return (
        <>
            <div>{user.getting()}</div>
            <button onClick={function () { user.setting() }}>Increment</button>
        </>
    )
}

export default UseContext