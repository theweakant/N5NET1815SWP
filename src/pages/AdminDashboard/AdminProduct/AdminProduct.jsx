import SideBar from "../../../components/SideBar/SideBar";
import { Button, DatePicker, Form, Image, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import "../../AdminDashboard/AdminPage.css";
import api from "../../../config/axios";

export default function AdminDiamond() {
  const [message, setMessage] = useState("");
  const [form] = useForm();
  const [diamonds, setDiamonds] = useState([]);
  const dateFormat = "DD/MM/YYYY";

  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await api.post("diamond", value);
      setMessage("Thêm sản phẩm thành công");
      setDiamonds([...diamonds, value]);
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
      title: "Image URL 1",
      dataIndex: "imgURL1",
      key: "imgURL1",
      render: (value) => <Image src={value} />,
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Import Date",
      dataIndex: "importDate",
      key: "importDate",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
    },
    {
      title: "Carat",
      dataIndex: "carat",
      key: "carat",
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
      title: "Cut",
      dataIndex: "cut",
      key: "cut",
    },
    {
      title: "Date of Issues",
      dataIndex: "dateOfIssues",
      key: "dateOfIssues",
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
        <h1>Thêm sản phẩm</h1>
        <Button type="primary" onClick={showModal}>
          Thêm
        </Button>
        <Table
          dataSource={diamonds}
          columns={columns}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
        <Modal
          className="modal-add-form"
          footer={false}
          title="Thêm sản phẩm kim cương"
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

            <Form.Item
              className="label-form"
              label="Image URL 2"
              name="imgURL2"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              className="label-form"
              label="Image URL 3"
              name="imgURL3"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              className="label-form"
              label="Image URL 4"
              name="imgURL4"
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              className="label-form"
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
              className="label-form"
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
              className="label-form"
              label="Mô Tả Sản Phẩm"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Nhập mô tả của sản phẩm",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              className="label-form"
              label="Thể loại"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Nhập thể loại của sản phẩm",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              className="label-form"
              label="kim loại"
              name="metal"
              rules={[
                {
                  required: true,
                  message: "Nhập kim loại của sản phẩm",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              className="label-form"
              label="Karat"
              name="metal"
              rules={[
                {
                  required: true,
                  message: "Nhập karat của sản phẩm",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>

            <Form.Item
              className="label-form"
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
              className="label-form"
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
              Thêm Sản Phẩm
            </Button>
            {message && <div>{message}</div>}
          </Form>
        </Modal>
      </div>
    </div>
  );
}
