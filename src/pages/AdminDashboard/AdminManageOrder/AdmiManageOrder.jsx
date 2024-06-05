import SideBar from "../../../components/SideBar/SideBar";
import { Button, Col, DatePicker, Form, Image, Input, Modal, Popover, Row, Table, Tooltip, Upload } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import "./AdminManageOrder.css";
import api from "../../../config/axios";
import { UploadOutlined } from "@ant-design/icons";

export default function AdminDiamond() {
  const [message, setMessage] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();
  const [diamonds, setDiamonds] = useState([])
  const dateFormat = "DD/MM/YYYY";

  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await await api.get("diamond"); +
        setMessage("Thêm sản phẩm thành công");
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm sản phẩm");
      console.log(error.response.data);
    }
  }

  async function fetchProduct() {
    const response = await api.get("diamond");
    setDiamonds(response.data);
  }

  // useEffect(() => {
  //   fetchProduct()
  // }, [])

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const columns = [
    {
      title: 'ID đơn hàng',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
    },
    {
      title: 'ID khách hàng',
      dataIndex: 'giaReportNumber',
      key: 'giaReportNumber',
      fixed: 'left',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'imgURL1',
      key: 'imgURL1',
      render: (value) => <Image src={value} />
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: 'Ngày đặt hàng',
      dataIndex: 'importDate',
      key: 'importDate',
      render: (date) => (
        <Tooltip title={date}>
          <span>{date}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'price',
      key: 'price',
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
        <h1>Thêm Viên Kim Cương</h1>
        <Button type="primary" onClick={showModal}>
          Thêm
        </Button>
        <Table
          dataSource={diamonds}
          columns={columns}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 'max-content' }}
        />
        {/* <Modal className="modal-add-form"
          footer={false}
          title="Thêm sản phẩm kim cương"
          okText={""} open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Form
            form={form}
            onFinish={handleSubmit}
            id="form"
            className="form-main"
          >
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
            <Row gutter={16}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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

              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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
              </Col>
            </Row>
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
              name="upload"
              label="Tải lên hình ảnh"
              valuePropName="fileList"
              getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}
              extra="Chỉ chọn file ảnh"
            >
              <Upload name="logo" listType="picture" beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Chọn File</Button>
              </Upload>
            </Form.Item>

            <Button onClick={hanldeClickSubmit} className="form-button">
              Thêm Viên Kim Cương
            </Button>
            {message && <div>{message}</div>}
          </Form>
        </Modal> */}

      </div>
    </div>
  );
}
