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
