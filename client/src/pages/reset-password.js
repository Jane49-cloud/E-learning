import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import Input from "antd/lib/input/Input";
import { setLoader } from "@/Redux/LoaderSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onFinish = async () => {
    try {
      dispatch(setLoader(true));
      const response = await axios.post(
        "http://localhost:8000/users/reset-password",
        { email, code, password }
      );
      dispatch(setLoader(false));
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/login");
        console.log(response.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(setLoader(false));
    }
  };

  return (
    <div className="p-10">
      <div className="bg-white border p-5  flex flex-col align-center w-[500px]  mt-2 rounded-md">
        <Form onFinish={onFinish}>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-3">Reset password</h1>
            <p>
              Enter your Email below and check your email for a password reset
              link
            </p>
            <div className="m-2"></div>
            <Input
              required
              placeholder="Enter your email"
              value={email}
              name="email"
              className="height-[40px] m-2 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              required
              placeholder="Enter your code"
              value={code}
              name="code"
              className="height-[40px] m-2 rounded-md"
              onChange={(e) => setCode(e.target.value)}
            />
            <Input
              required
              placeholder="Enter a new password"
              value={password}
              name="password"
              className="height-[40px] m-2 rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-secondary-light text-white h-[40px] w-40 rounded  hover:bg-secondary-dark mt-3"
            type="submit"
          >
            <strong>Submit</strong>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
