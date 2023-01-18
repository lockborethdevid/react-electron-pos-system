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

export const deleteCategory = async (token, id) => {
  return await axios
    .delete(API_URL + `/store/category/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response;
    });
};

export const editCategory = async (token, id, category) => {
  return await axios
    .put(
      API_URL + `/store/category/${id}`,
      {
        categories: category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    });
};

// product handle 

export const addProduct = async (token, formData) => {
  // const { categoryId, productName, quantity, price } = dataForm
  console.log([...formData]);
  for (let item of formData) {
    console.log(item);
  }
  return await axios
    .post(
      API_URL + "/store/product",
      { ...formData },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
}