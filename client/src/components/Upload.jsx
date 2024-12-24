import Title from "./Title";
import { assets } from "../assets/assets";
import { UploadWrapper } from "../css_sheets/colorSheets.css";

const Upload = () => {
  return (
    <UploadWrapper>
      <Title text={<p>See the magic. Try now</p>} />
      <div className="upload-wrapper">
        <div className="upload-image">
          <input type="file" name="fileupload" id="fileupload" hidden />
          <label htmlFor="fileupload">
            <img src={assets.upload_btn_icon} alt="" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>
    </UploadWrapper>
  );
};

export default Upload;
