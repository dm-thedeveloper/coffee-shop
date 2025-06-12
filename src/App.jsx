import React from "react";
import { NavBar , Hero , Menue} from "./sections";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <main className=" mx-auto relative  bg-gray-600 ">
        <NavBar />
        <Hero />
        <Menue/>
      </main>
    </>
  );
}

export default App;
