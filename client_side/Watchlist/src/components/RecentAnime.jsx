import "../styles/Watchlist.css"
import { useEffect, useState } from 'react';
import Card from "./Card"


export default function RecentAnime() {
    const [animeDetails, setAnimeDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3050/anime?page=1&limit=6")
            const json = await response.json();

            if (response.ok) {
                setAnimeDetails(json.data);
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <div className="watchlist">
                {animeDetails.map((anime)=>(
                    <Card key={anime._id} anime={anime} />
                ))}
            </div>
        </div>
    )
}
