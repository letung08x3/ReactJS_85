import React from "react";
import { Button } from "reactstrap";

function ResultFormItem({
  listUser,
  handleEditButton,
  setIdToDelete,
  setShowConfirmDelete,
}) {
  let items = "";

  const clickDeleteButton = (id) => {
    setIdToDelete(id);
    setShowConfirmDelete(true);
  };

  const handleEditUser = (id) => {
    handleEditButton(id);
  };
  // kiểm tra xem listUser !== "" thì hiển thị dữ liệu
  if (listUser !== "") {
    items = listUser.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.username}</td>
          <td>{item.fullname}</td>
          <td>{item.department}</td>
          <td>{item.position}</td>
          <td>{item.createDate}</td>
          <td>
            <Button color="warning" onClick={() => handleEditUser(item.Id)}>
              Edit
            </Button>
          </td>
          <td>
            <Button color="danger" onClick={() => clickDeleteButton(item.Id)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }

  return items;
}

export default ResultFormItem;
