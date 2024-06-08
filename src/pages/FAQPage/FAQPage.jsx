import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FAQsCollapse from "../../components/Collapse/Collapse";
import { Container } from "react-bootstrap";
import "../../components/Collapse/Collapse.css";

export default function FAQPage() {
  return (
    <div>
      <Header></Header>

      <Container className="container-collapse">
        <h1 className="faq-title">Câu Hỏi Thường Gặp</h1>
        <div className="faq-collapse">
          <FAQsCollapse></FAQsCollapse>
        </div>
      </Container>

      <Footer></Footer>
    </div>
  );
}


