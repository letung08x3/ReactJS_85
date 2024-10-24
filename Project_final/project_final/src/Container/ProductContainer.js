import React, { useState } from "react";
import { Container } from "reactstrap";
import ModalCreateNewProduct from "../Components/Products/CreateNewProduct/ModalCreateNewProduct";
import CreateButtonProduct from "../Components/Products/CreateNewProduct/CreateButtonProduct";
import ResultFormProduct from "../Components/Products/CreateNewProduct/ResultFormProduct";

function ProductContainer(props) {
  const [showModal, setShowModal] = useState(false);

  const product = {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-xanh-thumb-600x600.jpg",
    name: "iPhone 16 Plus",
    display: "Super Retina XDR",
    screenSize: '6.2"',
    storage: ["256GB", "512GB", "1TB"],
    price: "25.990.000",
    rating: "3.2",
    reviews: "25",
  };
  const onHandleOpenModal = () => {
    setShowModal(true);
  };

  const onHandleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <CreateButtonProduct onHandleOpenModal={onHandleOpenModal} />
      <ModalCreateNewProduct
        showModal={showModal}
        onHandleCloseModal={onHandleCloseModal}
      />
      <ResultFormProduct product={product} />
    </Container>
  );
}

export default ProductContainer;
