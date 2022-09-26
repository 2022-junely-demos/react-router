import { Link } from 'react-router-dom';
import { useCats } from '../../hooks/useCats';
import './Cats.css';
export default function CatList() {
  const { error, loading, cats } = useCats();
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Cat List</h1>
      {cats.map((cat) => (
        <Link className="cat-link" key={cat.id} to={`/cats/${cat.id}`}>
          {cat.name}
        </Link>
      ))}
    </>
  );
}
