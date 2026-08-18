import logo from '../assets/logo.png';
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate('/')
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" width="60px" height="60px" onClick={handleChange} />
            </div>
            <div className='links'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/MyWatchList' >My Watchlist</NavLink>
                <NavLink to='/AddAnime' >Add Anime</NavLink>
                <NavLink to='/About' >About</NavLink>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search Anime...' />
            </div>
        </div >
    )
}
