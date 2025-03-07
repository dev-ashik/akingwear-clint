import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

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
            <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227160/whatsapp_wugjdo.webp'} alt="whataspp" />
            <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227157/wechat_lykqb3.webp'} alt="wechat" />
          </div>
        </div>
        <div className="contact_image">
          <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227161/contactusBg_dj8bmi.webp'} alt="contact" />
        </div>
      </div>

      {/* Email Form */}
      {/* <div className="contact_email">
        <h1>Contact Us</h1>
        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="contactForm_name">
            <label htmlFor="name">You Name</label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="contactForm_email">
            <label htmlFor="email">Your Email</label>
            <input
            className=""
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div  className="contactForm_message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
