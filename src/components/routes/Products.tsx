import { Link, Outlet, useNavigate } from "react-router-dom"

const Products = () => {
    const navigate = useNavigate()
    return (
        <>
            <input type="search" name="" id="" placeholder="Search product" />
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new" style={{ marginLeft: "10px" }}>New</Link>
            </nav>
            <button onClick={() => navigate("new")}>To New</button>
            <Outlet />
        </>
    )
}

export default Products