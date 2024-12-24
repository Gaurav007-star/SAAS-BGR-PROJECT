import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { assets } from "../assets/assets";
import { FooterContainer } from "../css_sheets/colorSheets.css";


const Footer = () => {
  return (
    <FooterContainer>
      <div className="logo-section">
        <div className="logo">
          <img src={assets.logo_icon} alt="" />
          <span className="logo-text">bg.removal</span>
        </div>
        <div className="line"></div>
        <p className="copyright">All rights reserved. Copyright © bg.removal</p>
      </div>
      <div className="social-media">
        <div className="social-icon">
          <FaFacebookF />
        </div>
        <div className="social-icon">
          <FaTwitter />
        </div>
        <div className="social-icon">
          <FaGoogle />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

