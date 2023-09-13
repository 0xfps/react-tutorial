// @ts-nocheck
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MyContext } from "../../App"

export const Home = () => {
    const navigate = useNavigate()
    const data = useContext(MyContext)
    return (
        <>
            <div>Home {data.getting()}</div>
            {/* Optional: Adding the replace object removes the current route from the browser history. */}
            <button onClick={() => navigate("/contact", { replace: false })}>Go To Contact</button>
        </>
    )
}