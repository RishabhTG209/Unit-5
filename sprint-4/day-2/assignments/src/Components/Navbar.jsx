import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      {/* <button>
        <Link to="/login">Login</Link>
      </button> */}
    </div>
  );
};
