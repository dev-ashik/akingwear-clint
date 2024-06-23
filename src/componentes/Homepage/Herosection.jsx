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
          Lorem ipsum dolor sit amet consectetur. Scelerisque nisl mi proin
          dictumst amet. Purus sed enim elit pulvinar et id. Volutpat sit
          natoque faucibus id vel arcu scelerisque vel. Aliquam feugiat
          hendrerit amet sed consectetur lectus cras eu fusce. Eget ipsum purus
          vel enim nam orci consectetur. Neque hendrerit lacus dui nulla nibh
          fermentum. Amet aliquam nam suscipit commodo nulla. Ac maecenas
          interdum tristique euismod d{" "}
        </p>
      </div>
    </div>
  );
};

export default Herosection;
