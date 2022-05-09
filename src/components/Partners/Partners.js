import React from "react";
import bajaj from "../../logo/Bajaj.jpg";
import hero from "../../logo/hero.jpg";
import honda from "../../logo/honda.jpg";
import kawasaki from "../../logo/kawasaki.jpg";
import suzuki from "../../logo/suzuki.jpg";
import yamaha from "../../logo/yamaha.jpg";
import tvs from "../../logo/tvs.jpg";

const Partners = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">OUR PARTNERS</h1>
      <div className="row border shadow p-3 mb-5 bg-body rounded">
        <div className="col-6 col-lg-3 ">
          <img className="w-50" src={bajaj} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-50" src={hero} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-50" src={kawasaki} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-50" src={honda} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-50" src={suzuki} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-50" src={yamaha} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-50" src={tvs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
