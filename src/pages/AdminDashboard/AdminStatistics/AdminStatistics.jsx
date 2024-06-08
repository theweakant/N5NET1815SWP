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
export default function AdminStatistics() {
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

    </div>
  );
}