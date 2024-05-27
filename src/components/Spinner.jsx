import React from "react";
import spinner from "../assets/loading-img.gif";

const Spinner = () => {
  return (
    <div className="pt-40 pb-96 mt-20 col-span-4">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="spinner"
      />
    </div>
  );
};

export default Spinner;
