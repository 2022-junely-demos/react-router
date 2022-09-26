import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCats } from '../services/cats';

export function useCats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCats();
        setCats(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return { cats, loading, error };
}
