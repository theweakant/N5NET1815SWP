import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Card, ProgressBar } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Popover, Steps } from 'antd';
import './TrackingPage.css';

const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

const TrackingPage = () => {
    const sizeChartRef = useRef(null);

    return (
        <div className="page-container">
            <Header />
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>THÔNG TIN NGƯỜI MUA</h3>
                        <Form>
                            <Form.Group controlId="formFullName">
                                <Form.Label>Họ Tên:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ tên" />
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Điện Thoại:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số điện thoại" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email" />
                            </Form.Group>
                            <Form.Group controlId="formBirthDate">
                                <Form.Label>Ngày Sinh:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Địa chỉ:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập địa chỉ" />
                            </Form.Group>
                        </Form>

                        <h4>HÌNH THỨC THANH TOÁN</h4>
                        <Form.Group controlId="formPaymentMethod">
                            <Form.Check type="radio" label="Thanh toán COD" name="paymentMethod" />
                            <Form.Check type="radio" label="Thanh toán chuyển khoản" name="paymentMethod" />
                        </Form.Group>
                        <Form.Group controlId="formNote">
                            <Form.Label>GHI CHÚ:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Nhập ghi chú" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <h3>THÔNG TIN ĐƠN HÀNG</h3>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xs={8}>
                                        <p>HOA TAI 18K AFEC0004382DDA1</p>
                                        <p>MSP: AFEC0004382DDA1</p>
                                        <p>SỐ LƯỢNG: 1</p>
                                    </Col>
                                    <Col xs={4} className="text-right">
                                        <p>Giá tiền: 42,820,000đ</p>
                                        <p>Tạm tính: 42,820,000đ</p>
                                        <p>Thành tiền: 42,820,000đ</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <p>NHẪN ĐÍNH HÔN KIM CƯƠNG ENR3111W</p>
                                        <p>MSP: ENR3111W</p>
                                        <p>SỐ LƯỢNG: 1</p>
                                    </Col>
                                    <Col xs={4} className="text-right">
                                        <p>Giá tiền: 44,520,000đ</p>
                                        <p>Tạm tính: 44,520,000đ</p>
                                        <p>Thành tiền: 44,520,000đ</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <h3>Đơn hàng / Theo dõi</h3>
                        <Card>
                            <Card.Body>
                                <p>Mã ID: DM20241652003</p>
                                <p>Ngày giao hàng dự kiến: 16/05/2024</p>
                                <p>Giao hàng bởi: 5Diamond Express</p>
                                <p>Trạng thái: Đang chờ lấy hàng</p>
                                <p>Tracking #: 18003954059</p>

                                <h5>Hành trình đơn hàng</h5>
                                <Steps
                                    current={0}
                                    progressDot={customDot}
                                    items={[
                                        {
                                            title: 'Xác nhận',
                                            description: 'Your order has been confirmed.',
                                        },
                                        {
                                            title: 'Chờ lấy hàng',
                                            description: 'Your order is waiting to be picked up.',
                                        },
                                        {
                                            title: 'Chờ giao hàng',
                                            description: 'Your order is on the way.',
                                        },
                                        {
                                            title: 'Giao thành công',
                                            description: 'Your order has been delivered.',
                                        },
                                    ]}
                                />

                                <Button variant="primary" className="mt-3">Trở về trang chủ</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default TrackingPage;
