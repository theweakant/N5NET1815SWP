import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./RegisterPage.css";

import registerbanner from "../../../public/assets/images/LoginBanner/registerbanner.jpg";
import logo from "../../../public/assets/images/Logo/logo.png";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { Option } from "antd/es/mentions";

function RegisterPageCard() {
  const [form] = useForm();
  async function handleSubmit(value) {
    console.log(value);
    await axios.post("http://157.245.145.162:8080/api/register", value);
  }

  function hanldeClickSubmit() {
    form.submit();
  }

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={registerbanner}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <Link to={routes.home} className="form-comeback">
                <i
                  className="pi pi-arrow-circle-left"
                  style={{ fontSize: "2rem" }}
                ></i>
                <span className="">Quay Lại Trang Chủ</span>
              </Link>
              <div className="d-flex flex-row mt-2 form-header">
                <img src={logo} alt="" className="form-logo" />
                <span className="h1 fw-bold mb-0">Five Diamond</span>
              </div>

              <h5
                className="fw-normal my-0 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Đăng Ký
              </h5>
              <div className="form">
                <Form
                  form={form}
                  onFinish={handleSubmit}
                  id="form"
                  className="form-main"
                >
                  <Form.Item
                    label="Họ"
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập Họ của bạn",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Tên"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập Tên của bạn",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập Email của bạn",
                      },
                    ]}
                  >
                    <Input type="email" required />
                  </Form.Item>
                  <Form.Item
                    label="Số Điện Thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập số điện thoại của bạn",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Địa Chỉ"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập địa chỉ của bạn",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Giới Tính"
                    name="sex"
                    rules={[
                      { required: true, message: "Chọn Giới Tính của bạn" },
                    ]}
                  >
                    <Select placeholder="Chọn Giới Tính của bạn">
                      <Option value="male">Nam</Option>
                      <Option value="female">Nữ</Option>
                      <Option value="other">khác</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Tên Đăng Nhập"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập Tên tài khoản của bạn",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Mật Khẩu"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Hãy nhập Mật Khẩu của bạn!",
                      },
                    ]}
                  >
                    <Input type="password" />
                  </Form.Item>
                  <Form.Item
                    label="Xác nhận mật khẩu"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Hãy Xác Nhận lại mật khẩu của bạn",
                      },
                    ]}
                  >
                    <Input type="password" />
                  </Form.Item>
                  <Button onClick={hanldeClickSubmit} className="form-button">
                    Đăng Ký
                  </Button>
                </Form>
              </div>
              <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                Bạn đã có tài khoản ?{" "}
                <Link to={routes.login} style={{ color: "#393f81" }}>
                  Đăng Nhập Ngay
                </Link>
              </p>

              {/* <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterPageCard;
