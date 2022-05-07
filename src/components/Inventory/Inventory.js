import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";
import SingleInventory from "../SingleInventory/SingleInventory";

const Inventory = () => {
  // const [inventories, setInventories] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/inventory")
  //     .then((res) => res.json())
  //     .then((data) => setInventories(data));
  // }, []);
  const [inventories] = useInventories();

  return (
    <div>
      <Container className="my-5">
        <Row xs={1} lg={3}>
          {inventories.slice(0, 6).map((inventory) => (
            <SingleInventory
              key={inventory._id}
              inventory={inventory}
            ></SingleInventory>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
