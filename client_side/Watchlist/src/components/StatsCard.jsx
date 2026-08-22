import "../styles/StatsCard.css"

export default function StatsCard({ stats = [] }) {
  return (
    <div className="stats-wrapper">
      {stats.map(({ label, count }) => (
        <div className="stats" key={label}>
          <h1>{count}</h1>
          <p>{label}</p>
        </div>
      ))}
    </div>
  )
}
