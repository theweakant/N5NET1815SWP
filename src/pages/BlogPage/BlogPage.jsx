import React from "react";
import Header from "../../layouts/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../layouts/Footer/Footer";
import banner5 from "/assets/images/Banner/banner5.jpg";
import banner6 from "/assets/images/Banner/banner6.jpg";
import banner7 from "/assets/images/Banner/banner7.png";
import banner8 from "/assets/images/Banner/banner8.jpg";
import './BlogPage.css';

const BlogImg = () => (
    <div className="blog-img-container">
        {/* Add any content or images if necessary */}
    </div>
);

export default function BlogPage() {
    return (
        <div>
            <Header />

            <nav className="navbar">
                <Col className="title-navbar">
                    <a href="aboutus">Ve Chung Toi</a>
                </Col>
                <Col className="title-navigation">
                    <a href="#">Chinh sach bao hanh</a>
                </Col>
                <Col className="title-navigation">
                    <a href="#">Kien thuc</a>
                </Col>
                <Col className="title-navigation">
                    <a href="#">Thong tin khuyen mai</a>
                </Col>
            </nav>

            <Container className="blog-container">
                <BlogImg pic5={banner5} pic6={banner6} pic7={banner7} pic8={banner8} />

                <Row className="blog-content-row">
                    <Col md={6} className="blog-banner d-flex gap-2">
                        <img src={banner6} alt="banner6" className="banner-img" />
                    </Col>
                    <Col md={6} className="blog-banner d-flex">
                        <div className="blog-banner-info">
                            <h3>ĐO SIZE NHẪN</h3>
                            <p>
                                Với trang sức, nhẫn là sản phẩm thường phải sửa nhiều nhất cho phù hợp với cỡ tay của người sử dụng.
                                Một chiếc nhẫn vừa vặn sẽ cho bạn cảm giác tự tin thoải mái khi đeo.
                            </p>
                            <button className="button-detail">Xem chi tiet</button>
                        </div>
                    </Col>
                </Row>
                <Row className="blog-content-row">
                    <Col md={6} className="blog-banner d-flex">
                        <div className="blog-banner-info">
                            <h3>KIẾN THỨC KIM CƯƠNG</h3>
                            <p>
                                Tên gọi “kim cương” trong tiếng Hy Lạp là “adamas” có nghĩa là “không thể phá huỷ”.
                                Còn trong ngôn ngữ tiếng Việt, chữ “kim cương” có gốc Hán Việt nghĩa là “kim loại cứng”.
                            </p>
                            <button className="button-detail">Xem chi tiet</button>
                        </div>
                    </Col>
                    <Col md={6} className="blog-banner d-flex">
                        <img src={banner7} alt="banner7" className="banner-img" />
                    </Col>
                </Row>
                <Row className="blog-content-row">
                    <Col md={6} className="blog-banner d-flex">
                        <img src={banner8} alt="banner8" className="banner-img" />
                    </Col>
                    <Col md={6} className="blog-banner d-flex">
                        <div className="blog-banner-info">
                            <h3>KIẾN THỨC TRANG SỨC</h3>
                            <p>
                                Ngay từ buổi đầu, trang sức đã là một phần không thể thiếu trong văn minh nhân loại.
                                Trải qua nhiều thời kì khác nhau cho đến ngày nay, trang sức đã phát triển vượt bậc.
                            </p>
                            <button className="button-detail">Xem chi tiet</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}
