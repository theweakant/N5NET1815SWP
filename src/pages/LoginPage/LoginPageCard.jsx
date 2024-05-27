import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./LoginPageCard.css";
import logobanner from "../../../public/assets/images/LoginBanner/loginbanner.jpg";
import logo from "../../../public/assets/images/Logo/logo.png";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useForm } from "antd/es/form/Form";

function LoginPageCard() {
  const [form] = useForm();
  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    await axios.post("http://157.245.145.162:8080/api/register", value);
  }

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="background-login">
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={logobanner}
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
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Đăng Nhập
                </h5>
                <div className="form">
                  <Form
                    form={form}
                    onFinish={handleSubmit}
                    id="form"
                    className="form-main"
                  >
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
                      label="Mật Khẩu"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Hãy nhập Mật Khẩu của bạn",
                        },
                      ]}
                    >
                      <Input type="password" />
                    </Form.Item>
                    <Button onClick={hanldeClickSubmit} className="form-button">
                      Đăng Nhập
                    </Button>
                  </Form>
                </div>
                <p className="mb-1" style={{ textAlign: "center" }}>
                  Hoặc
                </p>
                <div className="google-button">
                  <GoogleLogin
                    onSuccess={responseMessage}
                    onError={errorMessage}
                  />
                </div>
                <Link to={routes.forgot} className="small text-muted">
                  Quên Mật Khẩu ?
                </Link>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Bạn chưa có tài khoản ?{" "}
                  <Link to={routes.register} style={{ color: "#393f81" }}>
                    Đăng Ký
                  </Link>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    {/* Terms of use. */}
                  </a>
                  <a href="#!" className="small text-muted">
                    {/* Privacy policy */}
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default LoginPageCard;
