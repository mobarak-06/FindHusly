import certificate from "../../assets/certified_7189611.png";
import customize from "../../assets/stationary_12000567.png";
import ownerShip from "../../assets/ownership_8759150.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Benifit = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className=" bg-slate-100 pt-20 px-20 md:px-14 lg:px-24 pb-10">
        <div className="text-center">
          <h3 className="text-red-500 text-xl">Our Benefit</h3>
          <h1 className="text-5xl font-medium mt-3">Why Choose FindHusly</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 ">
          <div className="w-96 text-center">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              className="w-20  mx-auto"
              src={certificate}
              alt=""
            />
            <h1 className="mt-10 text-2xl font-semibold">Proven Expertise</h1>
            <p className="text-gray-600 mt-6 text-lg">
              Our seasoned team excels in real estate with years of successful
              market navigation, offering informed decisions and optimal
              results.
            </p>
          </div>
          <div className="w-96 text-center">
            <img
              data-aos="flip-right"
              data-aos-duration="1000"
              className="w-20 mx-auto"
              src={customize}
              alt=""
            />
            <h1 className="mt-10 text-2xl font-semibold ">
              Customized Solutions
            </h1>
            <p className="text-gray-600 mt-6 text-lg">
              We pride ourselves on crafting personalized strategies to match
              your unique goals, ensuring a seamless real estate journey.
            </p>
          </div>
          <div className="w-96 text-center">
            <img
              data-aos="flip-up"
              data-aos-duration="1000"
              className="w-20 mx-auto"
              src={ownerShip}
              alt=""
            />
            <h1 className="mt-10 text-2xl font-semibold">
              Transparent Partnerships
            </h1>
            <p className="text-gray-600 mt-6 text-lg">
              Transparency is key in our client relationships. We prioritize
              clear communication and ethical practices, fostering trust and
              reliability throughout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
