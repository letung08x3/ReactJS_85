import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

function ModalConfirmDelete({
  setShowConfirmDelete,
  handleDeleteButton,
  showConfirmDelete,
  idToDelete,
}) {
  const clickConfirmDelete = () => {
    handleDeleteButton(idToDelete);
    setShowConfirmDelete(false);
  };

  const clickCancel = () => {
    setShowConfirmDelete(false);
  };
  return (
    <>
      <Container>
        <Modal isOpen={showConfirmDelete}>
          <ModalHeader>Xác Nhận</ModalHeader>
          <ModalBody>Bạn có muốn xóa user này không?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={clickConfirmDelete}>
              Xác nhận
            </Button>
            <Button color="secondary" onClick={clickCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
}

export default ModalConfirmDelete;
