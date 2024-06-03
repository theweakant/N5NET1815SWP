import SideBar from "../../../components/SideBar/SideBar";
import { Button, Col, DatePicker, Form, Image, Input, Modal, Row, Table } from "antd";
import { useEffect, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import "./AdminPage.css";
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Hãy Chọn Ngày",
    },
  ],
};
export default function AdminDiamond() {
  const [message, setMessage] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();
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

  async function fetchProduct() {
    const response = await api.get("diamond");
    setDiamonds(response.data);
  }

  useEffect(() => {
    fetchProduct()
  }, [])

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
        <h1>Thêm Viên Kim Cương</h1>
        <Button type="primary" onClick={showModal}>
          Thêm
        </Button>
        <Table dataSource={diamonds} columns={columns} />
        <Modal footer={false} title="Thêm sản phẩm kim cương" okText={""} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            form={form}
            onFinish={handleSubmit}
            id="form"
            className="form-main"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Mã Số GIA"
                  name="giaReportNumber"
                  style={{
                    maxWidth: 'none'
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Nhập mã số GIA",
                    },
                  ]}
                >
                  <Input type="number" required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                
                  labelCol={{ span: 6 }} style={{
                    maxWidth: 'none'
                  }} label="Image URL 1"
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
              </Col>
            </Row>
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
      </div>
    </div>
  );
}
