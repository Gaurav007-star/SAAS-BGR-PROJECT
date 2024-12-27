import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Navwarpper } from "../css_sheets/colorSheets.css";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <Navwarpper>
      <div className="nav-bar">
        <NavLink to="/" className="icon">
          <img src={assets.logo} alt="icon" />
        </NavLink>

        {isSignedIn ? (
          <div className="user-button">
            <UserButton />
          </div>
        ) : (
          <button onClick={() => openSignIn()}>
            Get Started
            <img src={assets.arrow_icon} alt="arrow" />
          </button>
        )}
      </div>
    </Navwarpper>
  );
};

export default Navbar;
