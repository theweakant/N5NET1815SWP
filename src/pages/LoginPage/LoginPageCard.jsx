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
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../redux/features/counterSlice";

function LoginPageCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userDataAPI, setUserDataAPI] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // const handleLogin = () => {
  //   const userData = { email };
  //   dispatch(login(userData));
  // };

  const handleLogout = () => {
    dispatch(logout());
  };

  const [error, setError] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();
  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      const response = await axios
        .post("http://157.245.145.162:8080/api/login", value)
        .then((user) => {
          console.log(user);
          console.log(user.data);
          if (user.data.role === "customer") {
            navigate(routes.home);
          } else if (user.data.role === "admin") {
            navigate(routes.adminDiamond);
          }
        });
      const userData = { email };
      dispatch(login(userData));
    } catch (error) {
      setError("Tài khoản hoặc mật khẩu của bạn không đúng");
      console.log(error.response.data);
    }
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
                          message: "Hãy Nhập Email của bạn",
                        },
                        {
                          type: "email",
                          message: "Hãy Nhập Email đúng",
                        },
                      ]}
                    >
                      <Input
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Mật Khẩu"
                      name="password"
                      rules={[
                        {
                          min: 6,
                          message: "Mật khẩu của bạn phải chứa ít nhất 6 ký tự",
                        },
                        {
                          pattern: /^([a-z]|[A-Z]|[0-9])*$/,

                          message:
                            "Mật khẩu của bạn phải không có ký tự đặc biệt",
                        },
                        {
                          required: true,
                          message: "Hãy nhập Mật Khẩu của bạn!",
                        },
                      ]}
                    >
                      <Input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Item>
                    {error && <div>{error}</div>}
                    <Button onClick={hanldeClickSubmit} className="form-button">
                      Đăng Nhập
                    </Button>
                  </Form>
                </div>

                <Link to={routes.forgot} className="small text-muted link-to">
                  Quên Mật Khẩu ?
                </Link>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Bạn chưa có tài khoản ?{" "}
                  <Link
                    to={routes.register}
                    style={{ color: "#393f81" }}
                    className="link-to"
                  >
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
