import SideBar from "../../../components/SideBar/SideBar";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Table, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
// import "./AdminUser.css";
import api from "../../../config/axios";

const config = {
    rules: [
        {
            type: "object",
            required: true,
            message: "Hãy Chọn Ngày",
        },
    ],
};

export default function AdminUser() {
    const [message, setMessage] = useState("");
    const [form] = useForm();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const dateFormat = "DD/MM/YYYY";

    const handleClickSubmit = () => {
        form.submit();
    };

    const handleSubmit = async (value) => {
        console.log(value);
        try {
            await axios.post("http://157.245.145.162:8080/api/user", value);
            setMessage("Thêm người dùng thành công");
        } catch (error) {
            setMessage("Đã có lỗi trong lúc thêm người dùng");
            console.log(error.response.data);
        }
    };

    const fetchUsers = async () => {
        const response = await api.get("user");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Họ tên',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Ngày tạo',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
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
        <div className="Admin-User">
            {/* <SideBar /> */}

            <div className="admin-user-content">
                <h1>Admin User</h1>
                <Button type="primary" onClick={showModal}>
                    Thêm
                </Button>
                <Table dataSource={users} columns={columns} />
                <Modal footer={false} title="Thêm Người Dùng" okText={""} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        form={form}
                        onFinish={handleSubmit}
                        id="form"
                        className="form-main"
                    >
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Họ tên"
                                    name="fullName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Nhập họ tên",
                                        },
                                    ]}
                                >
                                    <Input type="text" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Giới tính"
                                    name="gender"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Chọn giới tính",
                                        },
                                    ]}
                                >
                                    <Select placeholder="Chọn giới tính">
                                        <Select.Option value="male">Nam</Select.Option>
                                        <Select.Option value="female">Nữ</Select.Option>
                                        <Select.Option value="other">Khác</Select.Option>

                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="dob"
                                    label="Ngày sinh"
                                    rules={[{ required: true, message: "Chọn ngày sinh" }]}
                                >
                                    <DatePicker
                                        placeholder="Ngày sinh"
                                        style={{ width: "100%" }}
                                        format={dateFormat}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Số điện thoại"
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Nhập số điện thoại",
                                        },
                                    ]}
                                >
                                    <Input type="Number" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Địa chỉ"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Nhập địa chỉ",
                                        },
                                    ]}
                                >
                                    <Input type="text" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Nhập mật khẩu",
                                        },
                                    ]}
                                >
                                    <Input.Password type="password" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            name="dateCreated"
                            label="Ngày tạo"
                            rules={[{ required: true, message: "Chọn ngày tạo" }]}
                        >
                            <DatePicker
                                placeholder="Ngày tạo"
                                style={{ width: "100%" }}
                                format={dateFormat}
                            />
                        </Form.Item>

                        <Button onClick={handleClickSubmit} className="form-button">
                            Thêm Người Dùng
                        </Button>
                        {message && <div>{message}</div>}
                    </Form>
                </Modal>
            </div>
        </div >
    );
}
