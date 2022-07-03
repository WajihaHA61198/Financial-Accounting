import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar">
          <ul className="nav-items">
            <li><NavLink className="nav" to="/">Journal Entry</NavLink></li>
            <li><NavLink className="nav" to="/financial-statement">Financial Statement</NavLink> </li>
            {/* <li><NavLink className="nav" to="/ledger">Ledger</NavLink></li> */}
          </ul>
    </nav>
  );
};

export default Header;
