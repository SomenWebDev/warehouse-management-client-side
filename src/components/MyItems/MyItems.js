import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import auth from "./../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [inventories, setInventories] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/selectedItems`, {
  //     method: "GET",
  //     headers: {
  //       token: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setInventories(json);
  //       console.log(setInventories(json));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    const myInventories = async () => {
      const email = user.email;
      const url = `https://boiling-fortress-50173.herokuapp.com/myItems?email=${email}`;
      const { data } = await axios.get(url);
      setInventories(data);
    };
    myInventories();
  }, [user]);

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
      <h1>Manage Inventories</h1>
      <Table responsive="sm" striped bordered>
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

export default MyItems;
