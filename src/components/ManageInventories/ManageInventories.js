import React from "react";
import { Button, Table } from "react-bootstrap";

import useInventories from "../../hooks/useInventories";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://boiling-fortress-50173.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Manage Inventories</h1>
      <Table responsive="sm" bordered variant="dark">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        {inventories.map((inventory) => (
          <tbody key={inventory._id}>
            <tr>
              <td>{inventory._id}</td>
              <td>{inventory.name}</td>
              <td>
                <img style={{ width: "50px" }} src={inventory.img} alt="" />
              </td>
              <td>{inventory.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(inventory._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageInventories;
