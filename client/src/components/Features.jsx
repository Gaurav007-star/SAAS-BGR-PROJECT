import { FeatureWrapper } from "../css_sheets/colorSheets.css";
import { features } from "../assets/assets";
import Title from "./Title";

const Features = () => {
  return (
    <FeatureWrapper>
      <div className="feature">
        <Title
          text={
            <p>
              Steps to remove background
              <br /> image in seconds
            </p>
          }
        />
        <div className="bottom">
          {features.map((item, index) => {
            return (
              <div className="box" key={index}>
                <h1 className="heading">
                  <img src={item.image.img} alt="" />
                  <span>{item.id}</span>
                </h1>
                <p className="desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </FeatureWrapper>
  );
};

export default Features;
