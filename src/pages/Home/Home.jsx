import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import SingleProperty from "../State/SingleProperty";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const property = useLoaderData();
  useEffect(() =>{
    AOS.init();
  },[])
  return (
    <div>
      <Helmet>
        <title>FindHusly | Home</title>
      </Helmet>
      <Banner />
      <div data-aos="fade-up" data-aos-duration="1500" className="mt-20 mx-10 md:mx-14 lg:mx-24">
        <div className="text-center">
          <p className="text-xl text-red-500">Featured Properties</p>
          <h1 className="text-4xl font-semibold mt-6">Recommended For You</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {property.map((item) => (
            <SingleProperty key={item.id} property={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
