import SideBar from "../../../components/SideBar/SideBar";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import "../../AdminDashboard/AdminPage.css";
import api from "../../../config/axios";

export default function AdminCategory() {
  const [message, setMessage] = useState("");
  const [form] = useForm();
  const [category, setCategory] = useState([]);

  function hanldeClickSubmit() {
    form.submit();
  }

  function hanldeDeleteSubmit(id) {
    form.submit();
    (e) => this.deleteRow(category.id, e);
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await api.post("category", value);
      setMessage("Thêm danh mục thành công");
      setCategory([...category, value]);
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm danh mục");
      console.log(error.response.data);
    }
  }

  async function fetchProduct() {
    const response = await api.get("category");
    setCategory(response.data);
  }

  async function deleteProduct(id, value) {
    console.log(id);
    try {
      await api.delete(`category/${id}`);
      // setMessage("Thêm sản phẩm thành công");
    } catch (error) {
      // setMessage("Đã có lỗi trong lúc thêm sản phẩm");
      // console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Danh Mục",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô Tả Danh Mục",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hành Động",
      render: (_, record) => (
        <Space size="middle">
          <Form
            form={form}
            onFinish={deleteProduct}
            id="form"
            className="form-main"
          >
            <Button onClick={hanldeDeleteSubmit()}>Delete</Button>
          </Form>
        </Space>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="Admin">
      <SideBar></SideBar>

      <div className="admin-content">
        <h1>Thêm Danh Mục</h1>
        <Button type="primary" onClick={showModal}>
          Thêm
        </Button>
        <Table
          dataSource={category}
          columns={columns}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
        <Modal
          className="modal-add-form"
          footer={false}
          title="Thêm Danh Mục"
          okText={""}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            id="form"
            className="form-main"
          >
            <Form.Item
              className="label-form"
              label="Tên Danh Mục"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Nhập tên danh mục",
                },
              ]}
            >
              <Input type="text" required />
            </Form.Item>

            <Form.Item
              className="label-form"
              label="Mô tả danh mục"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Nhập vào Mô tả danh mục",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>

            <Button onClick={hanldeClickSubmit} className="form-button">
              Thêm Danh Mục
            </Button>
            {message && <div>{message}</div>}
          </Form>
        </Modal>
      </div>
    </div>
  );
}
