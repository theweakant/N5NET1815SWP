import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Ninja from "../../../public/assets/images/Avatar/NinjaAvatar.png";
import "./ProfilePage.css"
import BasicButton from '../../components/Button/myButton';
import { Link } from 'react-router-dom';
import InputTextField from '../../components/TextField/TextField';
import BasicDatePicker from '../../components/Button/DatePicker';
import ReadDatePickers from '../../components/Button/DatePicker';
import { Container } from 'react-bootstrap';
function ProfilePage() {
    return (
        <div>
            <Header></Header>
            <div className='profile-avatar'>
                <img id='avt-img' src={Ninja} />
                <a href=''>Chỉnh sửa ảnh đại diện</a>
            </div>
            <Container>
                <div className='info'>
                    <div >
                        <h3 className='info-header'>Thông tin cá nhân</h3>
                        <div className='input'>
                            <label>Họ tên:</label>
                            <InputTextField text={"Nguyễn Tuấn Anh"} />
                        </div>
                        <div className='input'>
                            <label>Giới tính:</label>
                            <InputTextField text={"Nam"} />
                        </div>
                        <div className='input'>
                            <label>Ngày sinh:</label>
                            <ReadDatePickers date={'2004-09-20'} />
                        </div>
                        <div className='input'>
                            <label>Số điện thoại:</label>
                            <InputTextField text={""} />
                        </div>
                        <div className='input'>
                            <label>Địa chỉ:</label>
                            <InputTextField text={""} />
                        </div>
                    </div>
                    <Link to=""><BasicButton text={"Chỉnh sửa thông tin"} /></Link>
                </div>
                <div className='info'>
                    <div>
                        <h3 className='info-header'>Thông tin tài khoản</h3>
                        <div className='input'>
                            <label>Tài khoản:</label>
                            <InputTextField text={""} />
                        </div>
                        <div className='input'>
                            <label>Mật khẩu:</label>
                            <InputTextField text={""} />
                        </div>
                    </div>
                    <Link to=""><BasicButton text={"Đổi mật khẩu"} /></Link>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default ProfilePage;