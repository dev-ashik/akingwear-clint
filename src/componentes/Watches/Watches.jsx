import { useEffect, useState } from "react";
import "./Watches.css";
import LazyLoad from "react-lazyload";
import { all_watches_data } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
// import { all_watches_data } from "../../data/watches";
// import { all_watches_data } from "../../data/watches/all_watches_data";

import Axios from "axios";
import fileDownload from "js-file-download";
import { Link } from "react-router-dom";

const Watches = () => {
  // const itemsPerPage = 9;
  const [active, setActive] = useState("all");
  const [filteredWatches, setFilteredWatches] = useState([]);
  // const [watchesToShow, setWatchesToShow] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [startIndex, setStartIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);

  const handleDownloadCv = (url, filename) => {
    Axios.get(url, {
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, filename);
    });
  };

  const handleFilterProduct = (filter) => {
    setActive(filter);

    if (filter == "male") {
      const maleWatches = all_watches_data.filter(
        (watch) => watch.gender == "male"
      );
      setFilteredWatches(maleWatches);
      // setWatchesToWhow(maleWatches.slice(0, 9));
    } else if (filter == "female") {
      const femaleWatches = all_watches_data.filter(
        (watch) => watch.gender == "female"
      );
      setFilteredWatches(femaleWatches);
      // setWatchesToWhow(femaleWatches.slice(0, 9));
    } else {
      setFilteredWatches(all_watches_data);
      // setWatchesToWhow(all_watches_data.slice(0, 9));
    }
  };

  // const handlePegination = () => {
  //   // const startIndex = currentPage * itemsPerPage;
  //   setStartIndex(currentPage * itemsPerPage)
  //   // const endIndex = startIndex + itemsPerPage;
  //   setEndIndex(startIndex + itemsPerPage)
  //   const currentWatches = filteredWatches.slice(startIndex, endIndex);

  //   setWatchesToWhow(currentWatches)
  // }

  const handleBack = () => {
    console.log("back");
  };

  const handleNext = () => {
    console.log("next");
  };

  useEffect(() => {
    setFilteredWatches(all_watches_data);
    // setWatchesToWhow(all_watches_data.slice(0, 9));
    return () => {};
  }, []);

  return (
    <div className="watches pagewidth">
      <div className="watches_filterbtn_div">
        <button
          onClick={() => handleFilterProduct("all")}
          className={`watches_filterbtn ${
            active == "all" ? "watches_filterbtn-active" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterProduct("male")}
          className={`watches_filterbtn ${
            active == "male" ? "watches_filterbtn-active" : ""
          }`}
        >
          Male
        </button>
        <button
          onClick={() => handleFilterProduct("female")}
          className={`watches_filterbtn ${
            active == "female" ? "watches_filterbtn-active" : ""
          }`}
        >
          Female
        </button>
      </div>

      <div className="product_section">
        {filteredWatches.map((watch) => (
          <div className="product_cart" key={watch.id}>
            <LazyLoad
              height={200}
              offset={100}
              placeholder={
                <div style={{ backgroundColor: "#f0f0f0", height: "100%" }}>
                  Loading...
                </div>
              }
              once
            >
              <img className="product_img" src={watch.img[0]} alt="img" />
            </LazyLoad>

            <div className="product_desc">
              <h3 className="productCart_model">{watch.title} Smart Watch</h3>
              <p>
                {watch.desc.length > 150
                  ? `${watch.desc.substring(0, 150)}...`
                  : watch.desc}
              </p>
            </div>
            <div className="productCart_footer">
              <Link to={`${watch.url}`} className="seeMore_btn">
                See More <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="Watches_pegination">
        <button onClick={handleBack()} className="button_primary">
          back <FaArrowLeft />
        </button>

        <button onClick={() => handleNext()} className="button_primary">
          next <FaArrowRight />
        </button>
      </div> */}
      {/* <div className="downloadCatalogue_section">
        <button
          onClick={() =>
            handleDownloadCv(
              "https://t7fqhg.bl.files.1drv.com/y4mHBplT1Jdj8hPMBdzcueMJCTcX2gn-akWKtFfJ76LnF1KzfioYU64CJkNcbgt7zVuFC6rtyxYN0MHfVtAC3l1Z2YpmwHwK-HPuISvWGWIC6zfo8MNT30lcOZeq4xpY9STKJbfjsof-dXSvHYenAPQEEWZt1OUyvS8DVw2pk8Cwiz-1bHSAbyoe_nxJJZVuac60sNA2PRZWRc17VV-CydHzA",
              "Md_Ashik_Mahumd_CV.pdf"
            )
          }
        >
          Download catalogue <IoMdDownload />
        </button>
      </div> */}
    </div>
  );
};

export default Watches;
