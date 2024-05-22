import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../../../public/assets/images/LoginBanner/loginbanner.jpg";
import logo from "../../../public/assets/images/Logo/logo.png";
import "./LoginPage.css";

import BasicLoginFields from "../../components/Input/InputAccount";

import BasicPasswordFields from "../../components/Input/inputPassword";

export default function LoginPageBackup() {
  return (
    <Container fluid>
      <Row>
        <Col xs={6} className="Form">
          <div className="Form-header">
            <img src={logo} alt="" />
            <h1>Five Diamond</h1>
          </div>

          <div>div</div>
          <div className="Form-middle">
            {/* <p>Tài khoản</p> */}
            <BasicLoginFields
              placeholder="Tài Khoản"
              className="input-width"
            ></BasicLoginFields>

            {/* <p>Mật Khẩu</p> */}
            <BasicPasswordFields
              placeholder="Mật Khẩu"
              className="input-width"
            ></BasicPasswordFields>
          </div>
        </Col>
        <Col xs={6}>
          <img src={banner1} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
