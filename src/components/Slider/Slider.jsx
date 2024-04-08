// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import images
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import slide5 from "../../assets/slide5.jpg"
import slide6 from "../../assets/slide6.jpg"
import slide7 from "../../assets/slide7.jpg"
import slide8 from "../../assets/slide8.jpg"
import slide9 from "../../assets/slide9.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
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
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide1})`}}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide2})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide3})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide4})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide5})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide6})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide7})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide8})` }}
        ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] w-full"
        style={{ backgroundImage: `url(${slide9})` }}
        ></div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

export default Slider;
