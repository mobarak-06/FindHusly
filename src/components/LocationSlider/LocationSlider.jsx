// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const LocationSlider = () => {
  return (
    <div className="mt-32 mb-14">
      <div className="text-center mb-12">
      <h3 className="text-red-500 text-xl font-medium">Explore Cities</h3>
      <h1 className="text-4xl font-bold mt-4">Our Location For You</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero w-[400px] h-[550px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/4Nc0h2v/eiffel-tower-as-famous-city-landmark-paris.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-xl text-center ">
              <div className="text-white mt-[420px]">
                <p>221 property</p>
                <h1 className=" text-3xl">Paris, France</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero w-[400px] h-[550px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Wy8dchR/big-ben-houses-parliament-london-uk.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-xl text-center ">
              <div className="text-white mt-[420px]">
                <p>310 property</p>
                <h1 className=" text-3xl">London, Uk</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero w-[400px] h-[550px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/7Gm6L8V/toronto-cn-tower.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-xl text-center ">
              <div className="text-white mt-[420px]">
                <p>190 property</p>
                <h1 className=" text-3xl">Toronto, Canada</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero w-[400px] h-[550px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/xHBsWQM/statue-liberty-liberty-island-new-york.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-xl text-center ">
              <div className="text-white mt-[420px]">
                <p>350 property</p>
                <h1 className=" text-3xl">New York, USA</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero w-[400px] h-[550px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/RjnygMj/mesmerizing-shot-famous-historic-taj-mahal-agra-india.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-xl text-center ">
              <div className="text-white mt-[420px]">
                <p>400 property</p>
                <h1 className=" text-3xl">New Delhi, India</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero w-[400px] h-[550px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gyTxkdJ/beautiful-rainbow-nature.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-xl text-center ">
              <div className="text-white mt-[420px]">
                <p>520 property</p>
                <h1 className=" text-3xl">Dhaka, Bangladesh</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LocationSlider;
