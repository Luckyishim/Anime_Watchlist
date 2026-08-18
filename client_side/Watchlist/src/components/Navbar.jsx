import logo from '../assets/image.png';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate('/anime')
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" width="60px" height="60px" onClick={handleChange} />
            </div>
            <div className='links'>
                <Link style={{ textDecoration: 'none' }} >Home</Link>
                <Link>My Watchlist</Link>
                <Link>Add Anime</Link>
                <Link>About</Link>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search Anime...' />
            </div>
        </div >
    )
}
