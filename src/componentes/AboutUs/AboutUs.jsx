import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs largewidth">
      <div className="aboutUs_header">
        <img src={"https://res.cloudinary.com/dbat8c1bl/image/upload/v1741497715/factory_blnvsc.webp"} alt="" />
        {/* <div>
          <h1 className="aboutUsHeader_title">About Us</h1>
          <p className="aboutUsHeader_desc">
            Welcome to our premium smartwatches! As a top manufacturer, we offer
            a variety of models with guaranteed quality, all in ready stock. We
            support OEM services and can customize your logo. Experience the
            perfect blend of style and functionality.
          </p>
        </div> */}
      </div>
      <div className="aboutUs_content">
        <div className="aboutUsContent_left">
          <div className="aboutUsContentLeft_factory">
            <h1>Factory</h1>
            <p>
              Welcome to our Smart Watch Factory, where cutting-edge technology
              meets meticulous craftsmanship. Nestled in a state-of-the-art
              facility, we specialize in designing and manufacturing premium
              smart watches that blend innovation with style. Our team of
              skilled engineers and designers work tirelessly to bring the
              latest advancements in wearable technology to life, ensuring each
              product meets the highest standards of quality and performance.
              From Bluetooth calling and AI voice assistance to comprehensive
              health monitoring and waterproof designs, our smart watches are
              crafted to cater to the diverse needs of modern consumers. We take
              pride in our rigorous testing processes, ensuring durability and
              reliability in every piece we produce. Committed to sustainability
              and excellence, our factory employs eco-friendly practices and
              sources high-quality materials, ensuring our products are not only
              technologically advanced but also environmentally responsible. At
              our Smart Watch Factory, we are dedicated to enhancing everyday
              life with smart, stylish, and affordable wearable technology.
            </p>
          </div>

          <div className="aboutUsContentLeft_capacity">
            <h1>Capacity</h1>
            <p>
              Our expansive factory, combined with a seasoned sales team,
              ensures efficient production and exceptional customer service. We
              specialize in solving shipping issues, making foreign trade
              seamless and hassle-free. Trust us to deliver high-quality smart
              watches with reliability and expertise in international logistics.
            </p>
          </div>

          <div className="aboutUsContentLeft_address">
            <h1>Location</h1>
            <p>
              Room 601, Huayu Technology Building, Niulanqian Industrial Zone,
              Minzhi Street, Xinniu Community, Minzhi Street, Longhua District,
              Shenzhen
            </p>
          </div>
        </div>
        <div className="aboutUsContent_right">
          <div className="aboutUsContentRight_factory"></div>
          <div className="aboutUsContentRight_company">
            <h1>Company</h1>
            <p>
              Our company is a leading innovator in the smart watch industry,
              dedicated to merging cutting-edge technology with elegant design.
              Located in a sprawling, state-of-the-art facility, we pride
              ourselves on our ability to produce high-quality smart watches
              that cater to the diverse needs of modern consumers. Our
              experienced team of engineers, designers, and sales professionals
              work collaboratively to ensure each product meets the highest
              standards of performance and style. With a keen focus on
              international trade, we have developed robust solutions to tackle
              shipping challenges, ensuring timely and efficient delivery
              worldwide. Our commitment to customer satisfaction extends beyond
              production; we offer unparalleled support and expertise in
              navigating global logistics, making foreign trade seamless and
              hassle-free. At the heart of our operations is a dedication to
              sustainability and innovation. We employ eco-friendly practices
              and source top-grade materials, ensuring our products are both
              technologically advanced and environmentally responsible. Trust us
              to deliver smart, stylish, and reliable wearable technology.
            </p>
          </div>
          <div className="aboutUsContentRight_odmoem">
            <h1>ODM & OEM</h1>
            <p>
            We excel in ODM and OEM services, offering bespoke smart watch solutions tailored to your brand's specific requirements. Our expertise ensures innovative designs and superior manufacturing quality. Partner with us to bring your unique vision to life, supported by our extensive experience and commitment to excellence in the wearable technology industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
