console.log("--------Demo Redux--------");
// Giả lập có 1 số State: showForm, listAccounts ==> Quản lý và thay đổi các State bằng Redux.
// const { createStore } = require("redux");
import { createStore } from "redux";
// Bước 3: Khai báo các State cần quản lý
let intinalState = {
  showForm: false,
  listAccounts: [],
  //   ...
};

// Bước 2: Khai báo ra Reducer
let reducer = (state = intinalState, action) => {
  // Logic
  switch (action.type) {
    case "SHOW_INPUT_FORM":
      //
      return {
        ...state,
        showForm: true,
      };
    case "CLOSE_INPUT_FORM":
      //
      return {
        ...state,
        showForm: false,
      };
    case "ADD_ACCOUNT":
      // Lấy được Account cần thêm:
      let account_new = action.account;
      let listAccount_New = state.listAccounts;
      listAccount_New.push(account_new);
      return {
        ...state,
        listAccounts: listAccount_New,
      };
    // case value:
    default:
      return { ...state };
  }
};

// Bước 1: Tạo ra Store Redux
let storeRedux = createStore(reducer);

// Thay đổi các giá của State
// SHOW_INPUT_FORM  ==> showForm false ==> true
// Bước 4 Khai báo Action SHOW_INPUT_FORM
// Action trong Redux được thể hiện dưới dạng Object
let actionShowInputForm = {
  type: "SHOW_INPUT_FORM",
};

//
console.log("State showForm Ban đầu: ", storeRedux.getState());
storeRedux.dispatch(actionShowInputForm);
console.log(
  "State showForm trước sau khi Dispatch actionShowInputForm: ",
  storeRedux.getState()
);

// Action ẩn Input Form
let actionCloseInputForm = {
  type: "CLOSE_INPUT_FORM",
};

storeRedux.dispatch(actionCloseInputForm);
console.log(
  "State showForm sau khi Dispatch actionCloseInputForm: ",
  storeRedux.getState()
);

// Thêm mới Account
let account = {
  id: 1,
  username: "letung",
  fullname: "lê tùng 1",
};
// Action Thêm mới Account
let actionAddNewAccount1 = {
  type: "ADD_ACCOUNT",
  account: {
    id: 1,
    username: "letung",
    fullname: "lê tùng 1",
  },
};
storeRedux.dispatch(actionAddNewAccount1);
console.log(
  "State showForm sau khi Dispatch actionAddNewAccount1: ",
  storeRedux.getState()
);

let actionAddNewAccount2 = {
  type: "ADD_ACCOUNT",
  account: {
    id: 2,
    username: "letung2",
    fullname: "lê tùng 2",
  },
};
storeRedux.dispatch(actionAddNewAccount2);

console.log(
  "State showForm sau khi Dispatch actionAddNewAccount2: ",
  storeRedux.getState()
);
