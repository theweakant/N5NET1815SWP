import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Menu, Pagination } from 'antd';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SaleProductPage.css";
import { saleProducts } from "./ListOfSaleProducts";
import Banner from "../../components/Banner/banner";
import banner1 from "../../../public/assets/images/Banner/banner1.jpg";
import banner2 from "../../../public/assets/images/Banner/banner2.jpg";
import banner3 from "../../../public/assets/images/Banner/banner3.jpg";
import banner4 from "../../../public/assets/images/Banner/banner4.jpg";

const SaleProductPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 16; // Number of items per page

    // Pagination handler
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
        setCurrentPage(pageNumber);
        // Update URL using React Router
        // history.push(`/san-pham-giam-gia/page-${pageNumber}`);
    };

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Filter products by category
    const filteredProducts = selectedCategory ? saleProducts.filter(product => product.category === selectedCategory) : saleProducts;

    // Slice the products array based on the current page and page size
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // Function to calculate sale price
    const calculateSalePrice = (originalPrice, discountPercentage) => {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const salePrice = originalPrice - discountAmount;
        return salePrice.toFixed(2); // Round to 2 decimal places
    };

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
                {/* Banner component */}
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
                    {/* Sale product cards */}
                    <div className='sale-product-card'>
                        {paginatedProducts.map((product) => {
                            const salePrice = calculateSalePrice(product.price, product.sale);
                            const salePercentage = `${product.sale * 100}%`;
                            return (
                                <div className='col-3' key={product.id}>
                                    <div className='product-card' >
                                        <Link className="product-detail-img" to='/san-pham'>
                                            <img src={product.img} alt={product.name} />
                                        </Link>

                                        <div className="product-card-infor">
                                            <Link className="product-detail" to='/san-pham'>
                                                <h3>{product.name}</h3>
                                            </Link>

                                            <div>
                                                <h3 className="sale-price">{salePrice}</h3>
                                            </div>
                                            {/* Sale price and discount */}
                                            <div className="price-info">
                                                <span className="retail-price">{product.price}</span>
                                                <span className="sale-percent"> (-{salePercentage})</span>
                                            </div>
                                            {/* Rating */}
                                            <div className="star-rating">
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span>{product.rating}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Pagination */}
                <Pagination
                    className="pagination"
                    current={currentPage}
                    onChange={onChange}
                    total={filteredProducts.length}
                    pageSize={pageSize}
                />
                {/* Display page number in URL for page 2 and onwards */}
                {currentPage > 1 && (
                    <Link to={`/san-pham-giam-gia/page-${currentPage}`} className="page-link">{currentPage}</Link>
                )}
            </Container>
            <Footer />
        </div>

    );
};

export default SaleProductPage;
