import React, { useState } from "react";
import { Table, Container } from "reactstrap";
import ResultFormItem from "./ResultFormItem";
import ModalConfirmDelete from "./CreateNewAccount/ModalConfirmDelete";

function ResultForm({ listUser, handleEditButton, handleDeleteButton }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  return (
    <Container>
      <br></br>
      <h3>Danh sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Department</th>
            <th>Position</th>
            <th>Cretate Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem
            listUser={listUser}
            handleEditButton={handleEditButton}
            setIdToDelete={setIdToDelete}
            setShowConfirmDelete={setShowConfirmDelete}
          />
        </tbody>
      </Table>
      <ModalConfirmDelete
        showConfirmDelete={showConfirmDelete}
        handleDeleteButton={handleDeleteButton}
        setShowConfirmDelete={setShowConfirmDelete}
        idToDelete={idToDelete}
      />
    </Container>
  );
}

export default ResultForm;
