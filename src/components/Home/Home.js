import React from "react";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Inventory></Inventory>
      <Link to="/manageinventories">Manage Inventories</Link>
    </div>
  );
};

export default Home;
