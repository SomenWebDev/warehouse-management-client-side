import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

import Inventory from "../Inventory/Inventory";
import Partners from "../Partners/Partners";
import SingleInventory from "../SingleInventory/SingleInventory";
import useInventories from "./../../hooks/useInventories";

const Home = () => {
  const [inventories] = useInventories();
  return (
    <div>
      <Banner></Banner>
      <div className="container mt-5">
        <Row xs={1} lg={3}>
          {inventories.slice(0, 6).map((inventory) => (
            <SingleInventory
              key={inventory._id}
              inventory={inventory}
            ></SingleInventory>
          ))}
        </Row>
      </div>
      <div className="text-center">
        <Link to="/manageinventories">
          <Button>Manage Inventories </Button>
        </Link>
      </div>

      <Partners></Partners>
      <Contact></Contact>
      {/*  */}
    </div>
  );
};

export default Home;
