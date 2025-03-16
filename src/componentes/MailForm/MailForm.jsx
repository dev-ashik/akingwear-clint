import { useState } from "react";
import "./MailForm.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const MailForm = () => {
  const [mailSend, setMailSend] = useState(false);

  const valid_email = (email) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);

  const sendMail = (e) => {
    e.preventDefault();
    const isValid = valid_email(e.target.email.value);

    if (isValid === true) {
      console.log(e.target.email.value);
      setMailSend(true);
      toast.info('please wait, mail sending...', {
        position: 'top-center',
        autoClose: 5000,
      })
      emailjs
        .sendForm(
          "service_0e0h9iq",
          "template_yek0jyg",
          e.target,
          "vFzUPBAjHlhoCt6GD"
        )
        .then((res) => {
          //   console.log(res);
          if (res.text === "OK") {
            setMailSend(false);
            toast.success("Mail Sent successfully!", {
                position: 'top-center',
                autoClose: 3000,
              });
          }

          e.target.message.value = "";
        })
        .catch((err) => {
          console.log(err);
          toast.error("Faild to sent mail!", {
            position: 'top-center',
            autoClose: 3000,
          });
          setMailSend(true);
        });
    } else {
      toast.warn("Please enter valid mail.", {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="emailSection">
      <form onSubmit={sendMail}>
        <div className="formTop">
          <div className="input-div">
            {/* <label className="" htmlFor="name">
              Your name
            </label> */}
            <br />
            <input className="" name="name" placeholder="your name" required />
          </div>
          <div className="input-div">
            {/* <label className="" htmlFor="email">
              Your email
            </label> */}
            <br />
            <input name="email" placeholder="email" required />
          </div>
          <div className="input-div">
            {/* <label className="" htmlFor="email">
              phone
            </label> */}
            <br />
            <input name="phone" placeholder="phone" />
          </div>
        </div>

        {/* <label className="" htmlFor="message">
          message
        </label> */}
        <br />
        <textarea
          id=""
          cols="30"
          rows="10"
          name="message"
          placeholder="Your message"
          required
        ></textarea>
        <br />
        <div className="mailSubmitButton">
          {mailSend ? (
            <input className="" type="submit" value={"sending..."} />
          ) : (
            <input className="" type="submit" value={"send mail"} />
          )}
        </div>
      </form>
    </div>
  );
};

export default MailForm;
