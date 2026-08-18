import "../styles/Card.css"
export default function Card() {
  return (
    <div className="card">
      <div className="status">
        <h2>One Piece</h2>
        <p>Completed</p>
      </div>
      <div className="genre">
        <p>Action</p>
        <p>Adventure</p>
        <p>Fantasy</p>
      </div>
      <div className="details">
        <div className="episodes">
          <p>Episodes</p>
          <p>44 / 44</p>
          <p>Season 3</p>
        </div>
        <span className="line">

        </span>
        <div className="rating">
          <p>Rating</p>
          <p>⭐8.7 / 10</p>
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
