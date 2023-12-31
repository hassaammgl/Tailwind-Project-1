import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
 
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleOnClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-600 w-full md:w-[100vw] flex flex-row p-4 font-sans items-center relative">
      <Link to="/" className="flex justify-center items-center">
        <img
          src={logo}
          className="h-auto w-auto md:mb-0"
          alt="logo for website xyz.com"
        />
      </Link>
      {width >= 800 ? (
        <ul className="flex flex-wrap pl-12 text-white items-center text-lg justify-center md:justify-around w-full md:w-[50%]">
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 1
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 2
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 3
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 4
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 5
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 6
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              Menu link 7
            </Link>
          </li>
        </ul>
      ) : (
        <button type="button" className="w-6 h-6 absolute right-6 top-6">
          {show ? (
            <AiOutlineClose
              className="w-6 h-6 text-white"
              onClick={handleOnClick}
            />
          ) : (
            <FaBars className="w-6 h-6 text-white" onClick={handleOnClick} />
          )}
        </button>
      )}
      {show && width < 800 && (
        <div
          className="absolute z-20 bg-gray-600 top-0 p-10 w-[100vw] h-[100vh] text-white list-none right-0"
          onClick={handleOnClick}
        >
          <button onClick={handleOnClick}>
            <AiOutlineClose
              className="w-6 h-6 absolute right-10 z-30 top-10 text-white"
              onClick={() => setShow(false)}
            />
          </button>
          <li className="mb-2 absolute flex-col z-20 bg-gray-600 top-0 p-10 w-[100vw] h-[100vh] text-white list-none right-0 flex md:mb-0">
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
            <Link to="/" className="hover:underline text-lg m-auto">
              Menu link 1
            </Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
