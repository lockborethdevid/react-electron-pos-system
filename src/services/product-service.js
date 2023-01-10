import axios from "axios";

const API_URL = "https://pos-api-three.vercel.app";

export const addCategory = async (category, token) => {
  return await axios
    .post(
      API_URL + "/category",
      {
        categories: category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
    .then((response) => {
      return response;
    });
};

export const getCategory = async (token) => {
  return await axios
    .get(API_URL + "/store/category", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response;
    });
};
