import logo from "/assets/images/Logo/logo.png";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";

import "primeicons/primeicons.css";
import BasicInput from "../../components/searchBar";

export default function Header() {
  return (
    <Container fluid className="Header" id="header">
      <Row className="Top-header">
        <Col xs={4}></Col>
        <Col xs={4} className="Header-logo">
          <img src={logo} alt="" />
        </Col>
        <Col xs={2} className="Header-search">
          <BasicInput
            placeholder={"Tìm kiếm sản phẩm"}
            icon={"pi pi-search"}
          ></BasicInput>
        </Col>
        <Col xs={2} className="Header-login">
          <a href="">
            <button>Đăng nhập</button>
          </a>
          <a href="">
            <button>Đăng ký</button>
          </a>
        </Col>
      </Row>

      <Row className="Bottom-header">
        <Col className="Header-navigation">
          <a href="">Giới Thiệu</a>
        </Col>
        <Col className="Header-navigation">
          <a href="">Bộ Sưu Tập</a>
        </Col>
        <Col className="Header-navigation">
          <a href="">Sản Phẩm Về Kim Cương</a>
        </Col>
        <Col className="Header-navigation">
          <a href="">Hướng Dẫn Đo Ni</a>
        </Col>
        <Col className="Header-navigation">
          <a href="">Kiến Thức Trang Sức</a>
        </Col>
        <Col className="Header-navigation">
          <a href="">Bảng Giá Kim Cương</a>
        </Col>
        <Col className="Header-navigation">
          <a href="">Câu Hỏi Thường Gặp</a>
        </Col>
      </Row>
    </Container>
  );
}
