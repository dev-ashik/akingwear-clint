import "./NewArraivals.css";
import { FaArrowRight } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { IoLogoWechat } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const newarraival = [
  {
    id: "gdf",
    productId: "ak77_25",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741315508/ak77_1_pgfp3c.jpg',
    modelnumber: "AK-77",
    url: "woKosun-aK77-bluetooth-calling-smartwatch-stainless-steel-body-touchscreen-display-imported-from-china",
    description:
      "Discover our new sport smartwatch! Sleek design, durable, AI voice support, advanced fitness tracking—perfect for an active lifestyle.",
  },
  {
    id: "ggf",
    productId: "ak80_24",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741315811/ak80_2_erf6ox.jpg',
    modelnumber: "AK-80",
    url: "woKosun-aK80-bluetooth-calling-smartwatch-stainless-steel-body-touchscreen-display-imported-from-china",
    description:
      "Discover our new sport smartwatch! Sleek design, durable, AI voice support, advanced fitness tracking—perfect for an active lifestyle.",
  },
  {
    id: "ggdf",
    productId: "ak82_22",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741316328/ak82_1_vepvg7.jpg',
    modelnumber: "AK-82",
    url: "woKosun-aK82-bluetooth-calling-smartwatch-stainless-steel-body-touchscreen-display-imported-from-china",
    description:
      "Discover our new sport smartwatch! Sleek design, durable, AI voice support, advanced fitness tracking—perfect for an active lifestyle.",
  },
  {
    id: "gsgf",
    productId: "ak58_14",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227241/newArrival_1_sbzgqk.webp',
    modelnumber: "AK-58",
    url: "woKosun-aK58-bluetooth-calling-smartwatch-stainless-steel-body-touchscreen-display-imported-from-china",
    description:
      "Discover our new sport smartwatch! Sleek design, durable, AI voice support, advanced fitness tracking—perfect for an active lifestyle.",
  },
  // {
  //   id: 1,
  //   productId: "ak58_14",
  //   img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227241/newArrival_1_sbzgqk.webp',
  //   modelnumber: "AK-58",
  //   description:
  //     "Discover our new sport smartwatch! Sleek design, durable, AI voice support, advanced fitness tracking—perfect for an active lifestyle.",
  // },
  // {
  //   id: 2,
  //   productId: "ak60_12",
  //   img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227236/newArrival_2_wukwhi.webp',
  //   modelnumber: "AK-60",
  //   description:
  //     "Introducing our new smartwatch: stylish, durable, with AI voice support and advanced fitness tracking. Perfect for active lifestyles!",
  // },
  // {
  //   id: 3,
  //   productId: "ak72_2",
  //   img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227292/newArrival_3_zd7iin.webp',
  //   modelnumber: "AK-72",
  //   description:
  //     "Check out our new smartwatch! Sleek, long-lasting, with AI voice support and top-tier fitness tracking for active users.",
  // },
  // {
  //   id: 4,
  //   productId: "ak50_18",
  //   img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227243/newArrival_4_naurw6.webp',
  //   modelnumber: "AK-50",
  //   description:
  //     "Explore our latest smartwatch: elegant design, robust build, AI voice support, and advanced fitness tracking for your active life.",
  // },
];

const tradeTeam = [
  // {
  //   id: 1,
  //   img: kelvin_profile,
  //   name: "Mr. Kelvin",
  //   position: "CEO",
  //   Phone: "",
  //   whatsapp: "",
  //   Wechat: "",
  //   email: "",
  // },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227327/ashik_yrrkvn.webp',
    name: "MD ASHIK MAHMUD",
    position: "Foreign Trade consultent",
    // Phone: "+86 1555 963 2606",
    // whatsapp: "+86 1555 963 2606",
    Wechat: "ashik448",
    email: "ashikmahmud@wokoxun.net",
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227325/mehedi_lbbmdi.webp',
    name: "MD MEHEDI HASAN",
    position: "Foreign Trade consultent",
    // Phone: "+86 1990 964 4914",
    // whatsapp: "+86 1990 964 4914",
    // Wechat: "mishu5772",
    // email: "mehedihasan604184@gmail.com",
  },
];

const NewArraivals = () => {
  return (
    <>
      <div className="newArraivals">
        <h2 className="section_heading">New arrivals</h2>
        <div className="newArraivals_items">
          {newarraival.map((watch) => (
            <div key={watch.id} className="newArraivals_item">
              <img
                className="newArraivals_item_img"
                src={watch.img}
                alt="watch"
              />
              <div className="newArraivals_item_content">
                <h3 className="newArraivals_item_content-title">
                  Model: {watch.modelnumber}
                </h3>
                <p className="newArraivals_item_content-des">
                  {watch.description}
                </p>
                <div>
                  <Link
                    to={`watches/${watch.url}`}
                    className="button_primary"
                    style={{ boxShadow: "lightgray 1px 1px 10px" }}
                  >
                    See more <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About company */}
      <div className="aboutcompany">
        <div className="aboutcompany_left">
          <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227158/office_fmw4tw.webp'} alt="office" />
        </div>
        <div className="aboutcompany_right">
          <h2 className="aboutcompany_right-title">About Company</h2>
          <h4 className="aboutcompany_right-subtitle">
            Shenzhen Wokoxun Electronic Technology Co., Ltd.
          </h4>
          <p className="aboutcompany_right-p">
            Wokoxun is a manufacturer of Bluetooth-connected smartwatches in China. We help companies manufacture and import smartwatches from China. With 8 years of experience in ODM & OEM services, we specialize in assisting importers and brands through our experienced team and strict quality control processes. We have earned recognition for our on-time delivery, exceptional service, and reliable after-sales support.
          </p>
        </div>
      </div>

      <div className="factory">
      <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741497715/factory_blnvsc.webp'} alt="office" />
      </div>

      {/* Trade team */}
      {/* <div className="tradeteam">
        <h2 className="tradeteam_title section_heading">Trade Team</h2>
        <div className="tradeteam_members">
          {tradeTeam.map((item) => (
            <div key={item.id} className="tradeteam_member">
              <div className="tradeteam_member_image">
                <img src={item.img} alt="img" />
              </div>
              <div className="tradeteamMember_content">
                <div className="tradeteamMember_title">
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
                <div className="tradeteamMember_contact">
                  <p>
                    <FaPhoneAlt /> {item.Phone}
                  </p>
                  <p>
                    <FaWhatsappSquare /> {item.whatsapp}
                  </p>
                  <p>
                    <IoLogoWechat /> {item.Wechat}
                  </p>
                  <p>
                    <MdEmail /> {item.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default NewArraivals;
