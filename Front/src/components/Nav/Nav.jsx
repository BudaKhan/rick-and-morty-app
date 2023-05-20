import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'

const Nav = ({onSearch}) => {
    return(
    <nav> 
        <div>
        <Link to='/'>LOGOUT</Link>
        <Link to='about' >About</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to= '/portfolio'>Portfolio</Link>
        <Link to='home' >Home</Link>
        </div>
        <SearchBar onSearch={onSearch} />
    </nav>  
    )
}
export default Nav;

//onSearch={(characterID) => window.alert(characterID)}