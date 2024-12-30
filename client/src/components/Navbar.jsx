/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Navwarpper } from "../css_sheets/colorSheets.css";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { UserThunk } from "../store/slices/User.slices";
import { useEffect } from "react";

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const saveUser = async () => {
        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName
        };

        dispatch(UserThunk(userData));
      };

      saveUser();
    }
  }, [user]);

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
          <button
            onClick={() =>
              openSignIn({
                afterSignInUrl: "/",
                afterSignUpUrl: "/"
              })
            }
          >
            Get Started
            <img src={assets.arrow_icon} alt="arrow" />
          </button>
        )}
      </div>
    </Navwarpper>
  );
};

export default Navbar;
