import { useNavigate } from "react-router-dom"

const Users = () => {
    const navigate = useNavigate()

    const navigateTo = (to: string) => {
        navigate(`${to}`)
    }

    return (
        <>
            <span onClick={() => navigateTo("1")}>User 1</span><br />
            <span onClick={() => navigateTo("2")}>User 2</span><br />
            <span onClick={() => navigateTo("3")}>User 3</span><br />
        </>
    )
}

export default Users