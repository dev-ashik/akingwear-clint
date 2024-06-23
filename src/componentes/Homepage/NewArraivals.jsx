import "./NewArraivals.css";
import {
  newarraivalWatch1,
  newarraivalWatch2,
  newarraivalWatch3,
  office,
} from "../../assets/injex";

const newarraival = [
  {
    id: 1,
    img: newarraivalWatch1,
    modelnumber: "AK20",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nisl mi proin dictumst amet. Purus sed enim elit pulvinar et id. Volutpat sit natoque faucibus id vel arcu scelerisque vel.",
  },
  {
    id: 2,
    img: newarraivalWatch2,
    modelnumber: "AK20",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nisl mi proin dictumst amet. Purus sed enim elit pulvinar et id. Volutpat sit natoque faucibus id vel arcu scelerisque vel.",
  },
  {
    id: 3,
    img: newarraivalWatch3,
    modelnumber: "AK20",
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nisl mi proin dictumst amet. Purus sed enim elit pulvinar et id. Volutpat sit natoque faucibus id vel arcu scelerisque vel.",
  },
];

const tradeTeam = [
  {
    id: 1,
    img: newarraivalWatch3,
    name: "Mr. Kelvin",
    position: "CEO"
  },
  {
    id: 2,
    img: newarraivalWatch3,
    name: "MD ASHIK MAHMUD",
    position: "Foreign Trade consultent"
  },
  {
    id: 3,
    img: newarraivalWatch3,
    name: "Aewin",
    position: "Foreign Trade consultent"
  }
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
                  {watch.modelnumber}
                </h3>
                <p className="newArraivals_item_content-des">
                  {watch.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About company */}
      <div className="aboutcompany">
        <div className="aboutcompany_left">
          <img src={office} alt="office" />
        </div>
        <div className="aboutcompany_right">
          <h2 className="aboutcompany_right-title">About Compay</h2>
          <h4 className="aboutcompany_right-subtitle">Shenzhen Wo Ko sun Electronic Technology Co., Ltd.</h4>
          <p className="aboutcompany_right-p">
            Lorem ipsum dolor sit amet consectetur. Scelerisque nisl mi proin
            dictumst amet. Purus sed enim elit pulvinar et id. Volutpat sit
            natoque faucibus id vel arcu scelerisque vel. Aliquam feugiat
            hendrerit amet sed consectetur lectus cras eu fusce. Eget ipsum
            purus vel enim nam orci consectetur. Neque hendrerit lacus dui nulla
            nibh fermentum. Amet aliquam nam suscipit commodo nulla. Ac maecenas
            interdum tristique euismod
          </p>
        </div>
      </div>


      {/* Trade team */}
          <div className="tradeteam">
            <h2 className="tradeteam_title section_heading">Trade Team</h2>
            <div className="tradeteam_members">
            {
              tradeTeam.map((item) => (
                <div key={item.id}  className="tradeteam_member">
                  <img src={item.img} alt="img" />
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              ))
            }
            </div>
          </div>



    </>
  );
};

export default NewArraivals;
