import { useParams } from "react-router-dom";
import { all_watches_data } from "../../data";
import "./ProductDetails.css";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [watch, setWatch] = useState({});
  const [largeImg, setLargeImg] = useState("");

  let { watchId } = useParams();

  useEffect(() => {
    const currentWatch = all_watches_data.filter(
      (watch) => watch.id == watchId
    );
    setWatch(currentWatch[0]);

    const watchPhotos = currentWatch[0].img;
    setLargeImg(watchPhotos[0]);
    return () => {};
  }, [watchId]);

  console.log(watch);
  console.log(watch.img);

  return (
    <div className="productDetails pagewidth">
      <div className="productDetails_top">
        <div className="productDetialsTop_left">
          <div className="productDetials_largeimgContainer">
            <img className="largeImg" src={largeImg} alt="img" />
          </div>
          <div className="restImages">
            {
              watch.img && watch.img.map((image, index) => (
                  <img className="restImage" src={image} alt="img" key={index} />
              ))
            }
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
        </div>
      </div>
      <div className="productDetails_des">des</div>
    </div>
  );
};

export default ProductDetails;
