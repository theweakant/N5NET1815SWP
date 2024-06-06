import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './CheckOut.css';

const provinces = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  // Add more provinces as needed
];

export default function CheckOut() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    // Simulate fetching districts based on the selected province
    // Replace this with an API call in a real application
    setDistricts([
      "District 1",
      "District 2",
      "District 3",
      // Add more districts based on the selected province
    ]);
    setSelectedDistrict("");
    setWards([]);
    setSelectedWard("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    // Simulate fetching wards based on the selected district
    // Replace this with an API call in a real application
    setWards([
      "Ward 1",
      "Ward 2",
      "Ward 3",
      // Add more wards based on the selected district
    ]);
    setSelectedWard("");
  };

  return (
    <div className="page-container">
      <Header />
      <Container className="container">
        <Form>
          <Row>
            <Col md={8} className="Col8">
              <h4>THÔNG TIN NGƯỜI MUA</h4>
              <Form.Group controlId="formFullName">
                <Form.Label className="form-label">Họ Tên:</Form.Label>
                <Form.Control type="text" placeholder="Nhập họ tên" />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label className="form-label">Điện Thoại:</Form.Label>
                <Form.Control type="text" placeholder="Nhập số điện thoại" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Email:</Form.Label>
                <Form.Control type="email" placeholder="Nhập email" />
              </Form.Group>

              <Form.Group controlId="formBirthDate">
                <Form.Label className="form-label">Ngày Sinh:</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <h4>PHƯƠNG THỨC NHẬN HÀNG</h4>
              <Form.Group controlId="formProvince">
                <Form.Label className="form-label">Tỉnh/TP:</Form.Label>
                <Form.Control as="select" value={selectedProvince} onChange={handleProvinceChange}>
                  <option value="">Chọn Tỉnh/TP</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDistrict">
                <Form.Label className="form-label">Quận/Huyện:</Form.Label>
                <Form.Control as="select" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedProvince}>
                  <option value="">Chọn Quận/Huyện</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formWard">
                <Form.Label className="form-label">Phường/Xã:</Form.Label>
                <Form.Control as="select" value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} disabled={!selectedDistrict}>
                  <option value="">Chọn Phường/Xã</option>
                  {wards.map((ward) => (
                    <option key={ward} value={ward}>
                      {ward}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label className="form-label">Nhập địa chỉ nhận hàng:</Form.Label>
                <Form.Control type="text" placeholder="Nhập địa chỉ" />
              </Form.Group>

              <h4>THỜI GIAN NHẬN HÀNG</h4>
              <Form.Group controlId="formDeliveryTime">
                <Form.Check type="checkbox" label="Nhận hàng tiêu chuẩn" />
                <Form.Check type="checkbox" label="Thời gian nhận" />
                <Form.Control as="select">
                  <option>Ngày</option>
                  {/* Add options here */}
                </Form.Control>
              </Form.Group>

              <h4>HÌNH THỨC THANH TOÁN</h4>
              <Form.Group controlId="formPaymentMethod">
                <Form.Check type="radio" label="Thanh toán COD" name="paymentMethod" />
                <Form.Check type="radio" label="Thanh toán chuyển khoản" name="paymentMethod" />
                <div>
                  <p>
                    + Tên tài khoản: CÔNG TY CP TẬP ĐOÀN VÀNG BẠC ĐÁ QUÝ FIVIDIAMOND<br />
                    + Số tài khoản: 1206866868<br />
                    + Ngân hàng: Ngân hàng TMCP Đầu tư & Phát triển Việt Nam (BIDV) - CN Sở Giao dịch 1<br />
                    + Nội dung chuyển khoản: <em>“Tên người chuyển + Số điện thoại + Mã đơn hàng”</em>
                  </p>
                </div>
              </Form.Group>

              <Form.Group controlId="formNote">
                <Form.Label className="form-label">GHI CHÚ</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Để lại lời nhắn" />
              </Form.Group>

              <Button variant="primary" type="submit">
                ĐẶT HÀNG
              </Button>
              <p>Xin vui lòng xác nhận lại đơn hàng</p>
            </Col>

            <Col md={4}>
              <h4>THÔNG TIN ĐƠN HÀNG</h4>
              <div className="order-item">
                <img src="https://tnj.vn/75169-large_default/nhan-bac-nu-dinh-da-10mm-nn0440.jpg" alt="Product Image" className="product-image" />
                <div className="order-item-details">
                  <p>HOA TAI 18K AFEC00043BD2DA1</p>
                  <p>MSP: AFEC00043BD2DA1</p>
                  <p>SỐ LƯỢNG: 1</p>
                  <p>Giá bán: 42,820,000đ</p>
                  <p>Tạm tính: 42,820,000đ</p>
                </div>
              </div>
              <div className="order-item">
                <img src="https://tnj.vn/60913-large_default/nhan-kim-cuong-moissanite-dinh-da-nnm0010.jpg" alt="Product Image" className="product-image" />
                <div className="order-item-details">
                  <p>NHẪN ĐÍNH HÔN KIM CƯƠNG ENR3111W</p>
                  <p>MSP: ENR3111W</p>
                  <p>SỐ LƯỢNG: 1</p>
                  <p>Giá bán: 44,520,000đ</p>
                  <p>Tạm tính: 44,520,000đ</p>
                </div>
              </div>
              <h5>Tạm tính: 87,340,000đ</h5>
              <Form.Group controlId="formVoucher">
                <p>Mã giảm giá/Voucher</p>
                <Form.Control type="text" />
              </Form.Group>
              <p>Phí vận chuyển: 50,000đ</p>
              <h5>Tổng tiền: 87,390,000đ</h5>
            </Col>


          </Row>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}

