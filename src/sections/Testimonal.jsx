import React, { useState } from "react";
import { testimonalData } from "../constants";
import left_bottom_img from "../assets/Testimonal/left_bottom.png";
import top_right_img from "../assets/Testimonal/top_right.png";

function Testimonal() {
  return (
    <>
      <section id="testimonal" className="mt-7 mb-10 relative">
        {/*  */}
        <Heading />
        <TestimonalSection />
        {/* Cofee Blasts */}
        {/* Left Bottom */}
        <img
          className="absolute left-0 -bottom-5 sm:-bottom-[120px] sm: w-[35%]"
          src={left_bottom_img}
          alt=""
        />
        {/* Right Top */}

        <img
          className="absolute top-[50px] sm:-top-9 right-0 sm: w-[35%]"
          src={top_right_img}
          alt=""
        />
      </section>
    </>
  );
}

function Heading() {
  return (
    <>
      <div className="text-center  font-commonFont">
        <h1 className="text-cofeeColor z-50 text-2xl sm:text-[30px] md:text-[35px] mb-5">
          Our coffee perfection feedback{" "}
        </h1>

        <p className="z-50 text-[12px] sm:text-xl text-blackColor -translate-y-4">
          Our customers has amazing things to say about us
        </p>
      </div>
    </>
  );
}

function TestimonalSection({}) {
  const [index, setIndex] = useState(0);
  const next = () =>
    setIndex((prev) => (prev === testimonalData.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonalData.length - 1 : prev - 1));

  const { name, feedaback, city, avatar, id } = testimonalData[index];

  return (
    <>
      <div
        id={feedaback}
        className=" min-h-[250px]  sm:min-h-[400px] h-auto  w-[85%] sm:w-[70%] -[900px] font-commonFont  relative flex justify-center items-center flex-col  mt-5 bg-[#FFF9F1] mx-auto border border-[rgba(249,192,106,0.56)]"
      >
        <p className=" text-[18px] sm:text-2xl w-[90%] text-center text-blackColor">
          {" "}
          {feedaback}{" "}
        </p>
        <h1 className=" text-[23px] sm:text-3xl font-bold text-cofeeColor mt-5 sm:translate-y-10">
          {name}
        </h1>
        <h4 className=" text-[10px] sm:text-[15px] text-blackColor  sm:translate-y-11">
          {city}
        </h4>

        {/* Avatar */}
        <img
          className="sm:h-[70px] sm:w-[70px] h-12 w-12 sm:rounded-2xl rounded-xl  -bottom-[20px] absolute"
          src={avatar}
          alt=""
        />

        {/* Left Right Buttons */}

        {/* left */}
        <button
          onClick={prev}
          className="sm:h-[50px] z-50 sm:w-[50px] h-[30px] w-[30px] text-lg sm:text-[24px]  -left-4 sm:-left-[25px] bg-yeloshColor text-cofeeColor rounded-md absolute top-1/2   hover:border hover:border-cofeeColor duration-300 hover:opacity-90"
        >
          {" "}
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        {/* right */}
        <button
          onClick={next}
          className="sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] text-lg sm:text-[24px]  -right-4 sm:-right-[25px] bg-yeloshColor text-cofeeColor rounded-md absolute top-1/2   hover:border hover:border-cofeeColor duration-300 hover:opacity-90"
        >
          {" "}
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        {/* "" */}
        <div className="absolute text-[30px] sm:text-[50px] text-cofeeColor sm:left-8 left-6 top-3 sm:top-5">
          <i class="fa-solid fa-quote-left"></i>
        </div>
      </div>
    </>
  );
}

export default Testimonal;
