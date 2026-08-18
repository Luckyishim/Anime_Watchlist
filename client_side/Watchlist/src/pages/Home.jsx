import "../styles/Home.css"
export default function Home() {
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

            <button type="button" className="btn-main">
                View Watchlist
            </button>

            <div className="recents">
                <h3>Recently Added</h3>
            </div>
        </div>
    )
}
