import React from "react";
import ProductContainer from "../Container/ProductContainer";
import { Container } from "reactstrap";
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";

function ProductPage(props) {
  return (
    <Container>
      <Header />
      <Banner />
      <ProductContainer />
    </Container>
  );
}

export default ProductPage;
