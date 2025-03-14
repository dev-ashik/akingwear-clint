import { useParams } from "react-router-dom";
import { all_watches_data } from "../../data";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import BuyNowModal from "./BuyNowModal";

const ProductDetails = () => {
  const [watch, setWatch] = useState({});
  const [largeImg, setLargeImg] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let { watchUrl } = useParams();

  const handleLargephoto = (index) => {
    setLargeImg(watch.img[index]);
  };

  useEffect(() => {
    const currentWatch = all_watches_data.filter(
      (watch) => watch.url == watchUrl
    );
    setWatch(currentWatch[0]);

    const watchPhotos = currentWatch[0].img;
    setLargeImg(watchPhotos[0]);
    return () => {};
  }, [watchUrl]);

  return (
    <div className="productDetails pagewidth">
      <div className="productDetails_top">
        <div className="productDetialsTop_left">
          <div className="productDetials_largeimgContainer">
            <img className="largeImg" src={largeImg} alt="img" />
          </div>
          <div className="restImages">
            {watch.img &&
              watch.img.map((image, index) => (
                <img
                  className="restImage"
                  onClick={() => handleLargephoto(index)}
                  src={image}
                  alt="img"
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className="productDetialsTop_right">
          <h2 className="product_title">{watch.title}</h2>
          <p className="productDetialsTop_desc">{watch.desc}</p>
          <div className="priceRange_div">
            <p>Price range:</p>
            <div>
              <small>5000-10000 pcs</small>
              <p>{watch.priceRange}/ pieces</p>
            </div>
          </div>
          <div>
            <ul>
              <li>Model: {watch.model}</li>
              <li>bettery: {watch.bettery}</li>
              <li>CPU: {watch.cpu}</li>
              <li>
                Display: {watch.displaySize}, {watch.Resolution}
              </li>
              <li>waterproof: {watch.waterproof}</li>
              <li>Language: {watch.language && watch.language}</li>
              <li>Strap: {watch.strap}</li>
              <li>Colors: {watch.colors}</li>
              <li>warrantee: 1 Year</li>
            </ul>
          </div>

          <button
            className="button_primary"
            onClick={() => setModalIsOpen(true)}
          >
            inquiry / quotation <FaCartPlus />
          </button>

          <BuyNowModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        </div>
      </div>
      <div className="productDetails_des">
        <h3 className="secification_title">Product secification</h3>
        <div className="productDetailsDes_tableContainer">
          <h4>Other attributes</h4>
          <table>
            <tbody>
              <tr>
                <td>Place of Origin:</td>
                <td>shenzhen guangdong</td>
              </tr>
              <tr>
                <td>Brand Name</td>
                <td>akingwear</td>
              </tr>
              <tr>
                <td>Model Number</td>
                <td>{watch.model}</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>ODM & OEM</td>
              </tr>
              <tr>
                <td>MOQ</td>
                <td>1000 Pieces</td>
              </tr>
            </tbody>
          </table>

          {/* product details */}
          <h4>Product details</h4>
          <table>
            <tbody>
              <tr>
                <td>displaySize</td>
                <td>{watch.displaySize}</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>{watch.Resolution}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{watch.gender}</td>
              </tr>
              <tr>
                <td>cpu</td>
                <td>{watch.cpu}</td>
              </tr>
              <tr>
                <td>memory</td>
                <td>{watch.memory}</td>
              </tr>
              <tr>
                <td>bettery</td>
                <td>{watch.bettery}</td>
              </tr>
              <tr>
                <td>betteryLife</td>
                <td>{watch.betteryLife}</td>
              </tr>
              <tr>
                <td>AI</td>
                <td>{watch.ai}</td>
              </tr>
              <tr>
                <td>gSensor</td>
                <td>{watch.gSensor}</td>
              </tr>
              <tr>
                <td>waterproof</td>
                <td>{watch.waterproof}</td>
              </tr>
              <tr>
                <td>bluetooth</td>
                <td>{watch.bluetooth}</td>
              </tr>
              <tr>
                <td>blutooth Range</td>
                <td>{watch.blutoothRange}</td>
              </tr>
              <tr>
                <td>App</td>
                <td>{watch.app}</td>
              </tr>
              {/* <tr>
                <td>appDownlodLink</td>
                <td>{watch.appDownlodLink}</td>
              </tr> */}
              <tr>
                <td>feature</td>
                <td>{watch.feature}</td>
              </tr>
              <tr>
                <td>strap</td>
                <td>{watch.strap}</td>
              </tr>
              <tr>
                <td>colors</td>
                <td>{watch.colors}</td>
              </tr>
              <tr>
                <td>language</td>
                <td>{watch.language}</td>
              </tr>
            </tbody>
          </table>

          {/* packing */}
          <h4>packing</h4>
          <table>
            <tbody>
              <tr>
                <td>box</td>
                <td>{watch.box}</td>
              </tr>
              <tr>
                <td>carton</td>
                <td>{watch.carton}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
