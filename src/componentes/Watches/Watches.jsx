import { useEffect, useState } from "react";
import "./Watches.css";
import { all_watches_data } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
// import { all_watches_data } from "../../data/watches";
// import { all_watches_data } from "../../data/watches/all_watches_data";

const Watches = () => {
  const [active, setActive] = useState("all");
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    // first
    setWatches(all_watches_data);
    return () => {}
  }, [])
  
 console.log(watches)
  return (
    <div className="watches largewidth">
      <div className="watches_filterbtn_div">
        <button
          onClick={() => setActive("all")}
          className={`watches_filterbtn ${
            active == "all" ? "watches_filterbtn-active" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActive("male")}
          className={`watches_filterbtn ${
            active == "male" ? "watches_filterbtn-active" : ""
          }`}
        >
          Male
        </button>
        <button
          onClick={() => setActive("female")}
          className={`watches_filterbtn ${
            active == "female" ? "watches_filterbtn-active" : ""
          }`}
        >
          Female
        </button>
      </div>

      <div className="product_section">
          {
            watches.map((watch)=> (
              <div className="product_cart" key={watch.id}>
                  <img className="product_img" src={watch.img[0]} alt="img" />
                  <div className="product_desc">
                  <h3 className="productCart_model">{watch.model} Smart Watch</h3>
                  <p>{watch.desc}</p>
                  </div>
                  <div className="productCart_footer">
                    <button className="seeMore_btn">See More <FaArrowRight /></button>
                  </div>
              </div>
            ))
          }
      </div>
      <div>
        pegination
      </div>
      <div className="downloadCatalogue_section">
        <button>Download catalogue <IoMdDownload /></button>
      </div>
    </div>
  );
};

export default Watches;
