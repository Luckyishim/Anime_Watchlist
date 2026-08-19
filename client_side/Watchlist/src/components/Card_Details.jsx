import { useEffect, useState } from 'react'

export default function Card_Details() {

  const [anime, setAnime] = useState(null)
  useEffect(() => {
    const anime_data = async () => {
      const response = await fetch('http://localhost:3050/anime')
      const json = await response.json()

      if (response.ok) {
        setAnime(json)
      }
    }
    anime_data()
  }, [])
  return (
    <div>
      <div className="anime_details">
        Anime-Info
        {anime && anime.map((anime_info) => (
          <p key={anime_info._id}>{anime_info.title}</p>
        ))}
      </div>
    </div>
  )
}
