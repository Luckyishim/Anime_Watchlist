import Watchlist from './../components/Watchlist';
export default function MyWatchlist() {
  return (
    <div>
      <div className="title">
        <h1>My Anime Watchlist</h1>
        <p>Manage and Filter every anime in your collection</p>
      </div>
      <div className="stats">
        <h3>
          24
        </h3>
        <p>Total Anime</p>

      </div>
      <div>
        {<Watchlist />}
      </div>
    </div>
  )
}
