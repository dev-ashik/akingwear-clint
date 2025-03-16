import "./BuyNowModal.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import MailForm from "../MailForm/MailForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

const BuyNowModal = ({ modalIsOpen, setModalIsOpen }) => {
  let subtitle;
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="buyNowModal">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="buyNowModal_body">
        <button className="modalCloseBtn" onClick={closeModal}><IoClose /></button>

        {/* <h4>Payment temporay Disabled!! <br /> Please contact throuth Whatsapp or Email.</h4> */}
        {/* <h4>To get price. <br /> Please contact throuth Whatsapp or Email.</h4> */}

        {/* <img className="whatappQrCode" src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227160/whatsapp_wugjdo.webp'} alt="whatsapp"/> */}
        {/* <p>Email: ashikmahmud@wokoxun.net</p> */}
        
        <MailForm/>
        </div>
        
      </Modal>
    </div>
  );
};

export default BuyNowModal;
