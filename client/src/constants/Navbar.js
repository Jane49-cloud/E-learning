import Menu from "antd/lib/menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <Menu mode="horizontal" className="navbar-menu">
      <div className="flex justify-between">
        <div>
          <Menu.Item key="logo">
            <Link href="/">
              <h1 className="navbar-logo">Logo</h1>
            </Link>
          </Menu.Item>
          <Menu.Item key="courses">
            <Link href="/courses">
              <h1>Courses</h1>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/about">
              <h1>About</h1>
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="/contact">
              <h1>Contact</h1>
            </Link>
          </Menu.Item>
        </div>
        <div className="">
          <Menu.Item key="about">
            <Link href="/about">
              <h1>Login</h1>
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="/contact">
              <h1>Register</h1>
            </Link>
          </Menu.Item>
        </div>
      </div>
    </Menu>
  );
};

export default Navbar;
