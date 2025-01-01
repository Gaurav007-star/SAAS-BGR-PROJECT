/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Navwarpper } from "../css_sheets/colorSheets.css";
import { useDispatch } from "react-redux";
import { UserThunk, UserUpdateThunk } from "../store/slices/User.slices";


export const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <Navwarpper>
      <div className="nav-bar">
        <NavLink to="/" className="icon">
          <img src={assets.logo} alt="icon" />
        </NavLink>

        <>
          <button>
            Get Started
            <img src={assets.arrow_icon} alt="arrow" />
          </button>
        </>
      </div>
    </Navwarpper>
  );
};

export default Navbar;
