import { AkingwearLogo, wechat, whatsapp } from "../../assets/injex";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_large">
      <div className="pagewidth">
        <div className="footer_top">
          <div className="footerTop_logo">
            <h2>Akingwear</h2>
            <img className="footer_logo" src={AkingwearLogo} alt="logo" />
          </div>
          <div className="footer_contact_div">
            <h4>Contact</h4>
            <div>
              <FaPhoneAlt /> +86 1555 963 2606
            </div>
            <div>
              <MdEmail /> ashikmahmud@wokoxun.net
            </div>
            <div>
              <FaLocationDot />
              <p>
                Niulanqian Industrial Zone, Minzhi Street, Xinniu Community,
                Longhua District, Shenzhen, China
              </p>
            </div>
          </div>
          <div className="footer_qrcode">
            <img src={whatsapp} alt="whatsapp" />
            <img src={wechat} alt="Wechat" />
          </div>
        </div>
      </div>
      <div className="footer_copyRight">
        <p>&copy; All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
