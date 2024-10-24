import { api } from "./api";

let getListAccountAPI = () => {
  return api("GET", "users/", null);
};

let addAccountNewAPI = (newAccount) => {
  return api("POST", "users/", newAccount);
};

let deleteAccountAPI = (id) => {
  let url = "users/" + id;
  return api("DELETE", url, null);
};

let updateAccountAPI = (accountUpdate) => {
  let url = "users/" + accountUpdate.id;
  return api("PUT", url, accountUpdate);
};
export {
  getListAccountAPI,
  addAccountNewAPI,
  deleteAccountAPI,
  updateAccountAPI,
};
