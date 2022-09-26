import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Welcome to Cats!</h1>
      <Link to="/cats">Cat List </Link>
    </>
  );
}
