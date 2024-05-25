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
  MDBRadio,
} from "mdb-react-ui-kit";
import "./ForgotPassword.css";
import logobanner from "../../../public/assets/images/LoginBanner/loginbanner.jpg";
import forgotbanner from "../../../public/assets/images/LoginBanner/forgotbanner.jpg";

import logo from "../../../public/assets/images/Logo/logo.png";
import { routes } from "../../routes";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <MDBContainer className="my-5">
      <MDBCard className="form-card">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={forgotbanner}
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
                className="fw-normal my-1 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Quên mật khẩu
              </h5>

              <MDBInput
                wrapperClass="mb-3"
                label="Email"
                placeholder="Nhập email..."
                id="typeEmail"
                type="email"
                size="lg"
              />

              <MDBBtn className="mb-3 px-5 form-button" color="dark" size="lg">
                Gửi Đi
              </MDBBtn>
              <div className="form-end">
                <Link to={routes.login} style={{ color: "#393f81" }}>
                  Quay lại đăng nhập
                </Link>

                <Link to={routes.register} style={{ color: "#393f81" }}>
                  Đăng ký tài khoản mới
                </Link>
              </div>
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
  );
}

export default ForgotPasswordPage;
