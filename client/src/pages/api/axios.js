import axios from "axios";

export const axiosService = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("token") : ""
    }`,
  },
});
