import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <ReactLoading type={"balls"} color={"red"} height={667} width={375} />
    </div>
  );
};

export default Loader;
