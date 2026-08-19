// Card.jsx
import "../styles/Card.css"

export default function Card({ anime }) {
  const statusClass = anime.status.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="card">
      <div className="status">
        <h2>{anime.title}</h2>
        <p className={`badge ${statusClass}`} >{anime.status}</p>
      </div>
      <div className="genre">
        {anime.genre.map((g, index) => (
          <p key={index}>{g}</p>
        ))}
      </div>
      <div className="details">
        <div className="episodes">
          <p>Episodes</p>
          <p>{anime.episodes}</p>
          <p>Season 3</p>
        </div>
        <span className="line"></span>
        <div className="rating">
          <p>Rating</p>
          <p>{anime.rating} / 10</p>
          <p>Avg. User</p>
        </div>
      </div>
      <div className="ctrl">
        <button className="btn-edit">Edit</button>
        <button className="btn-detail">View Details</button>
      </div>
    </div>
  )
}