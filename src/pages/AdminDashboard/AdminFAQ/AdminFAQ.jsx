import React, { useState, useEffect } from "react";
import { Button, Form, Input, Table, Modal, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import "./AdminFAQ.css";
import SideBar from "../../../components/SideBar/SideBar";

const AdminFAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [form] = useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentFAQ, setCurrentFAQ] = useState(null);

    useEffect(() => {
        fetchFAQs();
    }, []);

    const fetchFAQs = async () => {
        try {
            const response = await axios.get("http://157.245.145.162:8080/api/faqs");
            setFaqs(response.data);
        } catch (error) {
            console.error("Failed to fetch FAQs", error);
        }
    };

    const handleAddFAQ = () => {
        form.resetFields();
        setCurrentFAQ(null);
        setIsModalVisible(true);
    };

    const handleEditFAQ = (faq) => {
        setCurrentFAQ(faq);
        form.setFieldsValue(faq);
        setIsModalVisible(true);
    };

    const handleDeleteFAQ = async (id) => {
        try {
            await axios.delete(`http://157.245.145.162:8080/api/faqs/${id}`);
            fetchFAQs();
            notification.success({
                message: "Success",
                description: "Xóa FAQ thành công",
            });
        } catch (error) {
            notification.error({
                message: "Error",
                description: "Đã có lỗi trong lúc xóa FAQ",
            });
            console.error(error);
        }
    };

    const handleSubmit = async (values) => {
        try {
            if (currentFAQ) {
                await axios.put(`http://157.245.145.162:8080/api/faqs/${currentFAQ.id}`, values);
                notification.success({
                    message: "Success",
                    description: "Cập nhật FAQ thành công",
                });
            } else {
                await axios.post("http://157.245.145.162:8080/api/faqs", values);
                notification.success({
                    message: "Success",
                    description: "Thêm FAQ thành công",
                });
            }
            fetchFAQs();
            setIsModalVisible(false);
        } catch (error) {
            notification.error({
                message: "Error",
                description: "Đã có lỗi trong lúc thêm/cập nhật FAQ",
            });
            console.error(error);
        }
    };

    const columns = [
        {
            title: "Câu Hỏi",
            dataIndex: "question",
            key: "question",
        },
        {
            title: "Trả Lời",
            dataIndex: "answer",
            key: "answer",
        },
        {
            title: "Hành Động",
            key: "action",
            render: (text, record) => (
                <span>
                    <Button onClick={() => handleEditFAQ(record)}>Sửa</Button>
                    <Button onClick={() => handleDeleteFAQ(record.id)} danger>Xóa</Button>
                </span>
            ),
        },
    ];

    return (
        <div className="AdminFAQ">
            <SideBar />
            <div className="admin-content">
                <h1 className="quan-ly-faq">Quản Lý FAQ</h1>
                <Button type="primary" onClick={handleAddFAQ}>
                    Thêm FAQ
                </Button>
                <Table dataSource={faqs} columns={columns} rowKey="id" />
            </div>

            <Modal
                title={currentFAQ ? "Cập Nhật FAQ" : "Thêm FAQ"}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                        label="Câu Hỏi"
                        name="question"
                        rules={[{ required: true, message: "Nhập câu hỏi" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Trả Lời"
                        name="answer"
                        rules={[{ required: true, message: "Nhập câu trả lời" }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {currentFAQ ? "Cập Nhật" : "Thêm"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminFAQ;
