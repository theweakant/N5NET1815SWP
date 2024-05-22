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
import "./RegisterPage.css";
import logobanner from "../../../public/assets/images/LoginBanner/loginbanner.jpg";
import logo from "../../../public/assets/images/Logo/logo.png";
import { routes } from "../../routes";
import { Col, Row } from "react-bootstrap";

function RegisterPageCard() {
  return (
    <MDBContainer className="my-5">
      <MDBCard className="form-card">
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
              <a href={routes.home} className="form-comeback">
                <i
                  className="pi pi-arrow-circle-left"
                  style={{ fontSize: "2rem" }}
                ></i>
                <span className="">Quay Lại Trang Chủ</span>
              </a>
              <div className="d-flex flex-row mt-2 form-header">
                <img src={logo} alt="" className="form-logo" />
                <span className="h1 fw-bold mb-0">Five Diamond</span>
              </div>

              <h5
                className="fw-normal my-1 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Đăng Ký
              </h5>

              <MDBInput
                wrapperClass="mb-3"
                label="Họ Tên"
                placeholder="Nhập họ tên..."
                id="typeText"
                type="text"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Email"
                placeholder="Nhập email..."
                id="typeEmail"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Số Điện Thoại"
                placeholder="Nhập số điện thoại..."
                id="typePhone"
                type="tel"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Địa Chỉ"
                placeholder="Nhập địa chỉ..."
                id="typeText"
                type="text"
                size="lg"
              />
              <MDBCol md="12" className="mb-3 form-radio">
                <Row>
                  <Col xs={2}>
                    <span className="">Giới Tính: </span>
                  </Col>
                  <Col className="form-radio-element" xs={9}>
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="option1"
                      label="Nam"
                      inline
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="option2"
                      label="Nữ"
                      inline
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio3"
                      value="option3"
                      label="Khác"
                      inline
                    />
                  </Col>
                </Row>
              </MDBCol>
              <MDBInput
                wrapperClass="mb-3"
                label="Tên Đăng Nhập"
                placeholder="Nhập tên đăng nhập..."
                id="typeText"
                type="text"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Mật Khẩu"
                placeholder="Nhập mật khẩu..."
                id="typePassword"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Xác Nhận Mật Khẩu"
                placeholder="Nhập lại mật khẩu..."
                id="typePassword"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-3 px-5 form-button" color="dark" size="lg">
                Đăng Ký
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Quên Mật Khẩu ?
              </a>
              <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                Bạn đã có tài khoản ?{" "}
                <a href={routes.login} style={{ color: "#393f81" }}>
                  Đăng Nhập Ngay
                </a>
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
  );
}

export default RegisterPageCard;
