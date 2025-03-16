import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";
import MailForm from "../MailForm/MailForm";

const Contact = () => {
  return (
    <div className="contact pagewidth">
      <div className="contact_info">
        <div className="contactInfo_text">
          <a
            href="https://www.facebook.com/globalbridge11/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactInfo_fbBtn"
          >
            <FaFacebook /> Facebook
          </a>
          <p>
            <FaPhoneAlt /> +86 1555 963 2606
          </p>
          <p>
            <MdEmail /> ashikmahmud@wokoxun.net
          </p>
          <p>
            <FaLocationDot /> Longhua District, Shenzhen City, Guangdong
            Province, China
          </p>
          <div className="contactInfo_qrcode">
            <img
              src={
                "https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227160/whatsapp_wugjdo.webp"
              }
              alt="whataspp"
            />
            <img
              src={
                "https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227157/wechat_lykqb3.webp"
              }
              alt="wechat"
            />
          </div>
        </div>
        <div className="contact_image">
          <img
            src={
              "https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227161/contactusBg_dj8bmi.webp"
            }
            alt="contact"
          />
        </div>
      </div>

      {/* Email Form */}
      <div className="contact_contact-div">
        <div>
          <h2>Contact us Through mail</h2>
        </div>
        <MailForm />
      </div>
    </div>
  );
};

export default Contact;
