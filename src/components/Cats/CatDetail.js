import { useParams } from 'react-router-dom';
import { useCatDetail } from '../../hooks/useCatDetail';

export default function CatDetail() {
  const { id } = useParams();
  console.log(id);
  const { cat, loading, error } = useCatDetail(id);
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{cat.name}</h1>
      <img src={cat.url} />
    </>
  );
}
