import Link from "next/link";
import { Dashboard } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-start bg-gray-900 p-3 ">
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"></div>

      <Link href="/user">
        <p className="flex items-center text-white text-xl font-bold mb-6">
          <Dashboard className="mr-2" />
          Dashboard
        </p>
      </Link>
      <Link href="/user">
        <p className="flex items-center text-white text-xl font-bold mb-6">
          <Dashboard className="mr-2" />
          Dashboard
        </p>
      </Link>
      <Link href="/user">
        <p className="flex items-center text-white text-xl font-bold mb-6">
          <Dashboard className="mr-2" />
          Dashboard
        </p>
      </Link>
      <Link href="/user">
        <p className="flex items-center text-white text-xl font-bold mb-6">
          <Dashboard className="mr-2" />
          Dashboard
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
