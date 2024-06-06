import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Dropdown, Menu } from 'antd';
import "./SaleProductPage.css";
import { saleProducts } from "./ListOfSaleProducts";
import Banner from "../../components/Banner/banner";
import banner1 from "../../../public/assets/images/Banner/banner1.jpg";
import banner2 from "../../../public/assets/images/Banner/banner2.jpg";
import banner3 from "../../../public/assets/images/Banner/banner3.jpg";
import banner4 from "../../../public/assets/images/Banner/banner4.jpg";


const SaleProductPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Filter products by category
    const filteredProducts = selectedCategory ? saleProducts.filter(product => product.category === selectedCategory) : saleProducts;

    // Generate menu items for the dropdown
    const menu = (
        <Menu onClick={({ key }) => setSelectedCategory(key === "all" ? null : key)}>
            <Menu.Item key="all">All</Menu.Item>
            <Menu.Item key="ring">Rings</Menu.Item>
            <Menu.Item key="necklace">Necklaces</Menu.Item>
            <Menu.Item key="bracelet">Bracelets</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Header />

            <Container>
                <Banner
                    className="sale-product-banner"
                    pic1={banner1}
                    pic2={banner2}
                    pic3={banner3}
                    pic4={banner4}
                ></Banner>
                <div>
                    <div className="sale-content">
                        <p>NHẪN ƯU ĐÃI ĐẾN 20%</p>
                        <p>VÒNG CỔ ƯU ĐÃI ĐẾN 40%</p>
                        <p>KIM CƯƠNG ƯU ĐÃI 2%</p>
                    </div>
                    {/* Category dropdown */}
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Filter by Category
                        </a>
                    </Dropdown>
                    <div className='sale-product-card'>
                        {filteredProducts.map((product) => (
                            <div className='col-2' key={product.id}>
                                <div className='card' >
                                    <img src={product.img} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <h3>{product.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default SaleProductPage;
