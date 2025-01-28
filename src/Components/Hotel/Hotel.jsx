import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark, FaMapLocationDot } from "react-icons/fa6";
import { allHotels, rooms, facilities } from "../../data";
import { GiDoubleStreetLights } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbParkingCircle } from "react-icons/tb";

export default function Hotel() {
const [open, setOpen]= useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleOpen = (i) => {
    setSliderNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
let newsSlideNumber

if(direction =="1"){
    newsSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
}
else{
    newsSlideNumber = sliderNumber === 5? 0 : sliderNumber + 1
}
setSliderNumber(newsSlideNumber)
  }

  const { id } = useParams()
  const hotel = allHotels.find((hotel) => hotel.id === parseInt(id));
  return(
  <>
    <div>
      <Navbar />

      <div className="hotel-container">
{
    open && (
        <div className="slider">
            <FaCircleXmark className="close" onClick={() => setOpen(false)}/>
                <FaCircleArrowLeft className="arrow" onClick={() => handleMove("1")}/>
                    <div className="slider-wrapper">
                        <img src={rooms[sliderNumber].image} alt="" className="slider-img"/>
                    </div>
                    <FaCircleArrowRight className="arrow" onClick={() => handleMove("r")}/>
        </div>
    )
}

        <div className="hotel-wrapper">
          <h1 className="hotel-title">{hotel.title}</h1>
          <div className="hotel-location">
            <FaMapLocationDot />
            <span>{hotel.location}</span>
          </div>
          <span className="hotel-distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel-price">
            Enjoy a comfortable stay starting at ${hotel.price} per night
          </span>
          <div className="hotel-images">
            {rooms.map((room, i) => (
              <div key={1} className="hotel-images-wrapper">
                <img src={room.image} alt="" className="hotel-img" onClick={() => handleOpen(i)}/>
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-title">About this hotel</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur iure, iusto quis alias possimus ducimus quidem ab
                vitae delectus, dolores et expedita quod placeat ipsa sint
                quisquam excepturi. Quibusdam, consequatur?
              </p>
              <div className="hotel-facilities">
                <div className="hotel-facilitied-title">
                  <div className="facilities">
                    {facilities.map((facility) => (
                      <div key={facility.id} className="facility">
                        <span className="facility-icon">{facility.icon}</span>
                        <span>{facility.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hotel-highlights">
                <h1>Hotel Highlights</h1>
                <h4>Perfect for a 4-night stay!</h4>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h4>Breakfast Info</h4>
                <span>Continental, Fresh, Indulgent, Protien-packed, Savory, Gourmet</span>
                <h4>Rooms With</h4>
                <ul>
                    <li>
                        <GiDoubleStreetLights/> Quiet Street View
                    </li>
                    <li>
                        <MdPool/> Pool With a View
                    </li>
                    <li>
                        <FaCity/> City View
                    </li>
                    <li>
                        <TbParkingCircle/> Free Parking
                    </li>
                </ul>
                <button>Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}
