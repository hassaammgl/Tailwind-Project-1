import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <ReactLoading type={"bars"} color={"red"} height={667} width={375} />
    </div>
  );
};

export default Loader;
