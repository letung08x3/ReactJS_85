console.log("-------------demo redux----------");

import { createStore } from "redux";
// bước 3: khai báo các state cần quản lý
let initnalState = {
  showForm: false,
  listAccounts: [],
  //....
};

// bước 2: khai báo redux
let reducer = (state = initnalState, action) => {
  // logic
  switch (action.type) {
  }
};

// bước 1: tạo ra Store Redux
let storeRedux = createStore(reducer);

let actionShowInputForm = {
  type: "SHOW_INPUT_FORM",
};

console.log("State trước khi thay đổi:", storeRedux.getState());

storeRedux.dispatch(actionShowInputForm);
console.log("State sau khi thay đổi:", storeRedux.getState());
