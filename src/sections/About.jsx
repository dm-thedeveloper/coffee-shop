import { useState } from "react";
import { Features } from "../constants";

function About() {
  return (
    <>
      <section className=" w-full  bg-white pt-16 text-white">
        <h1 className="text-cofeeColor font-commonFont  text-center text-[25px] sm:text-[30px] md:text-[35px] mb-5">
          Enjoy a new blend of coffee style{" "}
        </h1>
        <p className="text-blackColor  text-center -translate-y-4 ">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        {/* Grid */}

        <div id="about" className="grid pb-7 sm:w-[90%] gap-4 sm:gap-4 md:gap-8 md:w-[90%]  mt-5 mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center text-cofeeColor ">
          <Cards />
        </div>

        <p className="text-blackColor md:text-sm text-[11px]  text-center -translate-y-4 ">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <h1 className="text-cofeeColor font-commonFont font-bold opacity-80  text-center  text-[20px] md:text-[25px] mb-5">
          Get started today.{" "}
        </h1>
        <button className="block mx-auto  bg-yeloshColor md:h-[40px] md:text-xl md:w-[100px] h-[30px] w-[70px] text-sm rounded-full">
          Join Us
        </button>
      </section>
    </>
  );
}

function Cards() {
  const [index, setIndex] = useState(0);

  return (
    <>
      {Features.map((feature) => (
        <div
          onMouseOver={() => setIndex(feature.id)}
          key={feature.heading}
          className={`md:h-[200px] md:w-[200px] h-[150px] w-[150px] duration-300 font-commonFont flex py-3 justify-center items-center flex-col gap-2  ${
            index === feature.id ? "bg-[#FFEED8]" : "bg-[#FFF9F1]"
          } `}
        >
          <img
            className="md:h-[50px] md:w-[50px] h-[35px] w-[35px]"
            src={feature.iconImg}
            alt=""
          />
          <h1 className="md:text-2xl text-[18px] font-[500] opacity-90">
            {feature.heading}
          </h1>
          <p className="text-center text-[10px] md:text-sm w-[80%] text-blackColor">
            {feature.description}
          </p>
        </div>
      ))}
    </>
  );
}
export default About;
