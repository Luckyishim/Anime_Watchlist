import "../styles/Home.css"
import RecentAnime from './../components/RecentAnime';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();

  const  handlerButton = ()=>{
        navigate('/MyWatchList')
    }
    return (
        <div>
            <div className="title">
                <h1>Your anime, organized.</h1>
                <p>Track what you are watching, what you finished, and what comes next.</p>
            </div>
            <div className="bar">
                <h2>Keep your watchlist simple.</h2>
                <p>Titles, Genres, Episodes, Status, and Ratings in one place.</p>
            </div>

            <button type="button" className="btn-main" onClick={handlerButton}>
                View Watchlist
            </button>

            <div className="recents">
                <h3>Recently Added</h3>
            </div>
            <div>
                {<RecentAnime/>}
            </div>
        </div>
    )
}
