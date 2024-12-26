import { ResultWrapper } from "../css_sheets/colorSheets.css";
import { assets } from "../assets/assets";
const Result = () => {
  return (
    <ResultWrapper>
      <div className="result-wrapper">
        <div className="top">
          <div className="tleft">
            <p>Original</p>
            <img src={assets.image_w_bg} alt="" />
          </div>
          <div className="tright">
            <p>Background Removed</p>
            <img src={assets.image_wo_bg} alt="" />
          </div>
        </div>
        <div className="bottom">
          <button className="try-button">Try another image</button>
          <button className="download-button">Download image</button>
        </div>
      </div>
    </ResultWrapper>
  );
};

export default Result;
