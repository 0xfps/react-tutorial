// @ts-nocheck
import { MyContext } from "../App";
import { useContext } from "react"

export function User() {
    const f = useContext(MyContext)
    return (
        <div>
            {f.getting()}
        </div>
    )
}