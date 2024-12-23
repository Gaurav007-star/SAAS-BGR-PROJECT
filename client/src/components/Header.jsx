import { HeaderWrapepr } from "../css_sheets/colorSheets.css";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <HeaderWrapepr>
      <div className="header">
        {/* left part */}
        <div className="left-side">
          <h1>
            Remove the
            <br /> <span>background </span> from
            <br /> images for free.
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever.
          </p>
          <div className="upload-image">
            <input type="file" name="fileupload" id="fileupload" hidden />
            <label htmlFor="fileupload">
              <img src={assets.upload_btn_icon} alt="" />
              <p>Upload your image</p>
            </label>
          </div>
        </div>
        {/* right part */}
        <div className="right-side">
            <img src={assets.header_img} alt="" />
        </div>
      </div>
    </HeaderWrapepr>
  );
};

export default Header;
