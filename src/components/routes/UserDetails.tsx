import { useNavigate, useParams } from "react-router-dom"

const UserDetails = () => {
    const navigate = useNavigate()
    const { userId } = useParams()

    return (
        <>
            <div>
                Returning information on user {userId}!!
            </div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}

export default UserDetails