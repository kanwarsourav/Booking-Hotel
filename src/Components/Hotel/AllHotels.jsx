import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import FilterBar from "./FilterBar";
import { allHotels } from "../../data";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsGrid3X2Gap } from "react-icons/bs";
import Hotels from "./Hotels";
import Footer from "../Footer/Footer";

export default function AllHotels() {
  return (
    <>
      <Navbar />
      <Hero />
      <FilterBar />
      <div className="allhotels-items">
        <h2 className="allhotels-heading">{allHotels.length} Hotel Found</h2>
        <div className="allhotels-icons">
          <HiOutlineSquares2X2/>
          <BsGrid3X2Gap/>
        </div>
      </div>

      <Hotels hotels={allHotels}/>
      <Footer/>
    </>
  );
}
