import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { inventoryId } = useParams();

  const [inventory, setInventory] = useState({});
  // const [quantity, setQuantity] = useState("");
  const { quantity } = inventory;
  console.log(quantity);

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryId]);

  // const handleDelivered = () => {
  //   const newQuantity = parseInt(quantity - 1);
  //   console.log(newQuantity);
  //   // const updatedQuantity = setQuantity(newQuantity);
  //   // console.log(updatedQuantity);
  //   const url = `http://localhost:5000/inventory/${inventoryId}`;
  //   fetch(url, {
  //     method: "put",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(updatedQuantity),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       alert("update");
  //     });
  // };

  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col lg={8}>
            <img src={inventory.img} alt="" />
            <p>{inventory._id}</p>
            <p>{inventory.name}</p>
            <p>{inventory.description}</p>
            <p>{inventory.brand}</p>
            <p>{inventory.price}</p>
            <p>{inventory.quantity}</p>
            <button>Delivered</button>
          </Col>
          <Col lg={4}>
            <form className="mt-5">
              <input type="number" name="" id="" />
              <br />
              <button>Restock</button>
            </form>
          </Col>
        </Row>
      </Container>
      <Link to="/manageinventories">Manage Inventories</Link>
    </div>
  );
};

export default InventoryDetail;
