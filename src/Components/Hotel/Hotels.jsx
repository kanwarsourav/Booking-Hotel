import React from "react";
import { CiLocationOn } from "react-icons/ci";

export default function Hotels({hotels, heading}) {
  return (
    <>
      <div className="hotels-container">
        <h1 className="hotels-header">{heading}</h1>
        <div className="hotels">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-item">
              <img src={hotel.image} alt="" className="hotel-image" />
              <div className="hotel-content">
                <span className="hotel-location">
                  <CiLocationOn className="icon" /> {hotel.location}
                </span>
                <span className="hotel-name">{hotel.name}</span>
                <div className="hotel-rate">
                  <button>{hotel.rate}</button>
                  <span>{hotel.review}</span>
                </div>
                <span className="hotel-price">
                  <span>From: </span> ${hotel.price} <span> /night</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
