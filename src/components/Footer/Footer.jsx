import { Col, Container, Row } from "react-bootstrap";
import logo from "/assets/images/Logo/logo.png";
import "./Footer.css";
import BasicInput from "../searchBar";

export default function Footer() {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col xs={4} className="Footer-center">
          <i className="pi pi-phone"></i>
          <span>HOTLINE: 18001168</span>
        </Col>
        <Col xs={4} className="Footer-logo">
          <img src={logo} alt="" />
        </Col>
        <Col xs={4} className="Footer-center">
          <i className="pi pi-map"></i>
          <span>HỆ THỐNG PHÂN PHỐI</span>
        </Col>
      </Row>

      <Row>
        <Col className="Footer-middle">
          <h5>Liên hệ</h5>
          <p>Tập đoàn FiveDiamond</p>
          <p>
            Địa chỉ: VNUHCM Student Cultural House, Lưu Hữu Phước, Đông Hoà, Dĩ
            An, Bình Dương
          </p>
          <p>Điện thoại: 1800 1168</p>
          <p>Email: info@5diamond.vn</p>
        </Col>
        <Col className="Footer-middle">
          <h5>VỀ CHÚNG TÔI</h5>
          <p>
            <a href="">Về Kim Cương 5Diamond</a>
          </p>
          <p>
            <a href="">Dịch vụ khách hàng</a>
          </p>
          <p>
            <a href="">Kinh doanh bán sỉ</a>
          </p>
          <p>
            <a href="">5DIAMOND PREMIUM CLUB</a>
          </p>
        </Col>
        <Col className="Footer-middle">
          <h5>DỊCH VỤ KHÁCH HÀNG</h5>
          <p>
            <a href="">Hướng dẫn đặt hàng</a>
          </p>
          <p>
            <a href="">Phương thức thanh toán</a>
          </p>
          <p>
            <a href="">Chính sách & bảo hành</a>
          </p>
          <p>
            <a href="">Cam kết chất lượng</a>
          </p>
          <p>
            <a href="">Điều khoản mua bán</a>
          </p>
        </Col>
        <Col className="Footer-middle">
          <h5>TIN TỨC</h5>
          {/* <p>Tin khuyến mãi</p> */}
          <p>
            <a href="">Tin kim cương</a>
          </p>
          <p>
            <a href="">Video</a>
          </p>
          <p>
            <a href="">Blog</a>
          </p>
        </Col>
        <Col className="Footer-middle">
          <h5>ĐĂNG KÝ NHẬN THÔNG BÁO</h5>
          <BasicInput
            placeholder={" Nhập Email"}
            icon={"pi pi-envelope"}
          ></BasicInput>
          <p id="text-center">
            Nhận ngay thông tin ưu đãi mới nhất từ FiveDiamond
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>
            <hr className="solid"></hr>
            <span className="connect">Kết nối với chúng tôi</span>
          </h3>
        </Col>
      </Row>

      <Row>
        <Col className="Footer-social">
          <i className="pi pi-facebook"></i>
          <span>Five Diamond</span>
        </Col>
        <Col className="Footer-social">
          <i className="pi pi-youtube"></i>
          <span>Youtube</span>
        </Col>
        <Col className="Footer-social">
          <i className="pi pi-instagram"></i>
          <span>Instagram</span>
        </Col>
        <Col className="Footer-social">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/zalo.png"
            alt="zalo"
          />
          <span>Zalo</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="solid"></hr>
        </Col>
      </Row>

      <Row>
        <Col className="Footer-end">
          <p>Copypaste 2024 © Five Diamond Group</p>
        </Col>
        <Col className="Footer-end">
          <span>Về đầu trang</span>
          <span>
            <button
              id="button"
              onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              <i className="pi pi-arrow-up"></i>
            </button>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
