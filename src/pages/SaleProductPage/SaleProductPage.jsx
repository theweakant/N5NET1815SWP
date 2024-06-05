import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/productCard/productCard";
import Banner4 from "../../../public/assets/images/Banner/banner4.jpg";
import Banner5 from "../../../public/assets/images/Banner/banner5.png";
import Product2 from "../../../public/assets/images/product/product2.png";
import Product3 from "../../../public/assets/images/product/product3.png";
import Product4 from "../../../public/assets/images/product/product4.png";
import Product5 from "../../../public/assets/images/product/product5.png";
import "./SaleProductPage.css";
import OutlinedButtons from "../../components/Button/OutlineButton";
import BasicButton from "../../components/Button/myButton";
import MyBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { routes } from "../../routes";

function SaleProductPage() {
    return (
        <div>
            <Header />
            <Container>
                <div>
                    <div className="sale-content">
                        <p>NHẪN ƯU ĐÃI ĐẾN 20%</p>
                        <p>VÒNG CỔ ƯU ĐÃI ĐẾN 40%</p>
                        <p>KIM CƯƠNG ƯU ĐÃI 2%</p>
                    </div>
                    <Row>
                        <Col>
                            <ProductCard
                                img={Product2} // Assuming these are the correct paths to your product images
                                text={"Nhẫn Cưới Salsa 111841F2KK1 111841F2ML1"}
                                price={"22,000,000đ"}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                img={Product3}
                                text={"Product 3 Name"}
                                price={"Price 3"}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                img={Product4}
                                text={"Product 4 Name"}
                                price={"Price 4"}
                            />
                        </Col>
                        <Col>
                            <ProductCard
                                img={Product5}
                                text={"Product 5 Name"}
                                price={"Price 5"}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default SaleProductPage;
