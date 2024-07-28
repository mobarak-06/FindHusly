import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import SingleProperty from "../State/SingleProperty";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LocationSlider from "../../components/LocationSlider/LocationSlider";
import Benifit from "../../components/Benifit/Benifit";

const Home = () => {
  const property = useLoaderData();
  const [dataLength, setDataLength] = useState(6);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>FindHusly | Home</title>
      </Helmet>
      <Banner />
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="mt-20 mx-10 md:mx-14 lg:mx-24"
      >
        <div className="text-center">
          <p className="text-xl text-red-500">Featured Properties</p>
          <h1 className="text-4xl font-semibold mt-6">Recommended For You</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {property.slice(0, dataLength).map((item) => (
            <SingleProperty key={item.id} property={item} />
          ))}
        </div>
        <div
          className={
            dataLength === property.length
              ? "hidden"
              : "mt-16 mb-20  text-center"
          }
        >
          <button
            onClick={() => setDataLength(property.length)}
            className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
          >
            View All Properties
          </button>
        </div>
      </div>
      <div
        className="mx-10 md:mx-14 lg:mx-24"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <LocationSlider />
      </div>
      <div data-aos="fade-left" data-aos-duration="1500">
        <Benifit />
      </div>
    </div>
  );
};

export default Home;
