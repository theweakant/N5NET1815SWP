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
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../redux/features/counterSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import api from "../../config/axios";

function LoginPageCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();
  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    try {
      const response = await api.post("login", value).then((userApi) => {
        console.log(userApi);
        console.log(userApi.data);
        localStorage.setItem("token", userApi.data.token);

        if (userApi.data.role === "CUSTOMER") {
          navigate(routes.home);
        } else if (userApi.data.role === "ADMIN") {
          navigate(routes.adminDiamond);
        }
        dispatch(login(userApi.data));
      });
    } catch (error) {
      setError("Tài khoản hoặc mật khẩu của bạn không đúng");
      console.log(error.response.data);
    }
  }

  const handleLoginGG = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = result.user.accessToken;
        const response = await api.post("login-google", { token: token });
        console.log(response.data);
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        if (response.data.role === "CUSTOMER") {
          navigate(routes.home);
        }
        dispatch(login(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
                    className="form-login"
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
                    <p>Hoặc</p>
                    <Button onClick={handleLoginGG} className="form-button">
                      Login With google
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
