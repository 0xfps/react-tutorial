import { useNavigate, useSearchParams } from "react-router-dom"

const Users = () => {
    const navigate = useNavigate()

    // Object, function.
    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get("filter")

    const navigateTo = (to: string) => {
        navigate(`${to}`)
    }

    return (
        <>
            <span onClick={() => navigateTo("1")}>User 1</span><br />
            <span onClick={() => navigateTo("2")}>User 2</span><br />
            <span onClick={() => navigateTo("3")}>User 3</span><br />

            {
                showActiveUsers && "These are active users!"
            }

            {/* Any param name of choice. */}
            <button onClick={() => setSearchParams({ filter: "active" })}>Click to add search params</button>
            <button onClick={() => setSearchParams({})}>Click to remove search params</button>
        </>
    )
}

export default Users