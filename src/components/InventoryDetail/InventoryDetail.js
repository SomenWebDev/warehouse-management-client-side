import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { inventoryId } = useParams();

  const [inventory, setInventory] = useState({});
  // const [quantity, setQuantity] = useState("");
  // const { quantity } = inventory;
  // console.log(quantity);

  useEffect(() => {
    const url = `https://boiling-fortress-50173.herokuapp.com/inventory/${inventoryId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const deliveryHandleBtn = () => {
    fetch(
      `https://boiling-fortress-50173.herokuapp.com/inventory/decrease/${inventoryId}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setInventory({ ...inventory, quantity: inventory.quantity - 1 });
      });
  };

  const handleRestock = (event) => {
    event.preventDefault();
    const value = event.target.restock.value;

    fetch(
      `https://boiling-fortress-50173.herokuapp.com/inventory/increase/${inventoryId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: value }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setInventory({
          ...inventory,
          quantity: parseInt(inventory.quantity) + parseInt(value),
        });
      });
  };

  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="border-0">
              <Card.Img variant="top" src={inventory.img} className="w-50" />
              <Card.Body>
                <Card.Title>{inventory.name}</Card.Title>
                <Card.Text>
                  <p>{inventory.description}</p>
                  <p>{inventory.brand}</p>
                  <p>Price-{inventory.price}</p>
                  <p>Quantity-{inventory.quantity}</p>
                </Card.Text>
                <Button variant="primary" onClick={deliveryHandleBtn}>
                  Delivered
                </Button>
              </Card.Body>
            </Card>
            {/* <img className="img-fluid" src={inventory.img} alt="" />
            <p>{inventory._id}</p>
            <p>{inventory.name}</p>
            <p>{inventory.description}</p>
            <p>{inventory.brand}</p>
            <p>{inventory.price}</p>
            <p>{inventory.quantity}</p>
            <button onClick={deliveryHandleBtn}>Delivered</button> */}
          </Col>
          <Col lg={6}>
            <form onSubmit={handleRestock} className="mt-5">
              <input type="number" name="restock" id="" />
              <input type="submit" value="Restock" className="restock-btn" />
            </form>
          </Col>
        </Row>
        <div className="text-center">
          <Link to="/manageinventories">
            <Button> Manage Inventories</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default InventoryDetail;
