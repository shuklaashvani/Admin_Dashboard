import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Table from "../Table/Table";
import Sidebar from '../Sidebar'
// import "./MainDash.css";
import "./Products.css"
const Product = () => {
  return (
    <div className="ProductGlass">
      <Sidebar idx={2}/>
      <ProductCard />
    </div>
  );
};

export default Product;
