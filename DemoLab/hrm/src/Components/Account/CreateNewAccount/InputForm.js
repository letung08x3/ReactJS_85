import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { generateId } from "../../../Utils/Helpers/generateId";
import { getNowDate } from "../../../Utils/Helpers/getNowDate";

function InputForm({ createNewAccount, listDepartment, listPosition }) {
  const [inputUser, setInputUser] = useState({
    Id: generateId(),
    Email: "",
    Username: "",
    Fullname: "",
    Department: listDepartment[0]?.id || "", // Lấy id đầu tiên của listDepartment
    Position: listPosition[0]?.id || "", // Lấy id đầu tiên của listPosition
    CreateDate: getNowDate(),
  });

  let positionItem = listPosition.map((item, index) => {
    return (
      <option value={item.id} key={index}>
        {item.name}
      </option>
    );
  });

  let departmentItem = listDepartment.map((item, index) => {
    return (
      <option value={item.id} key={index}>
        {item.name}
      </option>
    );
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    let userNew = {
      email: inputUser.Email,
      username: inputUser.Username,
      fullname: inputUser.Fullname,
      departnameId: inputUser.Department,
      positionId: inputUser.Position,
    };
    createNewAccount(userNew);
  };

  const handleReset = () => {
    setInputUser({
      Email: "",
      Username: "",
      Fullname: "",
      Department: "",
      Position: "",
    });
  };
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            id="Email"
            name="Email"
            placeholder="Input Email"
            type="email"
            value={inputUser.Email}
            onChange={handleInputChange}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={inputUser.Username}
            onChange={handleInputChange}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={inputUser.Fullname}
            onChange={handleInputChange}
            required={true}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            value={inputUser.Department}
            onChange={handleInputChange}
          >
            {departmentItem}
            {/* <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option> */}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input
            id="Position"
            name="Position"
            type="select"
            value={inputUser.Position}
            onChange={handleInputChange}
          >
            {positionItem}
            {/* <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option> */}
          </Input>
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger" onClick={handleReset}>
        Reset
      </Button>
    </Container>
  );
}

export default InputForm;
