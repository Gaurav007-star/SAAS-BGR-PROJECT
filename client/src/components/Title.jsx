/* eslint-disable react/prop-types */
import { TitleWrapper } from "../css_sheets/colorSheets.css";

const Title = ({ text }) => {
  return (
    <TitleWrapper>
      <div className="title">
        <div className="top">{text}</div>
      </div>
    </TitleWrapper>
  );
};

export default Title;
