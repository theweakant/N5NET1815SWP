import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import "./RegisterPage.css";

import registerbanner from "../../../public/assets/images/LoginBanner/registerbanner.jpg";
import logo from "../../../public/assets/images/Logo/logo.png";
import { routes } from "../../routes";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterPageCard() {
  // document
  //   .getElementById("register")
  //   .addEventListener("submit", function (event) {
  //     event.preventDefault(); // Prevent the default form submission

  //     // Get form data
  //     var formData = new FormData(this);

  //     // Convert form data to JSON object
  //     var jsonObject = {};
  //     formData.forEach(function (value, key) {
  //       jsonObject[key] = value;
  //     });

  //     // Send data to API endpoint
  //     var apiUrl = "http://157.245.145.162:8080/api/register"; // Replace with your API endpoint URL
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("POST", apiUrl, true);
  //     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //         // Request was successful
  //         console.log("Data sent successfully!");
  //         // You can handle the response from the API here
  //       }
  //     };
  //     xhr.send(JSON.stringify(jsonObject));
  //   });

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
              <form id="register">
                <MDBInput
                  wrapperClass="mb-3"
                  label="Tên"
                  placeholder="Nhập tên..."
                  id="typeText"
                  type="text"
                  size="lg"
                  name="firstname"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Họ"
                  placeholder="Nhập họ..."
                  id="typeText"
                  type="text"
                  size="lg"
                  name="lastname"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Email"
                  placeholder="Nhập email..."
                  id="typeEmail"
                  type="email"
                  size="lg"
                  name="email"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Số Điện Thoại"
                  placeholder="Nhập số điện thoại..."
                  id="typePhone"
                  type="tel"
                  size="lg"
                  name="phone"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Địa Chỉ"
                  placeholder="Nhập địa chỉ..."
                  id="typeText"
                  type="text"
                  size="lg"
                  name="address"
                />
                <MDBCol md="12" className="mb-3 form-radio">
                  <Row>
                    <Col xs={2}>
                      <span className="">Giới Tính: </span>
                    </Col>
                    <Col className="form-radio-element" xs={9}>
                      <MDBRadio
                        name="sex"
                        id="inlineRadio1"
                        value="option1"
                        label="Nam"
                        inline
                      />
                      <MDBRadio
                        name="sex"
                        id="inlineRadio2"
                        value="option2"
                        label="Nữ"
                        inline
                      />
                      <MDBRadio
                        name="sex"
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
                  name="username"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Mật Khẩu"
                  placeholder="Nhập mật khẩu..."
                  id="typePassword"
                  type="password"
                  size="lg"
                  name="password"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Xác Nhận Mật Khẩu"
                  placeholder="Nhập lại mật khẩu..."
                  id="typePassword"
                  type="password"
                  size="lg"
                />

                <MDBBtn
                  className="mb-1 px-5 form-button"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Đăng Ký
                </MDBBtn>
              </form>
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
