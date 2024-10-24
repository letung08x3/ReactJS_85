import React from "react";
import { Container, Button } from "reactstrap";

function CreateButton({ handleClickCreateButton }) {
  const ClickCreateNewAccount = () => {
    handleClickCreateButton();
  };
  return (
    <Container>
      <br />
      <Button color="primary" onClick={ClickCreateNewAccount}>
        Create New Account
      </Button>
    </Container>
  );
}

export default CreateButton;
