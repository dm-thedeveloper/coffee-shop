import React from "react";
import { NavBar , Hero , Menue, About} from "./sections";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <main className=" relative  bg-gray-600 ">
        <NavBar />
        <Hero />
        <Menue/>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium mollitia id perferendis dolore minima aperiam itaque, consectetur harum labore at sit, facilis illum unde eius odit doloremque? Quia, animi. Dolor?
        {/* <About/> */}
        
      </main>
    </>
  );
}

export default App;
