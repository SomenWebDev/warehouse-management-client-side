import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddInventory = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, email: user.email };

    const url = `https://boiling-fortress-50173.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-50 mx-auto">
      <h1>Add some item</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Brand"
          type="text"
          {...register("brand")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddInventory;
