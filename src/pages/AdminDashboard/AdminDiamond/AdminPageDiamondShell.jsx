import SideBar from "../../../components/SideBar/SideBar";
import { Button, Form, Image, Input, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import "../../AdminDashboard/AdminPage.css";
import api from "../../../config/axios";

export default function AdminDiamondShell() {
  const [message, setMessage] = useState("");
  const [deleteMessage, setdeleteMessage] = useState("");
  const [form] = useForm();
  const [diamondshell, setDiamondshell] = useState([]);

  function hanldeClickSubmit() {
    form.submit();
  }
  async function handleSubmit(value) {
    console.log(value);
    try {
      await api.post("material", value);
      setMessage("Thêm vỏ kim cương thành công");
      setDiamondshell([...diamondshell, value]);
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm vỏ kim cương");
      console.log(error.response.data);
    }
  }

  async function fetchProduct() {
    const response = await api.get("material");
    setDiamondshell(response.data);
  }

  async function deleteProduct(id) {
    console.log(id);
    try {
      await api.delete(`diamond//${id}`);
      setdeleteMessage("Xóa thành công");
      setDiamondshell(
        diamondshell.filter((gem) => {
          return gem.id !== id;
        })
      );
    } catch (error) {
      setdeleteMessage("Đã có lỗi trong lúc Xóa");
      console.log(error.response.data);
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
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Image URL ",
      dataIndex: "imgURL",
      key: "imgURL",
      render: (value) => <Image src={value} />,
    },
    {
      title: "Metal",
      dataIndex: "metal",
      key: "metal",
    },

    {
      title: "Karat",
      dataIndex: "karat",
      key: "karat",
    },
    {
      title: "typeOfSub",
      dataIndex: "typeOfSub",
      key: "typeOfSub",
    },
    {
      title: "weightOfSub",
      dataIndex: "weightOfSub",
      key: "weightOfSub",
    },
    {
      title: "quantityOfSub",
      dataIndex: "quantityOfSub",
      key: "quantityOfSub",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hành Động",
      render: () => (
        <Space size="middle">
          <Button onClick={hanldeClickSubmit}>Xóa</Button>
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
        <h1>Thêm Vỏ Kim Cương</h1>

        <Form
          form={form}
          onFinish={handleSubmit}
          id="form"
          className="form-main"
        >
          <div className="form-content-main">
            <div className="form-content">
              <Form.Item
                className="label-form"
                label="Kim Loại"
                name="metal"
                rules={[
                  {
                    required: true,
                    message: "Nhập kim loại",
                  },
                ]}
              >
                <Input type="text" required />
              </Form.Item>

              <Form.Item
                className="label-form"
                label="karat"
                name="karat"
                rules={[
                  {
                    required: true,
                    message: "Nhập karat ",
                  },
                ]}
              >
                <Input type="text" required />
              </Form.Item>
              <Form.Item
                className="label-form"
                label="Loại Đá phụ"
                name="typeOfSub"
                rules={[
                  {
                    required: true,
                    message: "Nhập loại đá phụ",
                  },
                ]}
              >
                <Input type="text" required />
              </Form.Item>
              <Form.Item
                className="label-form"
                label="Nặng"
                name="weightOfSub"
                rules={[
                  {
                    required: true,
                    message: "Nhập weightOfSub ",
                  },
                ]}
              >
                <Input type="number" required />
              </Form.Item>
            </div>
            <div className="form-content">
              <Form.Item
                className="label-form"
                label="quantityOfSub"
                name="quantityOfSub"
                rules={[
                  {
                    required: true,
                    message: "Nhập quantityOfSub",
                  },
                ]}
              >
                <Input type="number" required />
              </Form.Item>

              <Form.Item
                className="label-form"
                label="Giá"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Nhập giá ",
                  },
                ]}
              >
                <Input type="text" required />
              </Form.Item>

              <Form.Item
                className="label-form"
                label="Image URL "
                name="imgURL"
                rules={[
                  {
                    required: true,
                    message: "Nhập đường dẫn hình ảnh",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>

              <Form.Item
                className="label-form"
                label="Loại"
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Nhập loại",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </div>
          </div>

          <Button onClick={hanldeClickSubmit} className="form-button">
            Thêm Vỏ Kim Cương
          </Button>
          {message && <div>{message}</div>}
        </Form>

        <div className="data-table">
          <h1>Quản Lý Vỏ Kim Cương</h1>
          <Table
            dataSource={diamondshell}
            columns={columns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
}
