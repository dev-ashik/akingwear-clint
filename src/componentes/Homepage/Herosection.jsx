// import React from 'react'
import "./Herosection.css";
import { herosection_watch } from "../../assets/injex";

const Herosection = () => {
  return (
    <div className="herosection">
      <div className="herosection_image div_center">
        <img src={herosection_watch} alt="img" />
      </div>
      <div className="herosection_description">
        <h1 className="herosectionDescription_Title">
          A KING WEAR <br /> SMART WATCH
        </h1>
        <h3 className="herosectionDescription_subtitle">
          USE YOUR TIME SMARTLY
        </h3>
        <p className="herosectionDescription_paragraph">
          Welcome to our premium smartwatches! As a top manufacturer, we offer a
          variety of models with guaranteed quality, all in ready stock. We
          support OEM services and can customize your logo. Experience the
          perfect blend of style and functionality. Discover the future of
          timekeeping with our innovative and reliable smartwatches today!
        </p>
      </div>
    </div>
  );
};

export default Herosection;
