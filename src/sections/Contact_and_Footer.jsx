import React from "react";
import bgImg from "../assets/Order_section/section_bg_img.png";
import footerBg from "../assets/contant_and_footer/footer_bg_img.png";
import cupLeft from "../assets/contant_and_footer/cup_left.png";
import cupRight from "../assets/contant_and_footer/cup_right.png";
import { NavLinks } from "../constants";


function Contact_and_Footer() {
  return (
    <>
      <section  id="contact" className="mt-[130px] relative">

        <Contact />
        <Footer />


<img className="absolute top-[200px] sm:top-[150px] left-0 h-[150px] sm:h-[240px]" src={cupLeft} alt="" />
<img className="absolute top-[200px] sm:top-[150px] right-0 h-[150px] sm:h-[240px]" src={cupRight} alt="" />
      </section>
    </>
  );
}

function Contact(params) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[300px] w-full bg-gray-600"
      >
        {/* Layer */}

        <div className=" h-full w-full bg-[rgba(96,55,9,0.41)] font-commonFont  flex justify-center items-center flex-col">
          <h1 className="text-white z-20 sm:ml-0 ml-5 text-center text-[30px] sm:text-[35px]">
            Subscribe to get the Latest News
          </h1>
          <p className="sm:text-[14px] text-[10px] text-white">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>

          <form className="sm:h-[44px] z-30 h-9 sm:mt-8 mt-6 sm:w-[500px] w-[90%] flex justify-center items-center">
            <input
              required
              className="h-full w-[80%] px-3 rounded-tl-lg rounded-bl-lg outline-none focus:outline-none text-sm sm:text-xl"
              placeholder="Enter your mail"
              type="text"
            />
            <button
              type="submit"
              className="bg-yeloshColor h-full w-[20%] rounded-tr-lg rounded-br-lg active:border-none text-cofeeColor text-[10px] sm:text-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function Footer({}) {
  return (
    <>
      <footer className="h-[800px] sm:h-[600px] md:h-[400px]  w-full bg-cofeeColor relative">
        <img className="absolute bottom-0 w-full" src={footerBg} alt="" />
        {/* Layer */}
        <div className="h-full w-full bg-[rgba(96,55,9,0.55)] absolute inset-0">
          <div className="w-[90%]  mt-12 sm:mt-[100px] mx-auto grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 place-items-start gap-7 md:place-items-center ">
            {/*1st  */}
            <div className="z-40">

              <h1 className="text-[35px] font-stylishFont text-white">
                Bean Scene
              </h1>
              <p className="text-white font-commonFont mt-4">
                Lorem Ipsum is simply dummy text of the printing anmy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              {/* Icons */}
              <ul className=" flex gap-4 mt-4">
                {Icons.map((icon) => (
                  <li>
                    <a className="text-white text-2xl" href="">
                      {icon.i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2nd */}
            <div className=" font-commonFont border-r-gray-500 flex justify-between flex-col">
              <h1 className="text-white font-bold text-2xl">Quick Links</h1>

              <ul className="text-white mt-5 flex flex-col gap-2 ">
                {NavLinks.map((link) => (
                  <li>
                    <a id={link.id} href={link.href}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3rd */}
            <div className=" font-commonFont border-r-gray-500 flex justify-between flex-col">
              <h1 className="text-white font-bold text-2xl">Contact Us</h1>

              <ul className="text-white mt-5 flex flex-col gap-2 ">
              <p>Defence Phase 11. <br /> Near Aajizi Production karachi.</p>
              <a href="">(024) 324 54564 </a>
              <a href="">order.beensean@gmail.com</a>
              <a target="_blank" href="https://bean-scene-jet.vercel.app/">bean-sece.coffee</a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const Icons = [
  {
    id: 0,
    i: <i class="fa-brands fa-facebook"></i>,
    href: "",
  },
  {
    id: 1,
    i: <i class="fa-brands fa-instagram"></i>,
    href: "",
  },
  {
    id: 2,
    i: <i class="fa-brands fa-youtube"></i>,
    href: "",
  },
  {
    id: 3,
    i: <i class="fa-brands fa-twitter"></i>,
    href: "",
  },
];

export default Contact_and_Footer;
