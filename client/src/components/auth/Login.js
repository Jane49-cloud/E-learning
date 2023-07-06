import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { loginUser } from "@/pages/api/user.actions";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    try {
      const response = await loginUser(formData);
      if (response.success) {
        toast.success(response.message);
        console.log(response);
        window.location.href = "/";
      } else {
        toast.error(response.message);
      }
      console.log(response.message); // Log the message property
      return response.data;
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 shadow">
      <div className="bg-white w-[450px] rounded pb-5">
        <div
          className="h-[60px] bg-secondary flex justify-center items-center"
          style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
        >
          <h1 className="text-center text-gray-50">E-Learner - Login</h1>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col p-3">
          <br />
          <TextField
            label="Email"
            name="email"
            className="rounded mt-2"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <br />
          <TextField
            label="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className="rounded mt-2"
            autoComplete="off"
          />
          <br />
          <button
            className="bg-secondary-light text-white h-[40px] rounded  hover:bg-secondary-dark "
            type="submit"
          >
            <strong>Login</strong>
          </button>
          <p className="mt-4 text-center">
            Forgot password?{" "}
            <Link href="#" className="text-blue-500 underline">
              Reset Password{" "}
            </Link>
          </p>
          <p className="mt-4 text-center">
            Do not have an account?{" "}
            <Link href="/register" className="text-blue-500 underline">
              Register{" "}
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
