import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <p>Toks puslapis neegzistuoja.</p>

      <Link to="/">
        Grįžti į Home
      </Link>
    </>
  );
}

export default NotFound;