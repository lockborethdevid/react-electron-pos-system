import axios from "axios";

const API_URL = "https://pos-api-three.vercel.app/auth";

export const Signup = async (
  username,
  email,
  password,
  phoneNumber,
  storeLocation,
  storeName
) => {
  return await axios
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
      if (response.data.results) {
        localStorage.setItem("user", response.data.results);
      }
      return response;
    });
};

export const Signin = async (email, password) => {
  return await axios
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
      // if (response.data.results) {
      //   localStorage.setItem("user", response.data.results);
      // }
      return response;
    });
};

export const logout = async (token) => {
  return await axios
    .delete(API_URL + "/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
    .then((response) => {
      return response;
    });
};

// const authService = {
//   signup,
// };

// export default authService;
