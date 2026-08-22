import { useEffect, useState } from 'react';
import StatsCard from './StatsCard';

export default function StatsInfo() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const [totalResponse, statusResponse] = await Promise.all([
          fetch('http://localhost:3050/anime/total', { signal: controller.signal }),
          fetch('http://localhost:3050/anime/statCount', { signal: controller.signal }),
        ]);

        if (!totalResponse.ok || !statusResponse.ok) {
          throw new Error('Unable to load watchlist statistics.');
        }

        const [{ totalAnime }, statusCounts] = await Promise.all([
          totalResponse.json(),
          statusResponse.json(),
        ]);

        const countsByStatus = Object.fromEntries(
          statusCounts.map(({ _id, count }) => [_id, count])
        );

        setStats([
          { label: 'Total Anime', count: totalAnime },
          { label: 'Watching', count: countsByStatus.Watching ?? 0 },
          { label: 'Completed', count: countsByStatus.Completed ?? 0 },
          { label: 'Planned', count: countsByStatus['Plan to Watch'] ?? 0 },
          { label: 'Dropped', count: countsByStatus.Dropped ?? 0 },
        ]);
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Failed to load counts:', error);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return (
    <StatsCard stats={stats} />
  );
}
