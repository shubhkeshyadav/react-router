import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const param = useParams();
  return (
    <>
      <h1>Product Detail of {param.pid}</h1>
    </>
  );
};

export default ProductDetail;
