import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNewAccount({
  showForm,
  handleCloseModal,
  createNewAccount,
  listDepartment,
  listPosition
}) {
  return (
    <Container>
      <br></br>

      <Modal isOpen={showForm}>
        <ModalHeader>Create New Account</ModalHeader>
        <ModalBody>
          <InputForm createNewAccount={createNewAccount} 
           listDepartment={listDepartment}
           listPosition={listPosition}/>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
