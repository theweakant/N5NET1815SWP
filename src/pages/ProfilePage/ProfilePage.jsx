import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Ninja from "../../../public/assets/images/Avatar/NinjaAvatar.png";
import "./ProfilePage.css";
import BasicButton from "../../components/Button/myButton";
import { Link } from "react-router-dom";
import InputTextField from "../../components/TextField/TextField";
import ReadDatePickers from "../../components/Button/DatePicker";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";
function ProfilePage() {
  return (
    <div>
      <Header></Header>
      <div className="avatar-user">
        <img id="avt-img" src={Ninja} />
        <UploadAvatar>Chỉnh sửa ảnh đại diện</UploadAvatar>
      </div>
      <div className="info">
        <div className="info-text">
          <h3>Thông tin cá nhân</h3>
          <div className="input">
            <label>Họ tên:</label>
            <InputTextField text={""} />
          </div>
          <div className="input">
            <label>Giới tính:</label>
            <InputTextField text={""} />
          </div>
          <div className="input">
            <label>Ngày sinh:</label>
            <ReadDatePickers
              date={""} 
              />
          </div>
          <div className="input">
            <label>Số điện thoại:</label>
            <InputTextField text={""} />
          </div>
          <div className="input">
            <label>Địa chỉ:</label>
            <InputTextField text={""} />
          </div>
        </div>
        <Link to="">
          <BasicButton text={"Chỉnh sửa thông tin"} />
        </Link>
      </div>
      <div className="info">
        <div>
          <h3>Thông tin tài khoản</h3>
          <div className="input">
            <label>Tài khoản:</label>
            <InputTextField text={""} />
          </div>
          <div className="input">
            <label>Mật khẩu:</label>
            <InputTextField text={""} />
          </div>
        </div>
        <Link to="">
          <BasicButton text={"Đổi mật khẩu"} />
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProfilePage;
