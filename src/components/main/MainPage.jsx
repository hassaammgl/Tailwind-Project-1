import { Carousel } from "./Carousel/Carousel";
import About from "./About/About";
import Card from './Cards/Card'
import Footer from "./Footer/Footer";

const MainPage = () => {
  return (
    <div className="w-[100vw] h-fit m-0 p-0">
      <Carousel />
      <About />
      <Card />
      <Footer/>
    </div>
  );
};

export default MainPage;
