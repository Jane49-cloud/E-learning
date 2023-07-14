import React from "react";
import ProtectedRoutes from "@/pages/protected.routes";
import Input from "antd/lib/input/Input";
import TextArea from "antd/lib/input/TextArea";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Select from "antd/lib/select";

const NewCourse = () => {
  return (
    <ProtectedRoutes>
      <div className="bg-white rounded-md">
        <div className="h-[60px] flex justify-center items-center bg-secondary-dark h-[50px] ">
          <h1 className="text-white text-2xl">Create course</h1>
        </div>
        <form className="p-10">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Course Name *
          </label>
          <Input placeholder="Course title" name="name" required />
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description *
          </label>
          <TextArea
            placeholder="Course description"
            name="description"
            required
          />
          <label
            htmlFor="coverPhoto"
            className="block text-gray-700 font-bold mb-2"
          >
            Add cover photo *
          </label>
          <Input
            placeholder="Course price"
            type="file"
            name="coverPhoto"
            required
          />
          <Row gutter={16}>
            <Col>
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price *
              </label>
              <Input type="number" name="price" required />
            </Col>
            <Col>
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Select category *
              </label>
              <Select name="category" className="h-10 w-20 " required>
                <option value="electronics">Electronics</option>
                <option value="home">Home</option>
                <option value="fashion">Fashion</option>
                <option value="sports">Sports</option>
              </Select>
            </Col>
          </Row>

          <button
            className="bg-secondary-light text-white h-[40px] w-40 rounded  hover:bg-secondary-dark mt-3"
            type="submit"
          >
            <strong>create</strong>
          </button>
        </form>
      </div>
    </ProtectedRoutes>
  );
};

export default NewCourse;
