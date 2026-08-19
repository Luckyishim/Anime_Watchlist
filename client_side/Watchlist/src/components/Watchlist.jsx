import { useEffect, useState } from 'react';
import Card from './Card';
import "../styles/Watchlist.css"

export default function Watchlist() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3050/anime');
      const json = await response.json();

      if (response.ok) {
        setAnimeList(json);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="watchlist">
      {animeList.map((anime) => (
        <Card key={anime._id} anime={anime} />
      ))}
    </div>
  );
}