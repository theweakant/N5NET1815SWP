import React from "react";
import { Container } from "react-bootstrap";
import SideBar from "../../../components/SideBar/SideBar";
import "./AdminManageOrder.css";
import { Table } from "antd";
import { Button, Col, DatePicker, Form, Image, Input, Modal, Popover, Row, Tooltip, Upload } from "antd";
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
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      fixed: 'left',
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
    },
    {
      title: 'Action 1',
      fixed: 'right',
      width: 90,
      render: () => <a>action</a>,
    },
    {
      title: 'Action 2',
      width: 90,
      render: () => <a>action</a>,
    },
    {
      title: 'Action 3',
      fixed: 'right',
      width: 90,
      render: () => <a>action</a>,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '2',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '4',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '6',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '8',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '10',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },
    {
      key: '11',
      name: 'John Brown',
      age: 32,
      address: 'New York Park1',
    },  
  ];
  return (
    <div>
      <SideBar />
      <Container>
        <div className='table-content'>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1500,
              y: 300,
            }}
          />
        </div>
      </Container>
    </div>
  );
}
