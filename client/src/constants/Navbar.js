import Menu from "antd/lib/menu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "@/Redux/LoaderSlice";
import { logoutUser } from "@/pages/api/user.actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.users);

  const logout = async () => {
    try {
      dispatch(setLoader(true));
      localStorage.removeItem("token");
      const response = await logoutUser();
      dispatch(setLoader(false));
      if (response?.success) {
        toast.success(response.message);
        router.push("/login");
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(setLoader(false));
    }
  };

  return (
    <>
      <Menu mode="horizontal" style={{ fontSize: "16px" }}>
        <div className="flex justify-between">
          <div>
            <Menu.Item key="logo">
              <Link href="/">
                <span className="navbar-logo">Logo</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="courses">
              <Link href="/courses">
                <span>Courses</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link href="/about">
                <span>About</span>
              </Link>
            </Menu.Item>
          </div>
          {user === null ? (
            <div>
              <Menu.Item key="login">
                <Link href="/login">
                  <span>Login</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link href="/register">
                  <span>Register</span>
                </Link>
              </Menu.Item>
            </div>
          ) : (
            <div>
              <Menu.Item>
                <Link href="#" onClick={logout} className="float-right">
                  <span>{user?.name}</span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="#" onClick={logout} className="float-right">
                  <span>Logout</span>
                </Link>
              </Menu.Item>
            </div>
          )}
        </div>
      </Menu>
      <ToastContainer />
    </>
  );
};

export default Navbar;
