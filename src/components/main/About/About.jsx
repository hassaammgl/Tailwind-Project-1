import img from "../../../assets/content_image.jpg";

const About = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-4 md:mb-6">
        Content Main Title
      </h2>
      <h2 className="w-1/6 mb-4 h-1 bg-black mx-auto"></h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
        <img
          src={img}
          className="border-2 w-full md:w-1/2 lg:w-1/2 xl:w-1/3 border-black rounded-md mb-4 md:mb-0 md:self-start"
          alt="Description"
        />
        <div className="flex flex-col w-full md:w-1/2 lg:w-2/3 xl:w-3/4 mx-4 md:mx-8 lg:mx-12 xl:mx-16 mt-4 md:mt-0">
          <p className="p-2 md:p-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aliquid saepe pariatur quasi inventore quae placeat voluptatem neque
            dolor. Tempore beatae laboriosam dolores aut quasi aliquam, quisquam
            voluptas laborum consectetur.
          </p>
          <p className="p-2 md:p-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aliquid saepe pariatur quasi inventore quae placeat voluptatem neque
            dolor. Tempore beatae laboriosam dolores aut quasi aliquam, quisquam
            voluptas laborum consectetur.
          </p>
          <p className="p-2 md:p-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aliquid saepe pariatur quasi inventore quae placeat voluptatem neque
            dolor. Tempore beatae laboriosam dolores aut quasi aliquam, quisquam
            voluptas laborum consectetur.
          </p>
          <p className="p-2 md:p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aliquid saepe pariatur quasi inventore quae placeat voluptatem neque
            dolor. Tempore beatae laboriosam dolores aut quasi aliquam, quisquam
            voluptas laborum consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
