import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 shadow">
      <div className="w-[450px] border p-5 centered rounded-lg">
        <Form>
          <label htmlFor="email" className="block ml-2 ">
            Email
          </label>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            className="mb-4"
          >
            <Input id="email" type="text" className="h-12 my-3" />
          </Form.Item>

          <label htmlFor="password" className="block ">
            Password
          </label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
            className="mb-4"
          >
            <Input id="password" type="password" className="h-12 my-3" />
          </Form.Item>

          <button
            className="bg-orange-500 text-white h-[48px] w-full rounded-lg hover:bg-orange-600 transition-colors duration-200"
            type="submit"
          >
            <strong>Login</strong>
          </button>
          <p className="mt-4 text-center h-[16px] flex items-center justify-center">
            Forgot password?{" "}
            <Link href="#" className="text-orange-500 underline">
              Reset Password
            </Link>
          </p>
          <p className="mt-4 text-center h-[16px] flex items-center justify-center">
            Do not have an account?{" "}
            <Link href="/register" className="text-orange-500 underline">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
