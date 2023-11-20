import { Link } from "react-router-dom";
import paymentPhoto from "../../../assets/payment_icon.png";
import licence from "../../../assets/license_icon.png";

let arr = ["/", "/", "/", "/", "/", "/"];
const Footer = () => {
  return (
    <div className="w-full pb-0 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 bg-gray-600">
      <FooterLinks_1 />
      <PaymentMethods />
      <Licence />
      <FooterLinks_2 />
    </div>
  );
};

const FooterLinks_1 = () => {
  return (
    <section className="border-b-[1px] border-b-gray-400 pb-9 w-[70%] flex flex-col justify-between items-center m-10 sm:flex-row sm:justify-between">
      <details
        className=" pb-4 flex flex-col md:flex-row justify-between items-center transition duration-300 ease-in-out"
        open={window.innerWidth >= 1000 ? true : false}
      >
        <summary
          style={{ listStyle: "none" }}
          className="text-xl font-bold mb-4 text-gray-200 md:mb-0 cursor-pointer"
        >
          SECTION ONE
        </summary>
        <div className="flex text-white flex-col">
          {arr.map((i, index) => (
            <Link key={index} className="m-2 hover:underline" to={i}>
              Footer Link
            </Link>
          ))}
        </div>
      </details>

      <details
        className=" pb-4 flex flex-col md:flex-row justify-between items-center transition duration-300 ease-in-out"
        open={window.innerWidth >= 1000 ? true : false}
      >
        <summary
          style={{ listStyle: "none" }}
          className="text-xl font-bold mb-4 text-gray-200 md:mb-0 cursor-pointer"
        >
          SECTION ONE
        </summary>
        <div className="flex text-white flex-col">
          {arr.map((i, index) => (
            <Link key={index} className="m-2 hover:underline" to={i}>
              Footer Link
            </Link>
          ))}
        </div>
      </details>

      <details
        className=" pb-4 flex flex-col md:flex-row justify-between items-center transition duration-300 ease-in-out"
        open={window.innerWidth >= 1000 ? true : false}
      >
        <summary
          style={{ listStyle: "none" }}
          className="text-xl font-bold mb-4 text-gray-200 md:mb-0 cursor-pointer"
        >
          SECTION ONE
        </summary>
        <div className="flex text-white flex-col">
          {arr.map((i, index) => (
            <Link key={index} className="m-2 hover:underline" to={i}>
              Footer Link
            </Link>
          ))}
        </div>
      </details>

      <details
        className=" pb-4 flex flex-col md:flex-row justify-between items-center transition duration-300 ease-in-out"
        open={window.innerWidth >= 1000 ? true : false}
      >
        <summary
          style={{ listStyle: "none" }}
          className="text-xl font-bold mb-4 text-gray-200 md:mb-0 cursor-pointer"
        >
          SECTION ONE
        </summary>
        <div className="flex text-white flex-col">
          {arr.map((i, index) => (
            <Link key={index} className="m-2 hover:underline" to={i}>
              Footer Link
            </Link>
          ))}
        </div>
      </details>

      <details
        className=" pb-4 flex flex-col md:flex-row justify-between items-center transition duration-300 ease-in-out"
        open={window.innerWidth >= 1000 ? true : false}
      >
        <summary
          style={{ listStyle: "none" }}
          className="text-xl font-bold mb-4 text-gray-200 md:mb-0 cursor-pointer"
        >
          SECTION ONE
        </summary>
        <div className="flex text-white flex-col">
          {arr.map((i, index) => (
            <Link key={index} className="m-2 hover:underline" to={i}>
              Footer Link
            </Link>
          ))}
        </div>
      </details>
    </section>
  );
};

const PaymentMethods = () => {
  return (
    <section className="border-b-[1px] border-b-gray-400 pb-9 w-full md:w-[70%] flex flex-col justify-center items-center  ">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-7 text-gray-200">
        PAYMENT METHODS
      </h1>
      <span className="bg-white w-16 md:w-32 h-1 mb-4 md:mb-7"></span>
      <div className="flex flex-wrap gap-4 md:gap-10 items-center justify-center w-full md:w-[70%]">
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
        <Link to={"/"} className="w-16 md:w-24">
          <img
            src={paymentPhoto}
            alt="Payment Method"
            className="w-full h-auto"
          />
        </Link>
      </div>
    </section>
  );
};

const Licence = () => {
  return (
    <section className="border-b-[1px] border-b-gray-400 pb-9 w-full md:w-[70%] flex justify-center items-center flex-col m-4 md:m-10">
      <div className="flex flex-col-reverse md:flex-row">
        <p className="text-white text-justify p-3 mb-4 md:mr-4 md:mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
          voluptates atque aliquid nobis beatae repellendus animi alias quo
          repudiandae quisquam veritatis , amet consectetur adipisicing elit.
          Nam voluptates atque aliquid nobis beatae laborum placeat, architecto
          vel expedita repellendus animi alias quo repudiandae quisquam
          veritatis asperiores. magni iure!
        </p>
        <img
          src={licence}
          alt="license img"
          className="h-auto m-auto w-fit md:h-auto"
        />
      </div>
    </section>
  );
};

const FooterLinks_2 = () => {
  return (
    <section className="text-white w-full md:w-[70%] flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-0">
      <span className="mb-4 md:mb-0">Copyright &copy; brand name 2022</span>
      <span className="flex justify-center items-center p-5 flex-wrap gap-1 ">
        <Link to={"/"} className="mx-1">
          Footer Link 1
        </Link>{" "}
        |
        <Link to={"/"} className="mx-1">
          Footer Link 2
        </Link>
        |
        <Link to={"/"} className="mx-1">
          Footer Link 3
        </Link>
        |
        <Link to={"/"} className="mx-1">
          Footer Link 4
        </Link>
        |
        <Link to={"/"} className="mx-1">
          Footer Link 5
        </Link>
        |
        <Link to={"/"} className="mx-1">
          Footer Link 6
        </Link>
      </span>
    </section>
  );
};

export default Footer;
