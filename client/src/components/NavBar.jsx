import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="nav">
            <Link to="/" className="Bronchure">
                Bronchure Site
            </Link>
            <ul>
                <CustomLink to='/pricing'>Pricing</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar