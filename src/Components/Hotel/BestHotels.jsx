import React from "react";
import Hotels from "./Hotels";
import { hotels } from "../../data";
export default function BestHotels() {
  return (
    <>
      <Hotels hotels={hotels} heading="Best Hotels" />
    </>
  );
}
