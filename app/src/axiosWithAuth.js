import axios from "axios";


export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://chaqar-data.herokuapp.com",
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token"))
    }
  });
};