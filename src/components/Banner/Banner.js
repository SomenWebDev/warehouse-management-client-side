import React from "react";
import { Carousel } from "react-bootstrap";
import bike1 from "../../img/banner1.jpg";
import bike2 from "../../img/banner2.jpg";

const Banner = () => {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100"
            src={bike1}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 text-dark fw-bold">
            <h3 className="text-success fst-italic  fw-bold">
              Distribution, Storage, Warehousing & Fulfillment
            </h3>
            <p className="text-white  fw-bold">
              Your solution for first class warehousing services for the bike.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100"
            src={bike2}
            alt="Second slide"
          />

          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 text-dark fw-bold">
            <h3 className="text-success fst-italic  fw-bold">
              Distribution, Storage, Warehousing & Fulfillment
            </h3>
            <p className="text-white  fw-bold">
              Your solution for first class warehousing services for the bike.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
