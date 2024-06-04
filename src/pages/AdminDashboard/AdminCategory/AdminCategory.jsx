import React, { useState } from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';
import SideBar from '../../../components/SideBar/SideBar';
import '../AdminPage/AdminPage.css';

const AdminCategory = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Nhẫn', type: 'kim cương' },
    { id: 2, name: 'Dây Chuyền', type: 'kim cương' },
    { id: 3, name: 'Lắc tay', type: 'vàng' },
    { id: 4, name: 'Vòng tay', type: 'vàng' },
    { id: 5, name: 'Viên Kim cương', type: 'vàng' },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddCategory = (values) => {
    const newCategory = { id: categories.length + 1, ...values };
    setCategories([...categories, newCategory]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEditCategory = (id) => {
    // Logic to edit a category
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const columns = [
    {
      title: 'Mã',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Chức năng',
      key: 'action',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEditCategory(record.id)}>📝</Button>
          <Button onClick={() => handleDeleteCategory(record.id)}>🗑️</Button>
        </>
      ),
    },
  ];

  return (
    <div className="Admin">
      <SideBar />
      
      <div className="content_category">
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          Tạo mới danh mục
        </Button>
        <Button type="secondary" onClick={() => console.log('In dữ liệu')}>
          In dữ liệu
        </Button>
        <Table dataSource={categories} columns={columns} rowKey="id" />
        <Modal
          title="Thêm danh mục"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleAddCategory}>
            <Form.Item
              name="name"
              label="Tên danh mục"
              rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="type"
              label="Loại"
              rules={[{ required: true, message: 'Vui lòng nhập loại' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default AdminCategory;
