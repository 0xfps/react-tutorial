// Helps us navigate through routes.
import { Link } from "react-router-dom"

// Adds class="active" to the current route which allows styling the active link.
import { NavLink } from "react-router-dom"

const Navbar = () => {

    // If the current Navlink, it adds an {isActive: true}.
    const navLinkStyles = ({ isActive }: any) => {
        return { marginLeft: "20px" }
    }

    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/about" style={{ marginLeft: "20px" }}>
                About
            </NavLink>
            <NavLink to="/contact" style={navLinkStyles}>
                Contact
            </NavLink>
            <NavLink to="/products" style={navLinkStyles}>
                Product
            </NavLink>
            {/* 
                To navigate to external links, use <a></a>.
            */}
        </nav>
    )
}

export default Navbar