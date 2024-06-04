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
        <img src={logo} alt="" />
        <span>Five Diamond</span>
      </div>
      <hr className="rounded" />
      <h1>Admin DashBoard</h1>
      <hr className="rounded" />

<<<<<<< Updated upstream
      <li>
        <StackedLineChartIcon
          color="info"
          fontSize="large"
        ></StackedLineChartIcon>
        <Link to={routes.adminStatistics}>Thống Kê</Link>
      </li>
      <li>
        <BarChartIcon color="info" fontSize="large"></BarChartIcon>
        <Link to="">Biểu Đồ</Link>
      </li>
      <li>
        <ShoppingCartIcon color="info" fontSize="large"></ShoppingCartIcon>
        <Link to="">Quản Lý Đơn Hàng</Link>
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
        <Link to={routes.adminCategory}>Quản Lý Danh Mục</Link>
      </li>
      <li>
        <PersonIcon color="info" fontSize="large"></PersonIcon>
        <Link to="">Quản Lý Khách Hàng</Link>
      </li>
      <li>
        <QuestionMarkIcon color="info" fontSize="large"></QuestionMarkIcon>
        <Link to="">Quản Lý Câu Hỏi FAQs</Link>
      </li>
      <li>
        <EventIcon color="info" fontSize="large"></EventIcon>
        <Link to="">Quản Lý Sự Kiện Sale</Link>
      </li>
    </div>
=======
        <Link to={routes.bst}>
          <CNavItem href="#" className="link-text">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Biểu Đồ
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavItem>
        </Link>

        {/* <CNavGroup
              toggler={
                <>
                  <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
                  dropdown
                </>
              }
            >
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>{" "}
                Nav dropdown item
              </CNavItem>
              <CNavItem href="#">
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>{" "}
                Nav dropdown item
              </CNavItem>
            </CNavGroup> */}
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Quản lý
            đơn hàng
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý sản
            phẩm
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý danh
            mục
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý khách
            hàng
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý câu
            hỏi FAQs
          </CNavItem>
        </Link>
        <Link to={routes.bst} className="link-text">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Quản lý sự
            kiện sale
          </CNavItem>
        </Link>
      </CSidebarNav>
      {/* <CSidebarHeader className="border-top">
            <CSidebarToggler />
          </CSidebarHeader> */}
    </CSidebar>
>>>>>>> Stashed changes
  );
}
