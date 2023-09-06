import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Home</div>
            {/* Optional: Adding the replace object removes the current route from the browser history. */}
            <button onClick={() => navigate("/contact", { replace: false })}>Go To Contact</button>
        </>
    )
}