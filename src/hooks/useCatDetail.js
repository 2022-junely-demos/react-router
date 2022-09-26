import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCatDetail, fetchCats } from '../services/cats';

export function useCatDetail(id) {
  const [cat, setCat] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCatDetail(id);
        setCat(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id]);

  return { cat, loading, error };
}
