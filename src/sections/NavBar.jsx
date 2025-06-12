import { useState } from "react";
import { NavLinks } from "../constants";
import NavBg from "../assets/landing_poster.png";

function NavBar() {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenue = () => setisOpen(!isOpen);
  return (
    <>
      <header className="flex z-40 fixed top-0 left-0 right-0 items-center justify-between h-[40px] w-[90%] mx-auto mt-3  ">
        {/* Logo */}
        <h1 className="text-2xl font-stylishFont text-white">Bean Scene</h1>

        {/* NavBar */}
        <nav className="md:block hidden">
          <NavItems />
        </nav>

        {/* Sighn & Login */}

        <aside className="flex gap-5 items-center font-commonFont">
          <a className="text-white hidden sm:block underline " href="">
            Sign In
          </a>
          <a
            className="py-1 hidden sm:block  px-4 bg-yeloshColor rounded-full text-cofeeColor  "
            href=""
          >
            Sighn Up
          </a>

          <button
            onClick={toggleMenue}
            className="py-1 block md:hidden px-4 bg-cofeeColor rounded-full text-white  "
          >
            {isOpen ? (
              <i class="fa-solid fa-mug-hot"></i>
            ) : (
              <i class="fa-solid fa-mug-saucer"></i>
            )}
          </button>
        </aside>

        {/* Mobile Menue Button */}
      </header>
      <div className="block md:hidden">
        <MobileMenu isOpen={isOpen} />
      </div>
    </>
  );
}

function NavItems({}) {
  return (
    <ul className="flex py-8 sm:py-0 flex-col md:flex-row text-white font-commonFont gap-8 items-center">
      {NavLinks.map((item) => (
        <li
          className="ul-li backdrop-blur-2xl md:backdrop-filter-none rounded-lg border md:border-none md:w-auto w-[100px]  text-center  relative hover:opacity-80 transition-colors"
          id={item.id}
        >
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

function MobileMenu({ isOpen }) {
  return (
    <div
      style={{
        backgroundImage: `url(${NavBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`overflow-hidden w-full bg-[#7b4000c0] fixed z-[1000] top-[60px] left-0 right-0 transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[450px] py-4" : "max-h-0"
      }`}
    >
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } transition-opacity duration-300`}
      >
        <NavItems />
        <div className="text-center">
          <a className="text-white text-2xl block sm:hidden underline " href="">
            Sign In
          </a>

          <a
            className=" text-2xl block bg-yeloshColor w-[90%] mx-auto rounded-full sm:hidden border border-cofeeColor  py-1 text-cofeeColor mt-4"
            href=""
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
