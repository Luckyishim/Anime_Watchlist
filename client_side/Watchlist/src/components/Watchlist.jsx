import { useEffect, useState } from 'react';
import Card from './Card';
import "../styles/Watchlist.css"
import Pagination from './Pagination';

export default function Watchlist() {
  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3050/anime?page=${currentPage}&limit=9`);
      const json = await response.json();



      if (response.ok) {
        setAnimeList(json.data);
        setTotalPages(json.totalPages);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="watchlist">
        {animeList.map((anime) => (
          <Card key={anime._id} anime={anime} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}