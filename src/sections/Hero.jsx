import React from "react";
import landingPoster from "../assets/landing_poster.png";

function Hero() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${landingPoster})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen w-full  relative"
      >
        
        {/* Overly */}
        <div className="overlay flex  justify-start pl-11 items-center h-full md:pl-[100px]">

          <div className=" text-white ">
            <p className="font-commonFont">
              We’ve got your morning covered with
            </p>

            <h1 className="font-stylishFont text-[100px] md:text-[200px] font-normal">Coffee</h1>

            <p className="md:w-[400px] w-[90%] text-left font-commonFont">
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
            
            <div  className="mt-5">
            <button href="" className="herat-beat-animation bg-yeloshColor py-2 px-4 rounded-full text-cofeeColor focus:outline-none" >Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
