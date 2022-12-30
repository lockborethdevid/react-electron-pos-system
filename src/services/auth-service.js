import axios from "axios";

const API_URL = "https://pos-api-three.vercel.app/auth";

export const Signup = (
  username,
  email,
  password,
  phoneNumber,
  storeLocation,
  storeName
) => {
  return axios
    .post(
      API_URL + "/signup",
      {
        username,
        email,
        password,
        phoneNumber,
        storeLocation,
        storeName,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
    .then((response) => {
      return response;
    });
};

export const Signin = (email, password) => {
  return axios
    .post(
      API_URL + "/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};

// const authService = {
//   signup,
// };

// export default authService;
