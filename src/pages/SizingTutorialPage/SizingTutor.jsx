import React, { useState } from "react";
import Header from "../../layouts/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../layouts/Footer/Footer";

import banner6 from "/assets/images/Banner/banner6.jpg";

import { Box, Button, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import './SizingTutor.css';

const predefinedLengths = [4.6, 4.7, 4.9, 5, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 6, 6.1, 6.3, 6.4];


const TutorImage = () => (
    <div className="blog-img-container">
        {/* Add any images or content here if needed */}
    </div>
);

export default function SizingTutor() {
    const [selectedLengths, setSelectedLengths] = useState([]);
    const [ringSizes, setRingSizes] = useState([]);

    const calculateRingSizes = (lengths) => {
        const sizes = lengths.map(length => ({
            length,
            size: (length / 0.314).toFixed(1)
        }));
        setRingSizes(sizes);
    };

    const handleCheckboxChange = (values) => {
        setSelectedLengths(values);
    };

    const handleCalculate = () => {
        if (selectedLengths.length > 0) {
            calculateRingSizes(selectedLengths);
        }
    };

    return (
        <div>
            <Header />

            <Container className="container">
                <div>
                    <h1>Cách đo size nhẫn</h1>
                    <h2>1. Dùng chỉ hoặc giấy bản nhỏ đo quấn quanh khớp tay, đánh dấu vị trí cắt nhau</h2>
                    <img src={banner6} alt="banner6" className="banner-img" />
                    <h2>2. Dùng thước đo chiều dài đoạn dây vừa đo được (đơn vị cm)</h2>
                    <img src={banner6} alt="banner6" className="banner-img" />
                </div>

                <div>
                    <Row>
                        <Col>
                            <h3>Chọn chiều dài đo được:</h3>
                            <Box className="checkbox-container">
                                <CheckboxGroup onChange={handleCheckboxChange}>
                                    <Stack className="checkbox-stack">
                                        {predefinedLengths.map((length) => (
                                            <Checkbox key={length} value={length.toString()}>
                                                {length} cm
                                            </Checkbox>
                                        ))}
                                    </Stack>
                                </CheckboxGroup>
                            </Box>
                            <Button className="button-calculate" onClick={handleCalculate} mt={2}>Tính kích cỡ nhẫn</Button>
                        </Col>

                        <Col>
                            <h3>Kích cỡ nhẫn của bạn là:</h3>
                            <Box className="result-box">
                                {ringSizes.map(({ length, size }) => (
                                    <Box key={length} className="result-item">
                                        Chiều dài: {length} cm - Kích cỡ: {size}
                                    </Box>
                                ))}
                            </Box>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Footer />
        </div>
    );
}
