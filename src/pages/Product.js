import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="product-detail/book001">A Book</Link>
        </li>
        <li>
          <Link to="product-detail/car001">A Car</Link>
        </li>
        <li>
          <Link to="product-detail/carpet001">A Carpet</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Product;
