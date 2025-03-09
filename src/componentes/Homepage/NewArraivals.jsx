import "./NewArraivals.css";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const newarraival = [
  {
    id: 1,
    productId: "ak58_14",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227241/newArrival_1_sbzgqk.webp',
    modelnumber: "AK-58",
    description:
      "Discover our new sport smartwatch! Sleek design, durable, AI voice support, advanced fitness tracking—perfect for an active lifestyle.",
  },
  {
    id: 2,
    productId: "ak60_12",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227236/newArrival_2_wukwhi.webp',
    modelnumber: "AK-60",
    description:
      "Introducing our new smartwatch: stylish, durable, with AI voice support and advanced fitness tracking. Perfect for active lifestyles!",
  },
  {
    id: 3,
    productId: "ak72_2",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227292/newArrival_3_zd7iin.webp',
    modelnumber: "AK-72",
    description:
      "Check out our new smartwatch! Sleek, long-lasting, with AI voice support and top-tier fitness tracking for active users.",
  },
  {
    id: 4,
    productId: "ak50_18",
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227243/newArrival_4_naurw6.webp',
    modelnumber: "AK-50",
    description:
      "Explore our latest smartwatch: elegant design, robust build, AI voice support, and advanced fitness tracking for your active life.",
  },
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
    Phone: "+86 1555 963 2606",
    whatsapp: "+86 1555 963 2606",
    Wechat: "ashik448",
    email: "ashikmahmud@wokoxun.net",
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227325/mehedi_lbbmdi.webp',
    name: "MD MEHEDI HASAN",
    position: "Foreign Trade consultent",
    Phone: "+86 1990 964 4914",
    whatsapp: "+86 1990 964 4914",
    Wechat: "mishu5772",
    email: "mehedihasan604184@gmail.com",
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
                    to={`watches/${watch.productId}`}
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
            Shenzhen Wo Ko sun Electronic Technology Co., Ltd.
          </h4>
          <p className="aboutcompany_right-p">
            The company is committed to the research and development, design,
            and production services of inteligentwearable devices, providing
            one-stop services from multi category, multi appearance, and
            differentiatedresearch and development to landing. t is a
            professional intelligent wearable production and supply
            sourcemanufacturer, mainly engaged in inteligent wearable design,
            research and development, mold production, andsupporting various
            types of intelligent wearable devices Customization of OEM/ODM and
            App software; Thecompany has an efficient and professional design
            and development team as well as a production team. Wewill provide
            high-quality products and excellent services according to user
            needs!
          </p>
        </div>
      </div>

      {/* Trade team */}
      <div className="tradeteam">
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
      </div>
    </>
  );
};

export default NewArraivals;
