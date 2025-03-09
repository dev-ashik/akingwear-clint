// import React from 'react'
import "./Herosection.css";

const Herosection = () => {
  return (
    <div className="herosection">
      <div className="herosection_image div_center">
        <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227160/herosection_watch_agch3u.webp'} alt="img" />
      </div>
      <div className="herosection_description">
        <h1 className="herosectionDescription_Title">
          A KING WEAR <small>(wokoxun)</small> <br /> SMART WATCH
        </h1>
        <h2 className="herosectionDescription_subtitle">
          A Smartwatch Manufacturer
        </h2>
        <p className="herosectionDescription_paragraph">
          Welcome to our premium smartwatches! As a top manufacturer, we offer a
          variety of models with guaranteed quality.
        </p>
      </div>
    </div>
  );
};

export default Herosection;
