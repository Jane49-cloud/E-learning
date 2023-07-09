import React from "react";
import { useSelector } from "react-redux";
const Loader = () => {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && (
        <div className="fixed inset-0  flex items-center bg-black z-[9999] justify-center h-screen opacity-80">
          <div className="animate-spin rounded-full border-t-4 border-b-4  border-secondary h-12 w-12 "></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
