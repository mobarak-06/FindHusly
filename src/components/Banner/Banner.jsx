// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/FzLFHWL/backgroung-Image1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-neutral-content text-center">
                <div >
                  <h1 className="mb-16 text-7xl font-bold">
                    Find Your <span>Dream House</span>
                  </h1>
                  <p className="mb-5 font-josefin text-2xl">
                  We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/fxqZyDq/background-Image2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-neutral-content text-center">
              <div >
                  <h1 className="mb-16 text-7xl font-bold">
                    Find Your <span>Perfect House</span>
                  </h1>
                  <p className="mb-5 font-josefin text-2xl">
                  We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/vBbgXzX/background-Image3.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-neutral-content text-center">
              <div >
                  <h1 className="mb-16 text-7xl font-bold">
                    Find Your <span>Real State House</span>
                  </h1>
                  <p className="mb-5 font-josefin text-2xl">
                  We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
