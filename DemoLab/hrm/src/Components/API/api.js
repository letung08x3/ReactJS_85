import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
});

export const api = async (method, endpoint, payload) => {
  try {
    const response = await axiosClient(endpoint, {
      method: method,
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const api = (method, endpoint, payload) => {
//   return axiosClient(endpoint, { method: method, data: payload })
//     .then((response) => {
//       //   console.log("api");
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
