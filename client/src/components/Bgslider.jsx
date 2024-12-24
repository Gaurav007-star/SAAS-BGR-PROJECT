/* eslint-disable no-unused-vars */
import { useState } from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Bgslider = () => {
  const [length, setLength] = useState(50);

  const lenghtHandler = (e) => {
    setLength(e.target.value);
  };

  return (
    <div className="bgslider">
      <Title
        text={
          <p>
            Remove Background With High
            <br /> Quality and Accuracy
          </p>
        }
      />

      <div className="background-image relative w-full max-w-3xl overflow-hidden m-auto rounded-xl mb-[15vh]">
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - length}% 0 0)` }}
        />
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${length}%)` }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <input
          id="slider-length"
          type="range"
          min={0}
          max={100}
          value={length}
          onChange={lenghtHandler}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
        />
      </div>
    </div>
  );
};

export default Bgslider;
