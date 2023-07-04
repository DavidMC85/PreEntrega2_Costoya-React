import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo"  src="../../img/logo_naranja.png" alt="Logo_Resto" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className={"menu"} to="/category/1"> Entradas </NavLink>
          </li>
          <li>
            <NavLink className={"menu"} to="/category/2"> Platos Principales </NavLink>
          </li>
          <li>
            <NavLink className={"menu"} to="/category/3"> Postres </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
