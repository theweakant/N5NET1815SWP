import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Image, ButtonGroup } from 'react-bootstrap';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ImCart } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";
import './CartPage.css';

export default function CartPage() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // This would normally fetch data from an API or local storage
    const initialCartItems = [
      {
        id: 'AFEC000459D2DA1',
        name: 'Bông tai kim cương',
        price: 38050000,
        quantity: 1,
        image: 'https://tnj.vn/75169-large_default/nhan-bac-nu-dinh-da-10mm-nn0440.jpg',
        description: 'Bông tai kim cương đính hạt lớn, thiết kế đẹp mắt và sang trọng.',
        code: 'AFEC000459D2DA1',
      },
      {
        id: 'AFPB001948F2HA1',
        name: 'Mặt dây nữ kim cương',
        price: 17370000,
        quantity: 1,
        image: 'https://lili.vn/wp-content/uploads/2022/10/Day-chuyen-bac-unisex-dinh-kim-cuong-Moissanite-dang-chuoi-da-LILI_054275_2.jpg',
        description: 'Bông tai kim cương đính hạt lớn, thiết kế đẹp mắt và sang trọng.',
        code: 'AFPB001948F2HA1',
      },
      {
        id: 'AFPB001948F8BA1',
        name: 'Dây chuyền nữ kim cương',
        price: 27790000,
        quantity: 1,
        image: 'https://lili.vn/wp-content/uploads/2022/06/Mat-day-chuyen-bac-nu-dinh-kim-cuong-Moissanite-tron-cach-dieu-LILI_413898_6-150x150.jpg',
        description: 'Bông tai kim cương đính hạt lớn, thiết kế đẹp mắt và sang trọng.',
        code: 'AFPB001948F8BA1',
      },
      // Add other items if needed
    ];
    setCartItems(initialCartItems);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  return (
    <div className="page-container">
      <Header />
      <Container className="container">
        <Row>
          <Col md={8} className="Col8 col-md-8">
            <Card>
              <Card.Header>
                <h4><ImCart />  Giỏ hàng ({totalItems} sản phẩm)</h4>
              </Card.Header>
              <ListGroup variant="flush">
                {cartItems.map(item => (
                  <ListGroup.Item key={item.id} className="order-item">
                    <div className="product-details">
                      <Image src={item.image} alt={item.name} className="product-image" />
                      <div className="order-item-details">
                        <h5>{item.name}</h5>
                        <p>Mã sản phẩm: {item.code}</p>
                        <div className="quantity-control">
                          <ButtonGroup>
                            <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                            <span className="quantity">{item.quantity}</span>
                            <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                          </ButtonGroup>
                        </div>
                        <p style={{ color: 'red' }}>Giá: {item.price.toLocaleString()} VNĐ</p>
                        <p>Mô tả: {item.description}</p>
                      </div>
                    </div>
                    <div className='remove-but'>
                      <Button variant="danger" onClick={() => removeItem(item.id)}>Xóa</Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="col-md-4">
            <Card>
              <Card.Header><h4>Summary</h4></Card.Header>
              <Card.Body>
                <h5>Total: {total.toLocaleString()} VNĐ</h5>
                <Button variant="info" className="w-100 btn-proceed-to-checkout" type="submit">Proceed to Checkout</Button>
                <Button variant="secondary" className="w-100 mt-2" type="button"><IoMdArrowRoundBack />  Tiếp tục mua hàng</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
