import SideBar from "../../../components/SideBar/SideBar";
import { Button, DatePicker, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import "./AdminPage.css";
import { routes } from "../../../routes";

export default function AdminDiamond() {
  const [message, setMessage] = useState("");
  const [form] = useForm();
  const dateFormat = "DD/MM/YYYY";
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await axios.post("http://157.245.145.162:8080/api/diamond", value);
      setMessage("Thêm sản phẩm thành công");
      navigate(routes.adminDiamond);
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm sản phẩm");
      console.log(error.response.data);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://157.245.145.162:8080/api/diamond"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {fetchData();} ,[]) {
  //   const response = axios
  //     .get("http://157.245.145.162:8080/api/diamond")
  //     .then((res) => setData(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="Admin">
      <SideBar></SideBar>

      <div className="admin-content">
        <h1>Thêm Viên Kim Cương</h1>

        <Form
          form={form}
          onFinish={handleSubmit}
          id="form"
          className="form-main"
        >
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
                message: "Nhập mô tả kim cương",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Giá Nhập"
            name="cost"
            rules={[
              {
                required: true,
                message: "Nhập giá nhập của kim cương",
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
                message: "Nhập giá bán của kim cương",
              },
            ]}
          >
            <Input type="number" required />
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

          <Button onClick={hanldeClickSubmit} className="form-button">
            Thêm Viên Kim Cương
          </Button>
          {message && <div>{message}</div>}
        </Form>

        <ul className="diamond-product">
          <h1>Sản Phẩm kim Cương</h1>
          {data.map((gem) => (
            <li key={gem.id}>
              <p>giaReportNumber: {gem.giaReportNumber}</p>
              <p>imgURL1: {gem.imgURL1}</p>
              <p>imgURL2: {gem.imgURL2}</p>
              <p>imgURL3: {gem.imgURL3}</p>
              <p>imgURL4: {gem.imgURL4}</p>
              <p>cost: {gem.cost}</p>
              <p>price: {gem.price}</p>
              <p>importDate: {gem.importDate}</p>
              <p>shape: {gem.shape}</p>
              <p>carat: {gem.carat}</p>
              <p>color: {gem.color}</p>
              <p>clarity: {gem.clarity}</p>
              <p>cut: {gem.cut}</p>
              <p>dateOfIssues: {gem.dateOfIssues}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
