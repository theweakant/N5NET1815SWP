import React from "react";
import "../DropdownContent/DropdownContent.css";
import { Link } from "react-router-dom";
import dropdownimg from "../../../../public/assets/images/Banner/banner1.jpg";
export default function DropdownContent() {
  return (
    <div className="dropdown">
      <div className="dropdownItem">
        <Link to="">Nhẫn Kim Cương</Link>
        <Link to="">Vòng tay Kim Cương</Link>
        <Link to="">Khuyên tai kim cương</Link>
        <Link to="">Lắc Tay Kim Cương</Link>
        <Link to="">Nhẫn Kim Cương</Link>
        <Link to="">Nhẫn Kim Cương</Link>
        <Link to="">Nhẫn Kim Cương</Link>
      </div>
      <div className="dropdownItem">
        <img src={dropdownimg} alt="" />
      </div>
    </div>
  );
}
