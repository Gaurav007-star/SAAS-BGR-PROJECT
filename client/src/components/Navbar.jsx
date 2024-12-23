import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Navwarpper } from "../css_sheets/colorSheets.css";

export const Navbar = () => {
  return (
    <Navwarpper>
      <div className="nav-bar">
        <NavLink to="/" className="icon">
          <img src={assets.logo} alt="icon" />
        </NavLink>

        <button>
          Get Started
          <img src={assets.arrow_icon} alt="arrow" />
        </button>
      </div>
    </Navwarpper>
  );
};

export default Navbar;

