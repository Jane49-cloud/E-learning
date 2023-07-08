import Menu from "antd/lib/menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <Menu mode="horizontal" className="navbar-menu">
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
          <Menu.Item key="contact">
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </Menu.Item>
        </div>
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
      </div>
    </Menu>
  );
};

export default Navbar;
