import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <button>
        <Link to="/materials">Materials</Link>
      </button>
      <button>
        <Link to="/shaders">Shaders</Link>
      </button>
    </nav>
  );
}
