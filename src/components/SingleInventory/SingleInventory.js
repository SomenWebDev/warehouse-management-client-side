// import React from "react";
// import { Button, Card, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const SingleInventory = ({ inventory }) => {
//   const { name, price, quantity, img, description, brand, _id } = inventory;
//   const navigate = useNavigate();

//   const navigateToInventoryDetail = (id) => {
//     navigate(`/inventory/${id}`);
//   };

//   return (
//     <div>
//       <Col>
//         <Card>
//           <Card.Img variant="top" src={img} style={{ height: "200px" }} />
//           <Card.Body>
//             <Card.Title className="text-start">{name}</Card.Title>
//             <Card.Text>
//               <p className="text-start">{description}</p>
//               <p className="text-start">
//                 <strong>Brand:</strong>

//                 {brand}
//               </p>
//               <p>Price: BDT {price}</p>
//               <p>{quantity}</p>
//             </Card.Text>
//             <Button onClick={() => navigateToInventoryDetail(_id)}>
//               Go somewhere
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     </div>
//   );
// };

// export default SingleInventory;
// //
