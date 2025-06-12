import React from "react";
import beans from "../assets/menu_section/beans.png";
import coffee_blast from "../assets/menu_section/coffee_blast.png"
// FFFEFC

function Menue() {
  return (
    <>
      <section className="bg-[#FFFEFC]">
        <Discover />
      </section>
    </>
  );
}

function Discover({}) {
  return (
    <>
      <div className="font-commonFont md:mt-0 mt-11 relative flex items-center min-h-[350px] ">
        {/* Conetet or Left */}
        <div className="w-full md:w-1/2 h-full flex justify-center flex-col pl-7 md:pl-16">
          <h1 className="text-cofeeColor text-[30px] md:text-[35px] mb-5">
            Discover the best coffee
          </h1>

          <p className="text-left text-blackColor">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>

          <button className="block self-start mt-5 bg-yeloshColor py-2 px-3 rounded-full text-cofeeColor text-sm">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="w-1/2 hidden  md:flex justify-center items-center">
          <img className="h-[300px]" src={beans} alt="" />
        </div>

        <img className="absolute -bottom-[100px] left-0 h-[200px]" src={coffee_blast} alt="" />

      </div>
    </>
  );
}

export default Menue;
