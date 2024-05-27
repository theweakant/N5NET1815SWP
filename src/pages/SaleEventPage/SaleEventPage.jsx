import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner4 from '../../../public/assets/images/Banner/banner4.jpg'
import Banner5 from '../../../public/assets/images/Banner/banner5.png'
import Product2 from '../../../public/assets/images/product/product2.png'
import Product3 from '../../../public/assets/images/product/product3.png'
import Product4 from '../../../public/assets/images/product/product4.png'
import Product5 from '../../../public/assets/images/product/product5.png'
import './SaleEventPage.css'
import OutlinedButtons from '../../components/Button/OutlineButton';
import BasicButton from '../../components/Button/myButton';

function SaleEventPage() {
    return (
        <div>
            <Header />
            <div className='sale-banner'>
                <img className='top-banner' src={Banner4} />
            </div>
            <div>
                <h3 className='content-header'>ƯU ĐÃI ĐỘC QUYỀN ONLINE</h3>
                <div className='sale-content'>
                    <p>NHẪN ƯU ĐÃI ĐẾN 20%</p>
                    <p>VÒNG CỔ ƯU ĐÃI ĐẾN 40%</p>
                    <p>KIM CƯƠNG ƯU ĐÃI 2%</p>
                </div>
                <div className='sale-content-img'>
                    <img src={Product2} />
                    <img src={Product3} />
                    <img src={Product4} />
                    <img src={Product5} />
                </div>
                <div className='button' id='outlined'>
                    <OutlinedButtons text={"Xem tất cả"}/>
                </div>
            </div>
            <div className='button' id='filled'>
                <BasicButton
                    color="primary"
                    text2={"ƯU ĐÃI KHÁC"} />
            </div>
            <div className='sale-banner'>
                <img className='bot-banner' src={Banner5} />
            </div>
            <Footer />
        </div>
    );
}

export default SaleEventPage;