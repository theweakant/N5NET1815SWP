import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from "../../../public/assets/images/Logo/logo.png";
import BarChartIcon from "@mui/icons-material/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import CategoryIcon from "@mui/icons-material/Category";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import EventIcon from "@mui/icons-material/Event";
import { routes } from "../../routes";
export default function SideBar() {
  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <Link to={routes.home}>
          <img src={logo} alt="" />
        </Link>
        <span>Five Diamond</span>
      </div>
      <hr className="rounded" />
      <h1>Admin DashBoard</h1>
      <hr className="rounded" />

      <li>
        <StackedLineChartIcon
          color="info"
          fontSize="large"
        ></StackedLineChartIcon>
        <Link to="">Thống Kê</Link>
      </li>
      <li>
        <BarChartIcon color="info" fontSize="large"></BarChartIcon>
        <Link to="">Biểu Đồ</Link>
      </li>
      <li>
        <ShoppingCartIcon color="info" fontSize="large"></ShoppingCartIcon>
        <Link to={routes.adminmanageorder}>Quản Lý Đơn Hàng</Link>
      </li>
      <li>
        <DiamondIcon color="info" fontSize="large"></DiamondIcon>
        <Link to={routes.adminProduct}>Quản Lý Sản Phẩm</Link>
      </li>
      <li>
        <DiamondIcon color="info" fontSize="large"></DiamondIcon>
        <Link to={routes.adminDiamond}>Quản Lý Kim Cương</Link>
      </li>
      <li>
        <CategoryIcon color="info" fontSize="large"></CategoryIcon>
        <Link to="">Quản Lý Danh Mục</Link>
      </li>
      <li>
        <PersonIcon color="info" fontSize="large"></PersonIcon>
        <Link to={routes.adminUser}>Quản Lý Người Dùng</Link>
      </li>

      <li>
        <EventIcon color="info" fontSize="large"></EventIcon>
        <Link to="">Quản Lý Sự Kiện Sale</Link>
      </li>
    </div>
  );
}
