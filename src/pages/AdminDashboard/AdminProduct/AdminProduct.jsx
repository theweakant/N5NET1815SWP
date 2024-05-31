import SideBar from "../../../components/SideBar/SideBar";
import { Button, DatePicker, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import "../AdminPage/AdminPage.css";
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Hãy Chọn Ngày",
    },
  ],
};
export default function AdminProduct() {
  const [message, setMessage] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();
  const dateFormat = "DD/MM/YYYY";

  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await axios.post("http://157.245.145.162:8080/api/product", value);
      setMessage("Thêm sản phẩm thành công");
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm sản phẩm");
      console.log(error.response.data);
    }
  }

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="Admin">
      <SideBar></SideBar>

      <div className="admin-content">
        <h1>Thêm Sản Phẩm</h1>

        <Form
          form={form}
          onFinish={handleSubmit}
          id="form"
          className="form-main"
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[
              {
                required: true,
                message: "Nhập Tên sản phẩm",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Image URL 1"
            name="imgURL1"
            rules={[
              {
                required: true,
                message: "Nhập hình ảnh",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Image URL 2" name="imgURL2">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Image URL 3" name="imgURL3">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Image URL 4" name="imgURL4">
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Nhập mô tả sản phẩm",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Loại Sản phẩm"
            name="categoryID"
            rules={[
              {
                required: true,
                message: "Nhập loại sản phẩm",
              },
            ]}
          >
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            name="importDate"
            label="Ngày Nhập"
            rules={[{ required: true, message: "Chọn ngày nhập" }]}
          >
            <DatePicker
              placeholder="Ngày Nhập"
              style={{ width: "100%" }}
              format={dateFormat}
            />
          </Form.Item>

          <Form.Item
            label="Mã Số GIA"
            name="giaReportNumber"
            rules={[
              {
                required: true,
                message: "Nhập mã số GIA",
              },
            ]}
          >
            <Input type="number" required />
          </Form.Item>
          <Form.Item
            label="Hình dáng"
            name="shape"
            rules={[
              {
                required: true,
                message: "Nhập hình dáng",
              },
            ]}
          >
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            label="Carat"
            name="carat"
            rules={[
              {
                required: true,
                message: "Nhập carat",
              },
            ]}
          >
            <Input type="number" required />
          </Form.Item>
          <Form.Item
            label="Màu sắc"
            name="color"
            rules={[
              {
                required: true,
                message: "Nhập màu sắc ",
              },
            ]}
          >
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            label="Độ Tinh Khiết"
            name="clarity"
            rules={[
              {
                required: true,
                message: "Nhập độ tinh khiết ",
              },
            ]}
          >
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            label="Độ Cắt"
            name="cut"
            rules={[
              {
                required: true,
                message: "Nhập độ cắt ",
              },
            ]}
          >
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            name="dateOfIssues"
            label="Ngày Cấp GIA"
            rules={[{ required: true, message: "Chọn ngày cấp GIA" }]}
          >
            <DatePicker
              placeholder="Ngày Cấp GIA"
              style={{ width: "100%" }}
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item
            label="Giá Nhập"
            name="cost"
            rules={[
              {
                required: true,
                message: "Nhập giá nhập của sản phẩm",
              },
            ]}
          >
            <Input type="number" required />
          </Form.Item>
          <Form.Item
            label="Giá Bán"
            name="price"
            rules={[
              {
                required: true,
                message: "Nhập giá bán của sản phẩm",
              },
            ]}
          >
            <Input type="number" required />
          </Form.Item>

          <Button onClick={hanldeClickSubmit} className="form-button">
            Thêm Sản Phẩm
          </Button>
          {message && <div>{message}</div>}
        </Form>
      </div>
    </div>
  );
}
