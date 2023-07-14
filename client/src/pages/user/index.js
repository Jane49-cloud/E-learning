import React from "react";
import ProtectedRoutes from "../protected.routes";
import Sidebar from "@/constants/sidebar";

const Users = () => {
  return (
    <ProtectedRoutes>
      <div>This is my dashbord</div>
    </ProtectedRoutes>
  );
};

export default Users;
