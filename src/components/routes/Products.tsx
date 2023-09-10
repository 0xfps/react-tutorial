import { Link, Outlet } from "react-router-dom"

const Products = () => {
    return (
        <>
            <input type="search" name="" id="" placeholder="Search product" />
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new" style={{ marginLeft: "10px" }}>New</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products