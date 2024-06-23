import { AkingwearLogo, wechat, whatsapp } from "../../assets/injex";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footerTop_logo">
          <h2>Akingwear</h2>
          <img className="footer_logo" src={AkingwearLogo} alt="logo" />
        </div>
        <div className="footer_contact_div">
          <h5>Contact</h5>
          <p>+86 1857 554 9060</p>
          <p>ashik.hello@outlook.com</p>
          <p>Shenzhen, Guangdong, China</p>
        </div>
        <div className="footer_qrcode">
          <img src={whatsapp} alt="whatsapp" />
          <img src={wechat} alt="Wechat" />
        </div>
      </div>
      <div>
        <p>All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
