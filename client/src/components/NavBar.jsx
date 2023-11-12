
function NavBar(){
    return(
        <nav className="nav">
            <a href="/" className="Bronchure">Home</a>
            <ul>
                <li className="active">
                    <a href="/About">About</a>    
                </li>
                <li>
                    <a href="/Contact">Contact</a>    
                </li>
            </ul>
        </nav>
    )
}

export default NavBar