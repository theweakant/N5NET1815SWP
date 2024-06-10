import SideBar from "../../../components/SideBar/SideBar";
import { Button, Form, Image, Input, Modal, Select, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import "../../AdminDashboard/AdminPage.css";
import api from "../../../config/axios";
import { UploadOutlined } from "@ant-design/icons";

export default function AdminDiamond() {
  const [message, setMessage] = useState("");
  const [deleteMessage, setdeleteMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const [form] = useForm();
  const [formUpdate] = useForm();

  const [diamond, setDiamond] = useState([]);
  const [diamondUpdate, setDiamondUpdate] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [editingMaterial, setEditingMaterial] = useState(null);
  function hanldeClickSubmit() {
    form.submit();
  }

  function hanldeUpdateClickSubmit() {
    formUpdate.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      await api.post("material", value);
      setMessage("Thêm kim cương thành công");
      setDiamond([...diamond, value]);
    } catch (error) {
      setMessage("Đã có lỗi trong lúc thêm kim cương");
      console.log(error.response.data);
    }
  }

  async function fetchProduct() {
    const response = await api.get("material");
    setDiamond(response.data);
    console.log("data....", response.data);
  }

  useEffect(() => {
    fetchProduct();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Use useEffect to log diamond.id whenever diamond state changes
  useEffect(() => {
    if (diamond) {
      console.log("diamond...", diamond); // Log the diamond id when diamond state is updated
    }
  }, [diamond]); // Only re-run this effect when diamond changes

  async function fetchCertificate() {
    const certificate = await api.get("certificate/not-yet-used");
    setCertificate(certificate.data);
  }

  useEffect(() => {
    fetchCertificate();
  }, []);

  async function deleteMaterial(values) {
    console.log(values.id);
    try {
      Modal.confirm({
        title: "Bạn có chắc muốn xóa sản phẩm này ?",
        onOk: () => {
          api.delete(`material/${values.id}`);
          setdeleteMessage("Xóa thành công");
          setDiamond(
            diamond.filter((gem) => {
              return gem.id !== values.id;
            })
          );
        },
      });
    } catch (error) {
      setdeleteMessage("Đã có lỗi trong lúc Xóa");
      console.log(error.response.data);
    }
  }

  async function updateMaterial(id) {
    console.log(id);
    // console.log(diamond);
    try {
      await api.put(`material/${id}`);
      setUpdateMessage("Chỉnh sửa thành công");
      console.log("chỉnh sửa thành công");
    } catch (error) {
      console.log("chỉnh sửa thất bại, có lỗi");
      setUpdateMessage("chỉnh sửa thất bại, có lỗi");
      console.log(error.response.data);
    }
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Certificate ID",
      dataIndex: "certificateID",
      key: "certificateID",
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
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hành Động",
      render: (values) => {
        return (
          <>
            <Button
              onClick={(e) => {
                deleteMaterial(values);
              }}
            >
              Xóa
            </Button>

            <Button
              icon={<UploadOutlined />}
              className="admin-upload-button"
              onClick={showModalUpdate}
            >
              Chỉnh sửa
            </Button>

            <Modal
              className="modal-add-form"
              footer={false}
              title="Chỉnh Sửa"
              okText={"Lưu"}
              open={isModalUpdateOpen}
              onOk={handleUpdateOk}
              onCancel={handleUpdateCancel}
            >
              <Form
                form={formUpdate}
                onFinish={(e) => {
                  updateMaterial(diamond.id);
                }}
                id="form-update"
                className="form-main"
              >
                <div className="form-content-main">
                  <div className="form-content">
                    <Form.Item
                      className="label-form"
                      label="Hình Dáng"
                      name="shape"
                    >
                      <Input
                        type="text"
                        required
                        defaultValue={diamond.shape}
                      />
                    </Form.Item>

                    <Form.Item className="label-form" label="Size" name="size">
                      <Input
                        type="number"
                        required
                        defaultValue={diamond.size}
                      />
                    </Form.Item>

                    <Form.Item
                      className="label-form"
                      label="Màu sắc"
                      name="color"
                    >
                      <Input
                        type="text"
                        required
                        defaultValue={diamond.color}
                      />
                    </Form.Item>
                    <Form.Item
                      className="label-form"
                      label="Độ Tinh Khiết"
                      name="clarity"
                    >
                      <Input
                        type="text"
                        required
                        defaultValue={diamond.clarity}
                      />
                    </Form.Item>
                    <Form.Item
                      className="label-form"
                      label="Carat"
                      name="carat"
                    >
                      <Input
                        type="number"
                        required
                        defaultValue={diamond.carat}
                      />
                    </Form.Item>
                    <Form.Item className="label-form" label="Độ Cắt" name="cut">
                      <Input type="text" required defaultValue={diamond.cut} />
                    </Form.Item>
                  </div>
                  <div className="form-content">
                    <Form.Item
                      className="label-form"
                      label="Nguồn gốc"
                      name="origin"
                    >
                      <Input
                        type="text"
                        required
                        defaultValue={diamond.origin}
                      />
                    </Form.Item>

                    <Form.Item className="label-form" label="Giá" name="price">
                      <Input
                        type="number"
                        required
                        defaultValue={diamond.price}
                      />
                    </Form.Item>

                    <Form.Item
                      className="label-form"
                      label="Image URL "
                      name="imgURL"
                    >
                      <Input type="text" defaultValue={diamond.imgURL} />
                    </Form.Item>
                  </div>
                </div>
                <Button
                  onClick={(e) => {
                    hanldeUpdateClickSubmit(diamond.id);
                  }}
                  className="form-button"
                >
                  Chỉnh Sửa Kim Cương
                </Button>
                {updateMessage && <div>{updateMessage}</div>}
              </Form>
            </Modal>
          </>
        );
      },
    },
  ];

  const columnsGIA = [
    {
      title: "Report Number",
      dataIndex: "giaReportNumber",
      key: "giaReportNumber",
    },
    {
      title: "File URL",
      dataIndex: "fileURL",
      key: "fileURL",
    },
    {
      title: "Date Of Issues",
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

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const showModalUpdate = () => {
    setIsModalUpdateOpen(true);
  };
  const handleUpdateOk = () => {
    setIsModalUpdateOpen(false);
  };
  const handleUpdateCancel = () => {
    setIsModalUpdateOpen(false);
  };

  return (
    <div className="Admin">
      <SideBar></SideBar>

      <div className="admin-content">
        <h1>Thêm Viên Kim Cương</h1>
        {/* <Modal
          className="modal-add-form"
          footer={false}
          title="Thêm kim cương"
          okText={""}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        > */}
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
                label="Hình Dáng"
                name="shape"
                rules={[
                  {
                    required: true,
                    message: "Nhập Hình Dáng",
                  },
                ]}
              >
                <Select className="select-input" placeholder="chọn Hình Dáng">
                  <Select.Option value="ROUND">Round</Select.Option>
                  <Select.Option value="OVAL">Oval</Select.Option>
                  <Select.Option value="CUSHION">Cushion</Select.Option>
                  <Select.Option value="PEAR">Pear</Select.Option>
                  <Select.Option value="EMERALD">Emerald</Select.Option>
                  <Select.Option value="PRINCESS">Princess</Select.Option>
                  <Select.Option value="RADIANT">Radiant</Select.Option>
                  <Select.Option value="HEART">Heart</Select.Option>
                  <Select.Option value="MARQUISE">Marquise</Select.Option>
                  <Select.Option value="ASSHER">Assher</Select.Option>
                </Select>
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
                <Select
                  className="select-input"
                  placeholder="chọn Độ Tinh Khiết"
                >
                  <Select.Option value="VVS1">VVS1</Select.Option>
                  <Select.Option value="VVS2">VVS2</Select.Option>
                  <Select.Option value="VS1">VS1</Select.Option>
                  <Select.Option value="VS2">VS2</Select.Option>
                  <Select.Option value="SI1">SI1</Select.Option>
                  <Select.Option value="SI2">SI2</Select.Option>
                  <Select.Option value="I1">I1</Select.Option>
                  <Select.Option value="I2">I2</Select.Option>
                  <Select.Option value="I3">I3</Select.Option>
                </Select>
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
                <Select className="select-input" placeholder="chọn Độ Cắt">
                  <Select.Option value="EXCELLENT">Excellent</Select.Option>
                  <Select.Option value="VERY GOOD">Very Good</Select.Option>
                  <Select.Option value="GOOD">Good</Select.Option>
                  <Select.Option value="FAIR">Fair</Select.Option>
                  <Select.Option value="POOR">Poor</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="label-form"
                label="Chứng Chỉ"
                name="certificateID"
                required
              >
                <Button
                  icon={<UploadOutlined />}
                  className="admin-upload-button"
                  onClick={showModal}
                >
                  Thêm Chứng Chỉ
                </Button>
              </Form.Item>
            </div>
            <div className="form-content">
              <Form.Item
                className="label-form"
                label="Nguồn gốc"
                name="origin"
                rules={[
                  {
                    required: true,
                    message: "Nhập nguồn gốc ",
                  },
                ]}
              >
                <Select className="select-input" placeholder="chọn Nguồn Gốc">
                  <Select.Option value="NATURAL">Tự Nhiên</Select.Option>
                  <Select.Option value="ARTIFICAL">Nhân Tạo</Select.Option>
                </Select>
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
                <Input type="number" required min={1} />
              </Form.Item>

              <Form.Item
                className="label-form"
                label="Image URL "
                name="imgURL"
              >
                <Input type="text" />
              </Form.Item>

              <Form.Item
                className="label-form"
                label="Loại"
                name="type"
                initialValue="DIAMOND"
              >
                <Input readOnly type="text"></Input>
              </Form.Item>
            </div>
          </div>
          <Button onClick={hanldeClickSubmit} className="form-button">
            Thêm Viên Kim Cương
          </Button>
          {message && <div>{message}</div>}
        </Form>
        {/* </Modal> */}

        <Modal
          className="modal-add-form"
          footer={false}
          title="Chọn Chứng chỉ"
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
          ></Form>
          <Table
            dataSource={certificate}
            columns={columnsGIA}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </Modal>

        <div className="data-table">
          <h1>Quản Lý Kim Cương</h1>
          <Table
            dataSource={diamond}
            columns={columns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
}
