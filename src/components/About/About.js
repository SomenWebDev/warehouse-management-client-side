import React from "react";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Who we are</h1>
      <p>
        For more than 25 years, SS enterprise has pushed the limits of the
        warehousing and supply chain management industry. We provide thousands
        of products for customers who are focused on finding the best shipping
        solution. See how we can help you.
      </p>
      <div className="text-center">
        <Button> To know more ....</Button>
      </div>
    </div>
  );
};

export default About;
