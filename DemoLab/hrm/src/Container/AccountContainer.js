import { React, useState, useEffect } from "react";
import { Container } from "reactstrap";
import ResultForm from "../Components/Account/ResultForm";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import {
  addAccountNewAPI,
  getListAccountAPI,
} from "../Components/API/AccountApi";
import getListDepartmentAPI from "../Components/API/DepartmentApi";
import getListPositionAPI from "../Components/API/PositionApi";

function AccountContainer(props) {
  const [showForm, setShowForm] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [listDepartment, setListDepartment] = useState([]);
  const [listPosition, setListPosition] = useState([]);

  const handleClickCreateButton = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  let fetchListUser = () => {
    // const baseURL = `http://localhost:8080`; // Link địa chỉ Server
    // Axios.get(`${baseURL}/api/v1/users`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     let listUser_API = response.data; // ListDepartment nhân được khi Call API

    //     setListUser(listUser_API); // Set lại State
    //   })
    //   .catch((error) => console.log(error));
    getListAccountAPI().then((res) => {
      setListUser(res);
    });
  };

  let fetchListDepartment = () => {
    // const baseURL = `http://localhost:8080`; // Link địa chỉ Server
    // Axios.get(`${baseURL}/api/v1/departments`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     let listDepartment_API = response.data; // ListPosition nhân được khi Call API

    //     setListDepartment(listDepartment_API); // Set lại State
    //   })
    //   .catch((error) => console.log(error));
    getListDepartmentAPI().then((res) => {
      setListDepartment(res);
    });
  };

  let fetchListPosition = () => {
    // const baseURL = `http://localhost:8080`; // Link địa chỉ Server
    // Axios.get(`${baseURL}/api/v1/positions`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     let listPosition_API = response.data; // ListDepartment nhân được khi Call API

    //     setListPosition(listPosition_API); // Set lại State
    //   })
    //   .catch((error) => console.log(error));
    getListPositionAPI().then((res) => {
      setListPosition(res);
    });
  };

  const createNewAccount = (userNew) => {
    // // Kiểm tra xem có user nào với email trùng khớp không
    // let check = listUser.some((user) => user.Email === userNew.Email);
    // // console.log("check:", check);

    // if (check) {
    //   alert("Email đã được sử dụng!");
    //   return;
    // } else {
    //   listUser.push(userNew);
    //   setListUser(listUser);
    //   // Lưu dữ liệu vào LocalStorage
    //   localStorage.setItem("listUser", JSON.stringify(listUser));
    //   setShowForm(false);
    // }

    console.log("userNew:", userNew);

    // let userNew_API = {
    //   email: userNew.Email,
    //   username: userNew.Username,
    //   fullname: userNew.Fullname,
    //   departnameId: userNew.Department,
    //   positionId: userNew.Position,
    // };

    // console.log("userNew_API", userNew_API);
    // console.log("userNew.Email", userNew.Email);
    // console.log("userNew.Username", userNew.Username);
    // console.log("userNew.Fullname", userNew.Fullname);
    // console.log("userNew.Department.id", userNew.Department.id);
    // console.log("userNew.Position", userNew.Position);

    addAccountNewAPI(userNew).then((res) => {
      fetchListUser();
    });

    setShowForm(false);
  };

  const handleEditButton = (id) => {
    const userToEdit = listUser.find((user) => user.Id === id);
    // console.log("userToEdit:", userToEdit);

    if (userToEdit) {
      setShowForm(true);
    }
  };

  const handleDeleteButton = (id) => {
    const listUserUpdate = listUser.filter((user) => user.Id !== id);
    setListUser(listUserUpdate);
  };

  // useEffect(() => {
  //   if (localStorage && localStorage.getItem("listUser")) {
  //     let listUser_LocalStorage = JSON.parse(localStorage.getItem("listUser"));
  //     setListUser(listUser_LocalStorage);
  //   }
  // }, []);

  // Khai báo useEffect, useEffect này khi component được mount và mỗi khi State: listAccount thay đổi
  useEffect(() => {
    fetchListUser();
    fetchListDepartment();
    fetchListPosition();
  }, []);

  return (
    <Container>
      <CreateButton handleClickCreateButton={handleClickCreateButton} />
      <ModalCreateNewAccount
        handleCloseModal={handleCloseModal}
        showForm={showForm}
        createNewAccount={createNewAccount}
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
      <ResultForm
        listUser={listUser}
        handleEditButton={handleEditButton}
        handleDeleteButton={handleDeleteButton}
      />
    </Container>
  );
}

export default AccountContainer;
