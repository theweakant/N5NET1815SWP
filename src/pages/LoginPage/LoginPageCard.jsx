import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./LoginPageCard.css";
import logobanner from "../../../public/assets/images/LoginBanner/loginbanner.jpg";
import logo from "../../../public/assets/images/Logo/logo.png";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function LoginPageCard() {
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

                <MDBInput
                  wrapperClass="mb-4"
                  label="Tài Khoản"
                  id="formControlLg"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Mật Khẩu"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBBtn
                  className="mb-1 px-5 form-button"
                  color="dark"
                  size="lg"
                >
                  Đăng Nhập
                </MDBBtn>
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
