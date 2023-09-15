// @ts-nocheck
import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import { useNavigate } from "react-router-dom"
// Protected routes.
const Profile = () => {
    const log = useContext(MyContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") == "false") {
            navigate("/")
        }
    }, [])

    return (
        <div>
            {
                (localStorage.getItem("isLoggedIn") == "true")
                    ? "Logged In" : "Not logged in"
            }

            <button onClick={() => log.login()}>Log in</button>
            <button onClick={() => log.logout()}>Log out</button>
        </div>
    )
}

export default Profile