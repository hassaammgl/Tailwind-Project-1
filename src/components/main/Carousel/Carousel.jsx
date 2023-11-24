import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import img1 from "../../../assets/swiper_slide_1.jpg";
import img2 from "../../../assets/swiper_slide_2.jpg";

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="w-full"
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="w-full">
        <img className="w-full" src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={img2} className="w-full" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
