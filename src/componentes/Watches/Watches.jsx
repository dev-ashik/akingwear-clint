import { useEffect, useState } from "react";
import "./Watches.css";
import { all_watches_data } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
// import { all_watches_data } from "../../data/watches";
// import { all_watches_data } from "../../data/watches/all_watches_data";

const Watches = () => {
  const itemsPerPage = 9;
  const [active, setActive] = useState("all");
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [watchesToWhow, setWatchesToWhow] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);
  

  const handleFilterProduct = (filter) => {
    setActive(filter);

    if (filter == "male") {
      const maleWatches = all_watches_data.filter(
        (watch) => watch.gender == "male"
      );
      setFilteredWatches(maleWatches);
      setWatchesToWhow(maleWatches.slice(0, 9));
    } else if (filter == "female") {
      const femaleWatches = all_watches_data.filter(
        (watch) => watch.gender == "female"
      );
      setFilteredWatches(femaleWatches);
      setWatchesToWhow(femaleWatches.slice(0, 9));
    } else {
      setFilteredWatches(all_watches_data);
      setWatchesToWhow(all_watches_data.slice(0, 9));
    }
  };

  const handlePegination = () => {
    // const startIndex = currentPage * itemsPerPage;
    setStartIndex(currentPage * itemsPerPage)
    // const endIndex = startIndex + itemsPerPage;
    setEndIndex(startIndex + itemsPerPage)
    const currentWatches = filteredWatches.slice(startIndex, endIndex);

    setWatchesToWhow(currentWatches)
  } 

  const handleBack = () => {
    // setCurrentPage((prevPage) => prevPage - 1);
    // handlePegination();
  };

  const handleNext = () => {
    // setCurrentPage((prevPage) => prevPage + 1);
    // handlePegination();
    if (filteredWatches.length > startIndex) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      handlePegination()
    }
    
    // const currentWatches = filteredWatches.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setFilteredWatches(all_watches_data);
    setWatchesToWhow(all_watches_data.slice(0, 9));
    return () => {};
  }, []);

  console.log(filteredWatches);
  console.log(watchesToWhow);
  console.log(currentPage);
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
        {watchesToWhow.map((watch) => (
          <div className="product_cart" key={watch.id}>
            <img className="product_img" src={watch.img[0]} alt="img" />
            <div className="product_desc">
              <h3 className="productCart_model">{watch.model} Smart Watch</h3>
              <p>{watch.desc}</p>
            </div>
            <div className="productCart_footer">
              <button className="seeMore_btn">
                See More <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="Watches_pegination">
        {currentPage > 0 && (
          <button onClick={handleBack()} className="button_primary">
            back <FaArrowLeft />
          </button>
        )}
        <button onClick={() => handleNext()} className="button_primary">
          next <FaArrowRight />
        </button>
      </div>
      <div className="downloadCatalogue_section">
        <button>
          Download catalogue <IoMdDownload />
        </button>
      </div>
    </div>
  );
};

export default Watches;
