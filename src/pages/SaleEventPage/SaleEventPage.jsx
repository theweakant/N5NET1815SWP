import React, { useState } from "react"; // Import useState
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner4 from "../../../public/assets/images/Banner/banner4.jpg";
import Banner5 from "../../../public/assets/images/Banner/banner5.png";
import Product2 from "../../../public/assets/images/product/product2.png";
import Product3 from "../../../public/assets/images/product/product3.png";
import Product4 from "../../../public/assets/images/product/product4.png";
import Product5 from "../../../public/assets/images/product/product5.png";
import "./SaleEventPage.css";
import OutlinedButtons from "../../components/Button/OutlineButton";
import BasicButton from "../../components/Button/myButton";
import { Container } from "react-bootstrap";
import MyBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { routes } from "../../routes";
import { saleProducts } from "../SaleProductPage/ListOfSaleProducts"; // Ensure the correct path

function SaleEventPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products by category
  const filteredProducts = selectedCategory ? saleProducts.filter(product => product.category === selectedCategory) : saleProducts;

  // Handler for filtering by category
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header />
      <Container>
        <MyBreadcrumb
          title1="KIẾN THỨC"
          link1={routes.blog}
          isChoice1={true}
          title2="CHÍNH SÁCH BẢO HÀNH"
          link2={routes.warrantyPolicy}
          title3="THÔNG TIN KHUYẾN MÃI"
          link3={routes.sale}
        />
        <div className="sale-banner">
          <img className="top-banner" src={Banner4} alt="Top Banner" />
        </div>
        <div>
          <h3 className="content-header">ƯU ĐÃI ĐỘC QUYỀN ONLINE</h3>
          <div className="sale-content">
            <p onClick={() => handleFilter("ring")}>NHẪN ƯU ĐÃI ĐẾN 20%</p>
            <p onClick={() => handleFilter("necklace")}>VÒNG CỔ ƯU ĐÃI ĐẾN 40%</p>
            <p onClick={() => handleFilter("diamond")}>KIM CƯƠNG ƯU ĐÃI 2%</p>
          </div>
          <div className="sale-content-img">
            <img src={Product2} onClick={() => handleFilter("ring")} alt="Ring" /> {/* ring */}
            <img src={Product3} onClick={() => handleFilter("bracelet")} alt="Bracelet" /> {/* bracelet */}
            <img src={Product4} onClick={() => handleFilter("necklace")} alt="Necklace" /> {/* necklace */}
            <img src={Product5} onClick={() => handleFilter("earring")} alt="Earring" /> {/* earring */}
          </div>
          <div className="button" id="outlined">
            <OutlinedButtons text={"Xem tất cả"} onClick={() => handleFilter(null)} /> {/* all */}
          </div>
        </div>
        <div className="button" id="filled">
          <BasicButton color="primary" text2={"ƯU ĐÃI KHÁC"} />
        </div>
        <div className="sale-banner">
          <img className="bot-banner" src={Banner5} alt="Bottom Banner" />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default SaleEventPage;
