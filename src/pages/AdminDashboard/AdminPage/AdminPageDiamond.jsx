import SideBar from "../../../components/SideBar/SideBar";
import { Button, Form, Image, Input, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import "../../AdminDashboard/AdminPage.css";
import api from "../../../config/axios";

export default function AdminDiamond() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  const [form] = useForm();
  const [material, setMaterial] = useState([]);

  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await api.post("material", value);
      setMessage("Thêm kim cương thành công");
      setMaterial([...material, value]);
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm kim cương");
      console.log(error.response.data);
    }
  }

  async function handleSubmit2(value) {
    console.log(value);
    try {
      await api.post("material", value);
      setMessage2("Thêm vỏ kim cương thành công");
      setMaterial([...material, value]);
    } catch (error) {
      setMessage2("Đã có lỗi trong lúc thêm vỏ kim cương");
      console.log(error.response.data);
    }
  }

  async function fetchProduct() {
    const response = await api.get("material");
    setMaterial(response.data);
  }

  async function deleteProduct(id) {
    console.log(id);
    try {
      await api.delete("diamond/id");
      // setMessage("Thêm sản phẩm thành công");
      setMaterial([...material, id]);
    } catch (error) {
      // setMessage("Đã có lỗi trong lúc thêm sản phẩm");
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
      title: "GIA Report Number",
      dataIndex: "giaReportNumber",
      key: "giaReportNumber",
    },
    {
      title: "Image URL ",
      dataIndex: "imgURL",
      key: "imgURL",
      render: (value) => <Image src={value} />,
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },

    {
      title: "Clarity",
      dataIndex: "clarity",
      key: "clarity",
    },
    {
      title: "Carat",
      dataIndex: "carat",
      key: "carat",
    },
    {
      title: "Cut",
      dataIndex: "cut",
      key: "cut",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "quantityOfSub",
      dataIndex: "quantityOfSub",
      key: "quantityOfSub",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
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
          <Button onClick={deleteProduct}>xóa</Button>
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

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  return (
    <div className="Admin">
      <SideBar></SideBar>

      <div className="admin-content">
        <h1>Thêm Viên Kim Cương</h1>
        <div className="admin-add-button">
          <Button type="primary" onClick={showModal}>
            Thêm Kim Cương
          </Button>
          <Button type="primary" onClick={showModal2}>
            Thêm Vỏ Kim Cương
          </Button>
        </div>
        <Table
          dataSource={material}
          columns={columns}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
        <Modal
          className="modal-add-form"
          footer={false}
          title="Thêm kim cương"
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
              label="Giá"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Nhập giá của kim cương",
                },
              ]}
            >
              <Input type="number" required />
            </Form.Item>

            <Form.Item
              className="label-form"
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
              className="label-form"
              label="Size"
              name="size"
              rules={[
                {
                  required: true,
                  message: "Nhập size",
                },
              ]}
            >
              <Input type="number" required />
            </Form.Item>

            <Form.Item
              className="label-form"
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
              className="label-form"
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
              className="label-form"
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
              className="label-form"
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
            <Button onClick={hanldeClickSubmit} className="form-button">
              Thêm Viên Kim Cương
            </Button>
            {message && <div>{message}</div>}
          </Form>
        </Modal>

        <Modal
          className="modal-add-form"
          footer={false}
          title="Thêm vỏ kim cương"
          okText={""}
          open={isModalOpen2}
          onOk={handleOk2}
          onCancel={handleCancel2}
        >
          <Form
            form={form}
            onFinish={handleSubmit2}
            id="form"
            className="form-main"
          >
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
              label="Tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Nhập tên vỏ kim cương",
                },
              ]}
            >
              <Input type="text" required />
            </Form.Item>

            {/* <Form.Item
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
              <Input type="text" required />
            </Form.Item> */}
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
              label="Nặng"
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Nhập weight ",
                },
              ]}
            >
              <Input type="text" required />
            </Form.Item>
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
              <Input type="text" required />
            </Form.Item>
            <Form.Item
              className="label-form"
              label="số lượng"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Nhập số lượng ",
                },
              ]}
            >
              <Input type="text" required />
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
            <Button onClick={hanldeClickSubmit} className="form-button">
              Thêm Vỏ Kim Cương
            </Button>
            {message2 && <div>{message2}</div>}
          </Form>
        </Modal>
      </div>
    </div>
  );
}
