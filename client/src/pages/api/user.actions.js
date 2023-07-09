import { axiosService } from "./axios";

export const registerUser = async (payload) => {
  try {
    const response = await axiosService.post("/users/register", payload);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosService.post("/users/login", payload);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosService.post("/users/logout");
    return response.data;
  } catch (error) {
    console.error(error);
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const response = await axiosService.get("/users/current-user");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
