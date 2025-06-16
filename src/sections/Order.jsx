import bgImage from "../assets/Order_section/section_bg_img.png";
import coffee_bean from "../assets/Order_section/coffee_bean.png";
import cup from "../assets/Order_section/cup.png";

export default function Order() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" h-[300px] md:h-[400px] w-full  mt-4 md:mt-2  "
      >
        <div className="bg-[rgba(96,55,9,0.51)] h-full  relative w-full flex justify-between items-center">
          {/* Content */}
          <div className="md:w-1/2 w-full  h-full flex justify-center items-start pl-5 md:pl-20 flex-col text-white font-commonFont">
            <h1 className="text-[35px] font-[500] z-50">
              Get a chance to have an <br className="hidden md:block" /> Amazing
              morning
            </h1>
            <p className="text-lg opacity-90 z-50">
              We are giving you are one time opportunity to experience a better
              life with coffee.
            </p>
            <button className=" h-[40px] w-[100px] z-50 rounded-full text-[15px] mt-6 bg-yeloshColor text-cofeeColor herat-beat-animation">
              Order Now
            </button>
          </div>

          {/* Cup */}
          <div className="w-1/2 hidden md:flex h-full  justify-center items-center">
            <img className="h-[400px] z-50" src={cup} alt="" />
          </div>

          <img
            className="absolute right-0 z-30 bottom-0 h-full"
            src={coffee_bean}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
