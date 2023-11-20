import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <div className="bg-gray-600 w-[100vw] flex p-7 font-sans">
      <Link to="/">
        <img
          src={logo}
          className="h-auto w-auto"
          alt="logo for website xyz.com"
        />
      </Link>
      <ul className="flex mx-[5rem] text-white items-center text-lg justify-around w-[50%]">
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
        <Link to="/" className="hover:underline">
          Menu link
        </Link>
      </ul>
      <button type="button" className="menu__icon icon-menu">
        <span></span>
      </button>
    </div>
  );
};

export default Header;
