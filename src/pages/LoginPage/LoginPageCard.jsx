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

function LoginPageCard() {
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

              <MDBBtn className="mb-4 px-5 form-button" color="dark" size="lg">
                Đăng Nhập
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Quên Mật Khẩu ?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Bạn chưa có tài khoản ?{" "}
                <a href={routes.register} style={{ color: "#393f81" }}>
                  Đăng Ký
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

export default LoginPageCard;
