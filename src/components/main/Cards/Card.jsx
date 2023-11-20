import { Link } from "react-router-dom";
import img1 from "../../../assets/pod_image_1.jpg";
import img2 from "../../../assets/pod_image_2.jpg";
import img3 from "../../../assets/pod_image_3.jpg";

const Card = () => {
  return (
    <div className="w-full p-4 md:p-8 lg:p-12 flex flex-wrap justify-center items-center">
      <div className="flex flex-col overflow-hidden justify-center items-center border-2 rounded-md border-black w-full md:w-96 m-4">
        <img
          src={img1}
          className="w-full hover:scale-105 transition"
          alt="Image 1"
        />
        <h3 className="text-2xl md:text-4xl font-medium border-b-2 border-black border-dashed p-3 md:p-5 transition hover:text-gray-600">
          POD MAIN TITLE
        </h3>
        <p className="p-4 md:p-7 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, rem harum. Saepe aperiam commodi et maiores voluptatum
          cupiditate similique error impedit!
        </p>
        <Link to="/" className="pb-4 md:pb-7">
          <button className="font-bold p-3 md:p-4 text-lg text-white bg-gray-700 hover:bg-gray-800 rounded-xl">
            MORE INFO
          </button>
        </Link>
      </div>
      <div className="flex flex-col overflow-hidden justify-center items-center border-2 rounded-md border-black w-full md:w-96 m-4">
        <img
          src={img2}
          className="w-full hover:scale-105 transition"
          alt="Image 2"
        />
        <h3 className="text-2xl md:text-4xl font-medium border-b-2 border-black border-dashed p-3 md:p-5 transition hover:text-gray-600">
          POD MAIN TITLE
        </h3>
        <p className="p-4 md:p-7 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, rem harum. Saepe aperiam commodi et maiores voluptatum
          cupiditate similique error impedit!
        </p>
        <Link to="/" className="pb-4 md:pb-7">
          <button className="font-bold p-3 md:p-4 text-lg text-white bg-gray-700 hover:bg-gray-800 rounded-xl">
            MORE INFO
          </button>
        </Link>
      </div>

      <div className="flex flex-col overflow-hidden justify-center items-center border-2 rounded-md border-black w-full md:w-96 m-4">
        <img
          src={img3}
          className="w-full hover:scale-105 transition"
          alt="Image 3"
        />
        <h3 className="text-2xl md:text-4xl font-medium border-b-2 border-black border-dashed p-3 md:p-5 transition hover:text-gray-600">
          POD MAIN TITLE
        </h3>
        <p className="p-4 md:p-7 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, rem harum. Saepe aperiam commodi et maiores voluptatum
          cupiditate similique error impedit!
        </p>
        <Link to="/" className="pb-4 md:pb-7">
          <button className="font-bold p-3 md:p-4 text-lg text-white bg-gray-700 hover:bg-gray-800 rounded-xl">
            MORE INFO
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
