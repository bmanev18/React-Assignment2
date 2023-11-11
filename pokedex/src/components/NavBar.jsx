import { Link } from "react-router-dom";
import pokeball1 from "../utils/img/pokeball1.jpg"
import "../components-style/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar-component">
      <div className="image-container">
        <img src={pokeball1} alt="" />
      </div>
      <div className="navbar">
        <ul className="link-list">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
