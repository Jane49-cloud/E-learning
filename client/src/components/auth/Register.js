import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Link from "next/link";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { registerUser } from "@/pages/api/user.actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    try {
      const response = await registerUser(formData);
      if (response.success) {
        toast.success(response.message);
        // navigate("/login");
        console.log(formData, response);
      } else {
        toast.error(response.message);
      }
      console.log(response);
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
          <h1 className="text-center text-gray-50">E-Learner - Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col p-3">
          <br />{" "}
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          {/* <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="rounded mt-2"
            required
          /> */}
          {/* <br /> */}
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded mt-2"
            required
          />
          <br />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className="rounded mt-2"
            required
          />
          <br />
          <button
            className="bg-secondary-light text-white h-[40px] rounded  hover:bg-secondary-dark "
            type="submit"
          >
            <strong>Register</strong>
          </button>
          <p className="mt-4 text-center ">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
