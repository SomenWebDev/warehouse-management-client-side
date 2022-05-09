import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleInventory = ({ inventory }) => {
  const { name, price, quantity, img, description, brand, _id } = inventory;
  const navigate = useNavigate();

  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div>
      <Col>
        <Card
          style={{ height: "500px" }}
          className=" border-0 shadow p-3 mb-5 bg-body rounded"
        >
          <Card.Img variant="top" src={img} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>{description}</p>
              <p>{brand}</p>
              <div className="d-flex justify-content-between">
                <p>Quantity:{quantity}ps</p>
                <p>Price:BDT {price}/=</p>
              </div>
            </Card.Text>
            <Button
              onClick={() => navigateToInventoryDetail(_id)}
              className="w-100 position-absolute bottom-0 start-0"
            >
              Update
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleInventory;
//
