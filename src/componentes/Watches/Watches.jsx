import { useEffect, useState } from "react";
import "./Watches.css";
import { all_watches_data } from "../../data";
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
    <div className="watches">
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
              <div key={watch.id}>
                  <img src={watch.img[0]} alt="img" height="100px" />
                  <h4>{watch.model} Smart Watch</h4>
                  <p>{watch.desc}</p>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Watches;
