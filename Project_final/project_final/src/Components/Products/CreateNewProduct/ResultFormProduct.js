import React from "react";
import { Container } from "reactstrap";
import ProductItem from "./ProductItem";
import ProductCard from "./ProductCard";

function ResultFormProduct({ product }) {
  return (
    <Container>
      <ProductItem />
      <ProductCard products={product} />
    </Container>
  );
}

export default ResultFormProduct;
