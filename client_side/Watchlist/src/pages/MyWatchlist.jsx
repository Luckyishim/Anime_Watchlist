import Watchlist from './../components/Watchlist';
import StatsInfo from './../components/StatsInfo';
export default function MyWatchlist() {
  return (
    <div>
      <div className="title">
        <h1>My Anime Watchlist</h1>
        <p>Manage and Filter every anime in your collection</p>
      </div>
      <div className="display">
        <StatsInfo />
      </div>
      <div>
        {<Watchlist />}
      </div>
    </div>
  )
}
