import Slider from "react-slick";
import img1 from "../../../assets/swiper_slide_1.jpg";
import img2 from "../../../assets/swiper_slide_2.jpg";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  return (
    <Slider
      {...{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: true,
      }}
    >
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </Slider>
  );
};
