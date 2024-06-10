import React from "react";
import "../DropdownContent/DropdownContent.css";
import { Link } from "react-router-dom";
import dropdownimg from "../../../../public/assets/images/Banner/banner1.jpg";
export default function DropdownContent() {
  return (
    <div className="dropdown">
      <div className="dropdownItem">
        <div className="dropdownLink">
          <h3>Trang Sức Kim Cương</h3>
          <Link>
            <p to="">Nhẫn Kim Cương</p>
          </Link>
          <Link to="">
            <p>Vòng cổ Kim Cương</p>
          </Link>
          <Link to="">
            <p>Khuyên tai kim cương</p>
          </Link>
          <Link to="">
            <p>Mặt Dây Chuyền Kim Cương</p>
          </Link>
          <Link to="">
            <p>Lắc Tay, Vòng Tay Kim Cương</p>
          </Link>
          <Link to="">
            <p>Vỏ Nhẫn Kim Cương</p>
          </Link>
          <Link to="">
            <p>Vỏ Mặt Dây Chuyền Kim Cương</p>
          </Link>
        </div>
      </div>
      <div className="dropdownItem">
        <div className="dropdownLink">
          <h3>Mức Giá</h3>
          <Link>
            <p to="">5-10 Triệu</p>
          </Link>
          <Link to="">
            <p>10-20 Triệu</p>
          </Link>
          <Link to="">
            <p>20-30 Triệu</p>
          </Link>
          <Link to="">
            <p>30-50 Triệu</p>
          </Link>
          <Link to="">
            <p>50-100 Triệu</p>
          </Link>
          <Link to="">
            <p>100-300 Triệu</p>
          </Link>
        </div>
      </div>
      <div className="dropdownItem">
        <img src={dropdownimg} alt="" />
      </div>
    </div>
  );
}
