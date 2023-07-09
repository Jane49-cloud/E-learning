import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/Redux/UserSlice";
import { setLoader } from "@/Redux/LoaderSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "./api/user.actions";
import Navbar from "@/constants/Navbar";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await getUser();
      dispatch(setLoader(false));
      if (response.success) {
        dispatch(setUser(response.data));
        // toast.success(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error.message);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    user && (
      <div>
        {children}
        <ToastContainer />
      </div>
    )
  );
};

export default ProtectedRoutes;
