import React from "react";
import Header from "../layouts/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../layouts/Footer/Footer";
import ProductCard from "../components/productCard";
import banner1 from "../../public/assets/images/Banner/banner1.jpg";
import banner2 from "../../public/assets/images/Banner/banner2.jpg";
import banner3 from "../../public/assets/images/Banner/banner3.jpg";
import banner4 from "../../public/assets/images/Banner/banner4.jpg";
import product1 from "../../public/assets/images/product/product1.png";
import Banner from "../components/banner";

export default function GuestPage() {
  return (
    <div>
      <Header></Header>

      <Container>
        <Banner
          pic1={banner1}
          pic2={banner2}
          pic3={banner3}
          pic4={banner4}
        ></Banner>

        <Row>
          <Col>
            <ProductCard
              img={product1}
              text={"Nhẫn Cưới Salsa 111841F2KK1 111841F2ML1"}
              price={"22,000,000đ"}
            ></ProductCard>
          </Col>
          <Col>
            <ProductCard
              img={product1}
              text={"Nhẫn Cưới Salsa 111841F2KK1 111841F2ML1"}
              price={"22,000,000đ"}
            ></ProductCard>
          </Col>
          <Col>
            <ProductCard
              img={product1}
              text={"Nhẫn Cưới Salsa 111841F2KK1 111841F2ML1"}
              price={"22,000,000đ"}
            ></ProductCard>
          </Col>
          <Col>
            <ProductCard
              img={product1}
              text={"Nhẫn Cưới Salsa 111841F2KK1 111841F2ML1"}
              price={"22,000,000đ"}
            ></ProductCard>
          </Col>
          <Col>
            <ProductCard
              img={product1}
              text={"Nhẫn Cưới Salsa 111841F2KK1 111841F2ML1"}
              price={"22,000,000đ"}
            ></ProductCard>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
}
