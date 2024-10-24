import React from "react";
import { Button, Container } from "reactstrap";

function CreateButtonProduct({ onHandleOpenModal }) {
  return (
    <Container>
      <br></br>
      <Button color="primary" onClick={onHandleOpenModal}>
        Create New Product
      </Button>
    </Container>
  );
}

export default CreateButtonProduct;
