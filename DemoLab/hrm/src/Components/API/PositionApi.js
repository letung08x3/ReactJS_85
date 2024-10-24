import { api } from "./api";

let getListPositionAPI = () => {
  return api("GET", "positions/", null);
};
export default getListPositionAPI;
