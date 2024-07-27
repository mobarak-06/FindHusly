import houseSell from "../../assets/house-sell.png";
import houseRent from "../../assets/house-rent.png";
import houseBuy from "../../assets/house-buy.png";
import 'animate.css';
const Services = () => {
  return (
    <div className="mt-20 mx-20 md:mx-14 lg:mx-24">
      <h3 className="text-red-500 text-xl">Our Services</h3>
      <h1 className="text-5xl font-medium">What We Do?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 mb-10">
        <div className="w-96">
          <img className="w-20 animate__animated animate__flipInY " src={houseBuy} alt="" />
          <h1 className="mt-10 text-2xl font-semibold">Buy A New Home</h1>
          <p className="text-gray-600 mt-6 text-lg">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
        </div>
        <div className="w-96">
          <img className="w-20 animate__animated animate__flip" src={houseRent} alt="" />
          <h1 className="mt-10 text-2xl font-semibold ">Rent A Home</h1>
          <p className="text-gray-600 mt-6 text-lg">Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.</p>
        </div>
        <div className="w-96">
          <img className="w-20 animate__animated animate__flipInY" src={houseSell} alt="" />
          <h1 className="mt-10 text-2xl font-semibold">Sell A Home</h1>
          <p className="text-gray-600 mt-6 text-lg">Sell confidently with expert guidance and effective strategies, showcasing your property`s best features for a successful sale.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
