import React from "react";
import beans from "../assets/menu_section/beans.png";
import coffee_blast from "../assets/menu_section/coffee_blast.png";
import { menuCards } from "../constants";
import About from "./About";

// FFFEFC

function Menue() {
  return (
    <>
      <section  className="bg-[#FFFEFC] absolute">


        <Discover />
        <MenueSection />
        <About/>

        {/* <img className="absolute right-0 rotate-[360deg]"  src={coffee_blast} alt="Cofee Blast Image " /> */}
      </section>
    </>
  );
}

function Discover({}) {
  return (
    <>
      <div className="font-commonFont md:pt-0  pt-11 relative flex items-center  min-h-[350px] ">
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

          <button className="block z-30 self-start mt-5 bg-yeloshColor py-2 px-3 rounded-full text-cofeeColor text-sm">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="w-1/2 hidden  md:flex justify-center items-center">
          <img className="h-[300px]" src={beans} alt="" />
        </div>

        <img
          className="absolute -bottom-[100px] left-0 h-[200px]"
          src={coffee_blast}
          alt=""
        />
      </div>
    </>
  );
}

function MenueSection({}) {

  return (
    <>
      <section id="menue" className="bg-[#FFFEFC] mt-[70px] font-commonFont">
        <h1 className="text-cofeeColor  text-center text-[30px] md:text-[35px] mb-5">
          Enjoy a new blend of coffee style{" "}
        </h1>
        <p className="text-blackColor  text-center -translate-y-4 ">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:gap-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] max-w-7xl mx-auto place-items-center">
          {" "}
          <Cards />
        </div>
      </section>
    </>
  );
}

function Cards({}) {
  return (
    <>
      {menuCards.map((card) => (
        <div className="sm:h-[350px] h-[300px]  mt-7 lg:mt-0  w-[90%] lg:w-auto sm:w-[300px] hover:border-cofeeColor sm:mt-7 group duration-300 hover:scale-105 hover:shadow-md hover:-translate-y- hover:shadow-yeloshColor  bg-[#FFF9F1] border border-[rgb(249,192,106)]">
          <img
            src={card.img}
            className="sm:h-[210px] h-[170px] object-cover w-full"
            alt={`image of ${card.heading} Coffee`}
          />

          {/*  Content*/}
          <div className="flex justify-center items-center flex-col mt-2 text-cofeeColor  ">
            <h1 className="text-[22px] font-bold opacity-90">{card.heading}</h1>
            <p className="text-[17px]">
              {card.ingredients.map((ingredient) => (
                <span>{ingredient} </span>
              ))}
            </p>
            <h3 className="font-bold text-[20px]">{card.prize}</h3>
          </div>

          {/* button */}

          <button className="sm:w-[130px] sm:h-[50px] w-[100px]  h-[40px] text-[15px] sm:translate-y-5 translate-y-3 text-lg mx-auto group-hover:bg-cofeeColor group-hover:text-white hover:scale-95 duration-300 block bg-yeloshColor w- font-medium   rounded-full">
            Order Now
          </button>
        </div>
      ))}
    </>
  );
}
export default Menue;
